const API = "http://localhost:3000";

/* =========================
   BOOKING SPA
========================= */
async function sendBooking() {
const name = document.getElementById("name").value;
const phone = document.getElementById("phone").value;
const service = document.getElementById("service").value;
const date = document.getElementById("date").value;
const time = document.getElementById("time").value;

if (!name || !phone || !service || !date || !time) {
alert("Lengkapi semua data!");
return;
}

try {
const res = await fetch(API + "/booking", {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({ name, phone, service, date, time })
});

const data = await res.json();

alert(data.msg || "Booking berhasil!");

} catch (err) {
console.log(err);
alert("Server error!");
}
}

/* =========================
   QUICK WHATSAPP BOOKING (OPTIONAL)
========================= */
function quickWA(service, price) {
const msg =
`Halo SevenSpa 👋

Saya ingin booking:
✨ ${service}
💰 Rp ${Number(price).toLocaleString()}

Apakah tersedia?`;

window.open(
`https://wa.me/6285212828441?text=${encodeURIComponent(msg)}`,
"_blank"
);
}

/* =========================
   VIP REGISTER (GLOBAL FUNCTION)
========================= */
async function registerVIP() {
const name = document.getElementById("name").value;
const phone = document.getElementById("phone").value;

if (!name || !phone) {
alert("Isi data VIP dulu!");
return;
}

try {
const res = await fetch(API + "/vip", {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({ name, phone })
});

const data = await res.json();

alert(data.msg || "VIP Registered!");
} catch (err) {
console.log(err);
alert("Server error!");
}
}

/* =========================
   LOADING EFFECT HELPER
========================= */
function setLoading(btn, text = "Loading...") {
if (!btn) return;
btn.dataset.original = btn.innerHTML;
btn.innerHTML = text;
btn.disabled = true;
}

function resetLoading(btn) {
if (!btn) return;
btn.innerHTML = btn.dataset.original;
btn.disabled = false;
  }
