const db = require("./db");

const bookingId = "AYYA-1789720123497";

db.query(
    "SELECT id, booking_id, customer_name, vehicle_brand, vehicle_model, booking_date, booking_time FROM bookings WHERE booking_id = ?",
    [bookingId],
    (selectErr, rows) => {
        if (selectErr) {
            console.error(selectErr.message);
            db.end();
            process.exitCode = 1;
            return;
        }

        console.table(rows);

        db.query("DELETE FROM job_cards WHERE booking_id = ?", [bookingId], (jobErr) => {
            if (jobErr) {
                console.error(jobErr.message);
                db.end();
                process.exitCode = 1;
                return;
            }

            db.query("DELETE FROM bookings WHERE booking_id = ?", [bookingId], (bookingErr) => {
                if (bookingErr) {
                    console.error(bookingErr.message);
                    process.exitCode = 1;
                } else {
                    console.log("Test booking removed.");
                }

                db.end();
            });
        });
    }
);
