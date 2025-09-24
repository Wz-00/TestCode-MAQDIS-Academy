const express = require('express');
const app = express();

app.use(express.json()); 

// 1) GET /hello
app.get('/hello', (req, res) => {
  return res.json({
    status: "success",
    message: "welcome to Maqdis Academy"
  });
});

// 2) POST /post 
app.post('/post', (req, res) => {
  return res.json({
    data: 100,
    status: "berhasil"
  });
});

// 3) POST /hapus
app.post('/hapus', (req, res) => {
  return res.json({
    data: 0,
    status: "berhasil hapus"
  });
});

// 4) GET /setoran
app.get('/setoran', (req, res) => {
  return res.json({
    message: "berhasil",
    id_setoran: 58,
    id_user: 3441,
    id_juz: 30
  });
});

// server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
