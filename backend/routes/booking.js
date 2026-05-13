const express = require("express");
const router = express.Router();
const db = require("../db");

/* =========================
   CREATE BOOKING
========================= */
router.post("/booking", (req, res) => {
const { name, phone, service, date, time } = req.body;

if (!name || !phone || !service || !date || !time) {
return res.status(400).json({ msg: "Data tidak lengkap" });
}

db.query(
"INSERT INTO bookings (name, phone, service, date, time, status) VALUES (?,?,?,?,?,?)",
[name, phone, service, date, time, "pending"],
(err, result) => {
if (err) {
console.log(err);
return res.status(500).json({ msg: "Server error" });
}

res.json({
msg: "Booking berhasil disimpan",
id: result.insertId
});
}
);
});

/* =========================
   GET ALL BOOKING
========================= */
router.get("/booking", (req, res) => {
db.query("SELECT * FROM bookings ORDER BY id DESC", (err, data) => {
if (err) {
console.log(err);
return res.status(500).json({ msg: "Server error" });
}

res.json(data);
});
});

module.exports = router;