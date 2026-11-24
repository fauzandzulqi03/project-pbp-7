const express = require('express');
const app = express();
const PORT = 3000;

const mahasiswaRoutes = require('./routes/mahasiswaRoutes');

// Middleware parsing JSON
app.use(express.json());

// Endpoint utama
app.get('/', (req, res) => {
    res.json({
        success: true,
        message: "REST API Sistem Informasi Data Mahasiswa berjalan dengan baik"
    });
});

// Routing API mahasiswa
app.use('/api/mahasiswa', mahasiswaRoutes);

// Menjalankan server
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});