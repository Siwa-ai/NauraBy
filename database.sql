-- =========================
-- CREATE DATABASE
-- =========================
CREATE DATABASE IF NOT EXISTS sevenspa;
USE sevenspa;

-- =========================
-- TABLE BOOKINGS
-- =========================
CREATE TABLE bookings (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(100) NOT NULL,
phone VARCHAR(20) NOT NULL,
service VARCHAR(100) NOT NULL,
date DATE NOT NULL,
time VARCHAR(20) NOT NULL,
status ENUM('pending','confirmed','done') DEFAULT 'pending',
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =========================
-- TABLE VIP MEMBERS
-- =========================
CREATE TABLE vip (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(100) NOT NULL,
phone VARCHAR(20) NOT NULL,
level ENUM('Gold','Platinum','Diamond') DEFAULT 'Gold',
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =========================
-- (OPTIONAL) TABLE SERVICES
-- kalau nanti mau admin tambah layanan
-- =========================
CREATE TABLE services (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(100) NOT NULL,
description TEXT,
price INT NOT NULL,
duration VARCHAR(50),
image TEXT,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =========================
-- SAMPLE DATA SERVICES
-- =========================
INSERT INTO services (name, description, price, duration, image)
VALUES
('Traditional Massage','Relaksasi tubuh dan melancarkan peredaran darah',75000,'60 Minutes','service1.jpg'),
('Aromatherapy','Terapi minyak esensial premium',120000,'90 Minutes','service2.jpg'),
('Hot Stone Massage','Mengurangi stres dan ketegangan otot',150000,'75 Minutes','service3.jpg'),
('VIP Royal Spa','Layanan spa kelas hotel bintang 5',350000,'180 Minutes','service4.jpg');