const express = require("express");
const router = express.Router();
const db = require("../db");

/* =========================
   GET DASHBOARD SUMMARY
========================= */
router.get("/admin/dashboard", (req, res) => {
  const result = {};

  // Total bookings
  db.query("SELECT COUNT(*) AS totalBookings FROM bookings", (err, bookingData) => {
    if (err) return res.status(500).json({ msg: "Server error" });

    result.totalBookings = bookingData[0].totalBookings;

    // Total VIP members
    db.query("SELECT COUNT(*) AS totalVIP FROM vip", (err, vipData) => {
      if (err) return res.status(500).json({ msg: "Server error" });

      result.totalVIP = vipData[0].totalVIP;

      // Booking terbaru
      db.query(
        "SELECT * FROM bookings ORDER BY id DESC LIMIT 10",
        (err, latestBookings) => {
          if (err) return res.status(500).json({ msg: "Server error" });

          result.latestBookings = latestBookings;

          // VIP terbaru
          db.query(
            "SELECT * FROM vip ORDER BY id DESC LIMIT 10",
            (err, latestVIP) => {
              if (err) return res.status(500).json({ msg: "Server error" });

              result.latestVIP = latestVIP;

              // Kirim semua data sekaligus
              res.json(result);
            }
          );
        }
      );
    });
  });
});

/* =========================
   GET ALL BOOKINGS
========================= */
router.get("/admin/bookings", (req, res) => {
  db.query("SELECT * FROM bookings ORDER BY id DESC", (err, data) => {
    if (err) return res.status(500).json({ msg: "Server error" });
    res.json(data);
  });
});

/* =========================
   GET ALL VIP MEMBERS
========================= */
router.get("/admin/vip", (req, res) => {
  db.query("SELECT * FROM vip ORDER BY id DESC", (err, data) => {
    if (err) return res.status(500).json({ msg: "Server error" });
    res.json(data);
  });
});

module.exports = router;;
