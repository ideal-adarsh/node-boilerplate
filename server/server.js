const fs = require("fs");
const http = require("http");
const server = http.createServer((req, res) => {
  console.log(req.method, req.url);
  let path = ".Client/views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
    case "/about-me":
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      res.end();
    default:
      path += "error.html";
      res.statusCode = 404;
      break;
  }
  console.log(path);
  fs.readFile(path, (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.write("Server error");
      res.end();
    } else {
      res.end(data);
    }
  });
});
server.listen(3000, () => {
  console.log("server started");
});
