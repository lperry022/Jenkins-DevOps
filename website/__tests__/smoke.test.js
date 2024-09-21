import fetch from 'node-fetch'; 

describe('Smoke Tests', () => {
    it('Server is running', async () => {
        const response = await fetch('http://localhost:3000/');
        expect(response.ok).toBe(true);
    });

    it('API endpoint /api/data responds', async () => {
        const response = await fetch('http://localhost:3000/api/data');
        const data = await response.json();
        expect(data).toEqual({ message: 'Hello, world!' });
    });
});
