import express from 'express';

const app = express();
const PORT = 3000;

app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello, world!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
