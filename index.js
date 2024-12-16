// server.js
const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/get-webinar', async (req, res) => {
    const apiKey = '900f217b-6445-4a72-b570-13d9305d1147';
    const webinarId = '180';

    const apiUrl = 'https://api.webinarjam.com/webinarjam/webinar';

    try {
        const response = await axios.post(apiUrl, null, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            params: {
                api_key: apiKey,
                webinar_id: webinarId
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching webinar data' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
