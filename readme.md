# Webinar API Proxy Server

This project is a simple Express server that acts as a proxy to fetch webinar details from the WebinarJam API. It resolves CORS issues by allowing frontend applications to interact with the API through this server.

## Features
- Acts as a backend proxy for WebinarJam API.
- Fetches webinar data using a `POST` request.
- Simplifies frontend integration by resolving CORS restrictions.

---

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/dev-saiful/webjam.git
   cd webjam
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the server**:
   ```bash
   node index.js
   ```

---

## Usage

1. Start the server:
   ```bash
   node index.js
   ```
   The server will be running at `http://localhost:3000`.

2. Make a `POST` request to the following endpoint:
   ```
   POST http://localhost:3000/get-webinar
   ```

3. Example response:
   ```json
   {
       "webinar": {
           "schedules": [
               {
                   "date": "2024-12-20"
               }
           ]
       }
   }
   ```

---

## Dependencies

- **Express.js**: For building the server.
- **Axios**: For making HTTP requests to the WebinarJam API.

---

## Notes

- The `api_key` and `webinar_id` values are hardcoded. Modify them as needed in the `index.js` file.
- Ensure the API key has proper permissions to access the WebinarJam API.

---

## License

This project is open source. Modify and use it as needed for your projects.