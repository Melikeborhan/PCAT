const express = require('express');
const path = require('path');
const fs = require('fs').promises;

const app = express();

// Statik dosyaları "public" dizininden sunun
app.use(express.static('temp'));

// Ana rota için "temp/index.html" dosyasını gönderin
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'temp/index.html'));
});

const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} numaralı portta çalışıyor.`);
});
