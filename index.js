import http from "http";

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  // Allow cross-origin (if needed)
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Handle GET requests
  if (req.method === "GET") {
    switch (req.url) {
      case "/test":
        res.end("This is the test path");
        break;
      case "/hei":
      case "/hola":
      case "/hello":
        res.end("Hello path");
        break;
      case "/about":
        res.end("About path");
        break;
      case "/json":
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ first: "object" }));
        break;
      default:
        // If none match, return a default response
        res.end("Hello, world!");
        break;
    }

    // Handle POST requests
  } else if (req.method === "POST") {
    res.end("From post request");

    // Handle PUT requests
  } else if (req.method === "PUT") {
    // There's no 'appendHeader' in Node. Use 'setHeader' instead:
    res.setHeader("Access-Control-Allow-Methods", "PUT");
    res.end("Put request");

    // Handle all other request methods
  } else {
    res.end("Something went horribly wrong");
  }
});

// Start the server
server.listen(port, () => {
  console.log("Server has started on port:", port);
});
