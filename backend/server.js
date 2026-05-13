const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// ROUTES
const bookingRoutes = require("./routes/booking");
const vipRoutes = require("./routes/vip");
const adminRoutes = require("./routes/admin");

app.use("/", bookingRoutes);
app.use("/", vipRoutes);
app.use("/", adminRoutes);

app.listen(3000, () => {
console.log("SERVER RUNNING ON PORT 3000");
});