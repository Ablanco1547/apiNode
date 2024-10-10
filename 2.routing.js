const http = require("node:http");

const processRequest = (req, res) => {
	const { method, url } = req;

	switch (method) {
		case "GET":
			switch (url) {
				case "/pokemon/ditto":
					res.setHeader("Content-Type", "application/json");
					return res.end(JSON.stringify({ name: "ditto", type: "normal" }));

				case "/pokemon/pikachu":
					res.setHeader("Content-Type", "application/json");
					return res.end(JSON.stringify({ name: "pikachu", type: "electric" }));
				default:
					res.statusCode = 404;
					res.setHeader("Content-Type", "text/html; chartset=utf-8");
					return res.end("<h1>404 Not Found</h1>");
			}
		case "POST":
			switch (url) {
				case "/pokemon":
					let body = "";
			}
	}
};

const server = http.createServer(processRequest);

server.listen(1234, () => {
	console.log(`Server is running on port http://localhost:1234`);
});
