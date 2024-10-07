const http = require("node:http");

const desiredPort = process.env.PORT ?? 1234;

const server = http.createServer((req, res) => {
	console.log("Request received: ", req.url);
	res.end("Hello World");
});

server.listen(desiredPort, () => {
	console.log(`Server is running on port http://localhost:${desiredPort}`);
});
