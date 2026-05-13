const express = require("express");
const router = express.Router();
const db = require("../db");

/* =========================
   REGISTER VIP MEMBER
========================= */
router.post("/vip", (req, res) => {
const { name, phone } = req.body;

if (!name || !phone) {
return res.status(400).json({ msg: "Data tidak lengkap" });
}

db.query(
"INSERT INTO vip (name, phone) VALUES (?, ?)",
[name, phone],
(err, result) => {
if (err) {
return res.status(500).json({ error: err });
}

res.json({
msg: "VIP registered successfully",
id: result.insertId
});
}
);
});

/* =========================
   GET ALL VIP (ADMIN)
========================= */
router.get("/vip", (req, res) => {
db.query("SELECT * FROM vip ORDER BY id DESC", (err, data) => {
if (err) return res.status(500).json(err);
res.json(data);
});
});

module.exports = router;