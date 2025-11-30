// Simple API using Node.js (no framework)

const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });

    const response = {
        message: "Hello from simple API!",
        status: "success",
        timestamp: new Date()
    };

    res.end(JSON.stringify(response));
});

server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
