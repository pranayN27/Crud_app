const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const path = require("path");
const app = express();
const user = require("./server/Routes/user");
const services = require("./server/services/render");
const connectDB = require("./server/database/connection");

dotenv.config({ path: ".env" });
const PORT = process.env.PORT || 8080;

// log requests
app.use(morgan("tiny"));

//mongoDb connection
connectDB();

// parse request to body-parser
app.use(bodyparser.urlencoded({ extended: true }));

// set view engine
app.set("view engine", "ejs");
//app.set("views", path.resolve(__dirname, "views/ejs"))

// load assets
app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
app.use("/img", express.static(path.resolve(__dirname, "assets/img")));
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));

// load routers
// app.use("/", require("./server/Routes/router"));

app.use("/api/users", user);

/**
 *@description root route
 *@method GET/add_user
 */
app.get("/add_user", services.add_user);

/**
 *@description root route
 *@method GET/update_user
 */
app.get("/update_user", services.update_user);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
