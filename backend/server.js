const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const db = require("./db");

const app = express();
const PORT = 5000;
const uploadDir = path.join(__dirname, "uploads");

if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

app.use(cors());
app.use(express.json({ limit: "30mb" }));

// Frontend files
app.use(express.static(path.join(__dirname, "..")));
app.use("/uploads", express.static(uploadDir));
app.get("/booking.html", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "booking.html"));
});
app.get("/admin/dashboard.html", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "admin", "dashboard.html"));
});

function ensureColumn(tableName, columnName, columnDefinition) {
    db.query(`ALTER TABLE ${tableName} ADD COLUMN ${columnName} ${columnDefinition}`, (err) => {
        if (err && err.code !== "ER_DUP_FIELDNAME") {
            console.error(`${tableName}.${columnName} setup error:`, err.message);
        }
    });
}

function saveBase64Image(dataUrl, prefix) {
    if (!dataUrl || !dataUrl.startsWith("data:image/")) {
        return null;
    }

    const matches = dataUrl.match(/^data:image\/([a-zA-Z0-9+.-]+);base64,(.+)$/);

    if (!matches) {
        return null;
    }

    const extension = matches[1].replace("jpeg", "jpg").split("+")[0];
    const fileName = `${prefix}-${Date.now()}.${extension}`;
    const filePath = path.join(uploadDir, fileName);

    fs.writeFileSync(filePath, Buffer.from(matches[2], "base64"));

    return `/uploads/${fileName}`;
}

// Test
app.get("/api/test", (req, res) => {
    res.json({ message: "AYYA Backend working!" });
});

db.query(`
    CREATE TABLE IF NOT EXISTS bookings (
        id INT AUTO_INCREMENT PRIMARY KEY,
        booking_id VARCHAR(50) NOT NULL,
        customer_name VARCHAR(120) NOT NULL,
        phone VARCHAR(40) NOT NULL,
        pickup_location VARCHAR(255) NOT NULL,
        vehicle_brand VARCHAR(120) NULL,
        vehicle_model VARCHAR(120) NOT NULL,
        registration_number VARCHAR(80) NULL,
        service VARCHAR(120) NOT NULL,
        booking_date DATE NULL,
        booking_time TIME NULL,
        problem TEXT NOT NULL,
        status VARCHAR(40) NOT NULL DEFAULT 'Confirmed',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
`, (err) => {
    if (err) {
        console.error("Bookings table setup error:", err.message);
        return;
    }

    console.log("Bookings table ready.");
});

ensureColumn("bookings", "vehicle_brand", "VARCHAR(120) NULL");
ensureColumn("bookings", "registration_number", "VARCHAR(80) NULL");
ensureColumn("bookings", "booking_date", "DATE NULL");
ensureColumn("bookings", "booking_time", "TIME NULL");
ensureColumn("bookings", "problem", "TEXT NULL");
ensureColumn("bookings", "created_at", "TIMESTAMP DEFAULT CURRENT_TIMESTAMP");
ensureColumn("bookings", "issue_image_path", "VARCHAR(255) NULL");
ensureColumn("bookings", "status", "VARCHAR(40) NOT NULL DEFAULT 'Confirmed'");

setTimeout(() => {
    db.query(`
        UPDATE bookings
        SET
            vehicle_brand = COALESCE(NULLIF(vehicle_brand, ''), vehicle_model),
            registration_number = COALESCE(registration_number, ''),
            booking_date = COALESCE(booking_date, DATE(created_at), CURDATE()),
            booking_time = COALESCE(booking_time, TIME(created_at), CURTIME()),
            status = COALESCE(NULLIF(status, ''), 'Confirmed')
        WHERE
            vehicle_brand IS NULL OR vehicle_brand = ''
            OR registration_number IS NULL
            OR booking_date IS NULL
            OR booking_time IS NULL
            OR status IS NULL OR status = ''
    `, (err) => {
        if (err) {
            console.error("Bookings cleanup error:", err.message);
        }
    });
}, 1000);

db.query(`
    CREATE TABLE IF NOT EXISTS enquiries (
        id INT AUTO_INCREMENT PRIMARY KEY,
        customer_name VARCHAR(120) NOT NULL,
        phone VARCHAR(40) NOT NULL,
        service_type VARCHAR(120) NOT NULL,
        details TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
`, (err) => {
    if (err) {
        console.error("Enquiries table setup error:", err.message);
        return;
    }

    console.log("Enquiries table ready.");
});

