const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public_html')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public_html', 'index.html'));
});

app.get('/api/data', (req, res) => {
    const sampleData = {
        id: 1,
        name: 'Sample Data',
        description: 'This is some sample data from the API.'
    };
    res.json(sampleData);
});

app.listen(port, () => {
    console.log(`Web server running at: http://localhost:${port}`);
});
