import express from "express";
import cors from "cors";
import routes from "./routes/routes.js";
// import http from "http";
// import { Server } from "socket.io";

//initial setup
const app = express();
// const server = http.createServer(app);
// const io = new Server(server, {
//   cors: {
//     origin: "*",
//     methods: ["GET", "POST"],
//   },
// });
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
//
const PORT = process.env.PORT || 3000;
// routes
app.use("/", routes);
//

//listen to request
app.listen(PORT, () => {
  console.log("server started");
});
//