db.query(`
    CREATE TABLE IF NOT EXISTS job_cards (
        id INT AUTO_INCREMENT PRIMARY KEY,
        job_card_no VARCHAR(50) NOT NULL,
        booking_id VARCHAR(50) NOT NULL,
        customer_name VARCHAR(120) NOT NULL,
        phone VARCHAR(40) NOT NULL,
        pickup_location VARCHAR(255) NOT NULL,
        vehicle_model VARCHAR(120) NOT NULL,
        service VARCHAR(120) NOT NULL,
        problem TEXT NOT NULL,
        status VARCHAR(40) NOT NULL DEFAULT 'Open',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
`, (err) => {
    if (err) {
        console.error("Job cards table setup error:", err.message);
        return;
    }

    console.log("Job cards table ready.");
});

ensureColumn("job_cards", "issue_image_path", "VARCHAR(255) NULL");
ensureColumn("job_cards", "completion_image_path", "VARCHAR(255) NULL");
ensureColumn("job_cards", "completion_note", "TEXT NULL");
ensureColumn("job_cards", "completed_at", "TIMESTAMP NULL");
ensureColumn("job_cards", "vehicle_number", "VARCHAR(80) NULL");
ensureColumn("job_cards", "km_reading", "INT NULL");
ensureColumn("job_cards", "job_datetime", "DATETIME NULL");
ensureColumn("job_cards", "customer_complaint", "TEXT NULL");
ensureColumn("job_cards", "inspection_details", "TEXT NULL");
ensureColumn("job_cards", "work_to_be_done", "TEXT NULL");
ensureColumn("job_cards", "spare_parts_used", "TEXT NULL");
ensureColumn("job_cards", "labour_charges", "DECIMAL(10,2) NULL");
ensureColumn("job_cards", "total_amount", "DECIMAL(10,2) NULL");
ensureColumn("job_cards", "payment_status", "VARCHAR(40) NULL");
ensureColumn("job_cards", "delivery_date", "DATE NULL");

app.get("/api/bookings", (req, res) => {
    db.query("SELECT * FROM bookings ORDER BY id DESC", (err, rows) => {
        if (err) {
            console.error("Bookings fetch error:", err);
            return res.status(500).json({
                success: false,
                message: err.message
            });
        }

        res.json({
            success: true,
            bookings: rows
        });
    });
});

app.get("/api/dashboard-stats", (req, res) => {
    const statsSql = `
        SELECT
            COUNT(*) AS total,
            SUM(status IN ('Confirmed', 'Bike Received', 'Inspection', 'Ready')) AS pending,
            SUM(status = 'In Service') AS inService,
            SUM(status IN ('Completed', 'Delivered')) AS completed
        FROM bookings
    `;

    db.query(statsSql, (err, rows) => {
        if (err) {
            console.error("Dashboard stats error:", err.message);
            return res.status(500).json({
                success: false,
                message: "Failed to load dashboard statistics."
            });
        }

        const stats = rows[0] || {};

        res.json({
            success: true,
            total: Number(stats.total) || 0,
            pending: Number(stats.pending) || 0,
            inService: Number(stats.inService) || 0,
            completed: Number(stats.completed) || 0
        });
    });
});

app.put("/api/bookings/:id/status", (req, res) => {
    const { status } = req.body;
    const allowedStatuses = [
        "Confirmed",
        "Bike Received",
        "Inspection",
        "In Service",
        "Ready",
        "Completed",
        "Delivered"
    ];

    if (!allowedStatuses.includes(status)) {
        return res.status(400).json({
            success: false,
            message: "Invalid status."
        });
    }

    db.query(
        "UPDATE bookings SET status = ? WHERE id = ?",
        [status, req.params.id],
        (err, result) => {
            if (err) {
                console.error("Booking status update error:", err.message);
                return res.status(500).json({
                    success: false,
                    message: "Failed to update booking status."
                });
            }

            if (!result.affectedRows) {
                return res.status(404).json({
                    success: false,
                    message: "Booking not found."
                });
            }

            db.query(
                `
                    UPDATE job_cards jc
                    INNER JOIN bookings b ON b.booking_id = jc.booking_id
                    SET
                        jc.status = ?,
                        jc.completed_at = CASE
                            WHEN ? IN ('Completed', 'Delivered') THEN COALESCE(jc.completed_at, CURRENT_TIMESTAMP)
                            ELSE jc.completed_at
                        END
                    WHERE b.id = ?
                `,
                [status, status, req.params.id],
                (jobErr) => {
                    if (jobErr) {
                        console.error("Job card status sync error:", jobErr.message);
                    }

                    res.json({
                        success: true,
                        message: "Booking status updated."
                    });
                }
            );
        }
    );
});

