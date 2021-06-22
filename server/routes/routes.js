import express from "express";
import {
  getRoute,
  getAboutRoute,
  getHomeRoute,
} from "../Controller/controllers.js";
const router = express.Router();

router.get("/", getRoute);
router.get("/about", getAboutRoute);
router.get("/home", getHomeRoute);
router.use((req, res) => {
  res.sendFile("C:/Users/hp/Desktop/node-imp/Client/views/error.html");
});
export default router;
