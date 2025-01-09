import http from "http";

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  // CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  // Make sure to allow PUT (and any other methods you need)
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  // Allow any headers that may be sent from the client
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle preflight OPTIONS request
  if (req.method === "OPTIONS") {
    // The browser sends OPTIONS to check allowed methods/headers
    res.writeHead(204); // 204 = No Content
    return res.end();
  }

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
        res.end("Hello, world!");
        break;
    }

    // Handle POST requests
  } else if (req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
      console.log("Chunk received:", chunk.toString());
    });
    req.on("end", () => {
      const data = JSON.parse(body);
      data.test = "from backend";
      console.log("Parsed data:", data);

      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(data));
    });

    // Handle PUT requests
  } else if (req.method === "PUT") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      // parse if JSON
      let data;
      try {
        data = JSON.parse(body);
      } catch (error) {
        data = { raw: body };
      }
      console.log("Received PUT data:", data);
      data.updated = "PUT success!";

      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(data));
    });

    // Fallback for other methods
  } else {
    res.end("Something went horribly wrong");
  }
});

server.listen(port, () => {
  console.log("Server has started on port:", port);
});