app.get("/api/enquiries", (req, res) => {
    db.query("SELECT * FROM enquiries ORDER BY id DESC", (err, rows) => {
        if (err) {
            console.error("Enquiries fetch error:", err);
            return res.status(500).json({
                success: false,
                message: err.message
            });
        }

        res.json(rows);
    });
});

app.get("/api/job-cards", (req, res) => {
    db.query("SELECT * FROM job_cards ORDER BY id DESC", (err, rows) => {
        if (err) {
            console.error("Job cards fetch error:", err);
            return res.status(500).json({
                success: false,
                message: err.message
            });
        }

        res.json(rows);
    });
});

app.get("/api/job-cards/:bookingId", (req, res) => {
    db.query(
        "SELECT * FROM job_cards WHERE booking_id = ? LIMIT 1",
        [req.params.bookingId],
        (err, rows) => {
            if (err) {
                console.error("Job card fetch error:", err);
                return res.status(500).json({
                    success: false,
                    message: err.message
                });
            }

            if (!rows.length) {
                return res.status(404).json({
                    success: false,
                    message: "Job card not found"
                });
            }

            res.json(rows[0]);
        }
    );
});

app.patch("/api/job-cards/:bookingId", (req, res) => {
    const {
        status,
        problem,
        issueImage,
        completionImage,
        completionNote
    } = req.body;

    const issueImagePath = saveBase64Image(issueImage, "issue");
    const completionImagePath = saveBase64Image(completionImage, "complete");
    const fields = [];
    const values = [];

    if (status) {
        fields.push("status = ?");
        values.push(status);
    }

    if (typeof problem === "string") {
        fields.push("problem = ?");
        values.push(problem);
    }

    if (issueImagePath) {
        fields.push("issue_image_path = ?");
        values.push(issueImagePath);
    }

    if (completionImagePath) {
        fields.push("completion_image_path = ?");
        values.push(completionImagePath);
    }

    if (typeof completionNote === "string") {
        fields.push("completion_note = ?");
        values.push(completionNote);
    }

    if (status === "Completed") {
        fields.push("completed_at = CURRENT_TIMESTAMP");
    }

    if (!fields.length) {
        return res.status(400).json({
            success: false,
            message: "No job card updates received"
        });
    }

    values.push(req.params.bookingId);

    db.query(
        `UPDATE job_cards SET ${fields.join(", ")} WHERE booking_id = ?`,
        values,
        (err, result) => {
            if (err) {
                console.error("Job card update error:", err);
                return res.status(500).json({
                    success: false,
                    message: err.message
                });
            }

            if (!result.affectedRows) {
                return res.status(404).json({
                    success: false,
                    message: "Job card not found"
                });
            }

            db.query(
                "SELECT * FROM job_cards WHERE booking_id = ? LIMIT 1",
                [req.params.bookingId],
                (selectErr, rows) => {
                    if (selectErr) {
                        return res.status(500).json({
                            success: false,
                            message: selectErr.message
                        });
                    }

                    res.json({
                        success: true,
                        jobCard: rows[0]
                    });
                }
            );
        }
    );
});

