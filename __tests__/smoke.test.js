const fetch = require('node-fetch'); 

describe('Smoke Tests', () => {
    const baseUrl = 'http://localhost:3000';

    test('Server is running', async () => {
        const response = await fetch(baseUrl);
        expect(response.status).toBe(200); 
    });

    test('API endpoint /api/data responds', async () => {
        const response = await fetch(`${baseUrl}/api/data`);
        expect(response.status).toBe(200);
        const data = await response.json();
        expect(data).toBeDefined(); 
    });
});
