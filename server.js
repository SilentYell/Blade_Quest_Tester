// filepath: /home/nikh/Blade_Quest/playtest/server.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files from the playtest folder
app.use(express.static(path.join(__dirname)));

// Fallback to index.html for SPA routing
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});