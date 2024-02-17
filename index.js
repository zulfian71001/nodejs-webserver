const http = require("http");
const { parse } = require("querystring");

let postData = "";

http.createServer((req, res) => {
  if (req.method === "POST" || req.method === "PUT") {

    req.on("data", (chunk) => {

      postData += chunk.toString();
    });

    req.on("end", () => {
     
      const parsedData = parse(postData);

      console.log(parsedData);

      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Data telah diterima dan diproses.");
    });
  } else {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World!");
  }
}).listen(3000, () => {
  console.log("Server berjalan di port 3000");
});