app.post("/api/job-cards", (req, res) => {
    const {
        customerName,
        mobileNumber,
        vehicleNumber,
        vehicleModel,
        kmReading,
        dateTime,
        customerComplaint,
        inspectionDetails,
        workToBeDone,
        sparePartsUsed,
        labourCharges,
        totalAmount,
        paymentStatus,
        deliveryDate,
        beforeImage,
        afterImage
    } = req.body;

    if (!customerName || !mobileNumber || !vehicleNumber || !vehicleModel) {
        return res.status(400).json({
            success: false,
            message: "Customer name, mobile number, vehicle number, and vehicle model are required."
        });
    }

    const jobCardNo = "JC-" + Date.now();
    const bookingId = "MANUAL-" + Date.now();
    const problem = customerComplaint || "";
    const issueImagePath = saveBase64Image(beforeImage, "issue");
    const completionImagePath = saveBase64Image(afterImage, "complete");

    const sql = `
        INSERT INTO job_cards
        (
            job_card_no,
            booking_id,
            customer_name,
            phone,
            pickup_location,
            vehicle_model,
            service,
            problem,
            status,
            vehicle_number,
            km_reading,
            job_datetime,
            customer_complaint,
            inspection_details,
            work_to_be_done,
            spare_parts_used,
            labour_charges,
            total_amount,
            payment_status,
            delivery_date,
            issue_image_path,
            completion_image_path
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(
        sql,
        [
            jobCardNo,
            bookingId,
            customerName,
            mobileNumber,
            "",
            vehicleModel,
            "Manual Job Card",
            problem,
            "Open",
            vehicleNumber,
            kmReading || null,
            dateTime ? dateTime.replace("T", " ") : null,
            customerComplaint || "",
            inspectionDetails || "",
            workToBeDone || "",
            sparePartsUsed || "",
            labourCharges || null,
            totalAmount || null,
            paymentStatus || "Pending",
            deliveryDate || null,
            issueImagePath,
            completionImagePath
        ],
        (err, result) => {
            if (err) {
                console.error("Manual job card save error:", err.message);
                return res.status(500).json({
                    success: false,
                    message: "Failed to save job card."
                });
            }

            res.status(201).json({
                success: true,
                message: "Job card saved.",
                id: result.insertId,
                jobCardNo,
                bookingId
            });
        }
    );
});

// Booking API
app.post("/api/bookings", (req, res) => {
    let {
        fullName,
        phoneNumber,
        pickupLocation,
        vehicleBrand,
        bikeModel,
        registrationNumber,
        preferredService,
        bookingDate,
        bookingTime,
        serviceDetails,
        issueImage
    } = req.body;

    if (!fullName || !phoneNumber || !preferredService || !serviceDetails) {
        return res.status(400).json({
            success: false,
            message: "Name, phone number, service type, and service details are required"
        });
    }

    pickupLocation = pickupLocation || "Customer will confirm pickup/location by phone";
    vehicleBrand = vehicleBrand || "Not specified";
    bikeModel = bikeModel || serviceDetails;
    registrationNumber = registrationNumber || "";
    bookingDate = bookingDate || new Date().toISOString().slice(0, 10);
    bookingTime = bookingTime || new Date().toTimeString().slice(0, 5);

    const bookingId = "AYYA-" + Date.now();
    const jobCardNo = "JC-" + Date.now();
    const issueImagePath = saveBase64Image(issueImage, "issue");

    const sql = `
        INSERT INTO bookings
        (booking_id, customer_name, phone, pickup_location, vehicle_brand, vehicle_model, registration_number, service, booking_date, booking_time, problem, issue_image_path, status)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(
        sql,
        [
            bookingId,
            fullName,
            phoneNumber,
            pickupLocation,
            vehicleBrand,
            bikeModel,
            registrationNumber,
            preferredService,
            bookingDate,
            bookingTime,
            serviceDetails,
            issueImagePath,
            "Confirmed"
        ],
        (err, result) => {
            if (err) {
                console.error("Booking save error:", err);
                return res.status(500).json({
                    success: false,
                    message: err.message
                });
            }

            const jobCardSql = `
                INSERT INTO job_cards
                (job_card_no, booking_id, customer_name, phone, pickup_location, vehicle_model, service, problem, issue_image_path)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
            `;

            db.query(
                jobCardSql,
                [
                    jobCardNo,
                    bookingId,
                    fullName,
                    phoneNumber,
                    pickupLocation,
                    bikeModel,
                    preferredService,
                    serviceDetails,
                    issueImagePath
                ],
                (jobErr) => {
                    if (jobErr) {
                        console.error("Job card save error:", jobErr);
                        return res.status(500).json({
                            success: false,
                            message: jobErr.message
                        });
                    }

                    console.log("Booking saved:", bookingId, "row id:", result.insertId);
                    console.log("Job card created:", jobCardNo);

                    res.json({
                        success: true,
                        bookingId: bookingId,
                        jobCardNo: jobCardNo
                    });
                }
            );
        }
    );
});

// Contact enquiry API
app.post("/api/enquiries", (req, res) => {
    const {
        fullName,
        phoneNumber,
        serviceType,
        serviceDetails
    } = req.body;

    if (!fullName || !phoneNumber || !serviceType || !serviceDetails) {
        return res.status(400).json({
            success: false,
            message: "All enquiry fields are required"
        });
    }

    const sql = `
        INSERT INTO enquiries
        (customer_name, phone, service_type, details)
        VALUES (?, ?, ?, ?)
    `;

    db.query(
        sql,
        [
            fullName,
            phoneNumber,
            serviceType,
            serviceDetails
        ],
        (err, result) => {
            if (err) {
                console.error("Enquiry save error:", err);
                return res.status(500).json({
                    success: false,
                    message: err.message
                });
            }

            console.log("Enquiry saved row id:", result.insertId);

            res.json({
                success: true,
                enquiryId: result.insertId
            });
        }
    );
});

// ===============================
// START SERVER
// ===============================

app.listen(PORT, () => {

    console.log(
        `AYYA Backend running on http://localhost:${PORT}`
    );

});
