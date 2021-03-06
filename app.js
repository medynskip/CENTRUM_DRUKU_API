require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT || 5001;
const mongoose = require("mongoose");
var path = require("path");
const cors = require("cors");

//routes import
const productRouter = require("./routers/products");
const postsRouter = require("./routers/posts");
const ordersRouter = require("./routers/orders");
const usersRouter = require("./routers/users");
const filesRouter = require("./routers/files");
const pagesRouter = require("./routers/pages");
const paymentRouter = require("./routers/payments");
const configurationRouter = require("./routers/configuration");

app.use("/public", express.static(path.join(__dirname + "/public")));

app.use(express.json());

app.use(cors());

//routes assign
app.use("/product", productRouter);
app.use("/blog", postsRouter);
app.use("/order", ordersRouter);
app.use("/user", usersRouter);
app.use("/file", filesRouter);
app.use("/page", pagesRouter);
app.use("/payment", paymentRouter);
app.use("/configuration", configurationRouter);

//connect to db
mongoose.connect(
  process.env.DB_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  () => {
    console.log("connected to CENTRUM_DRUKU db");
  }
);

app.listen(port, () =>
  console.log(`Centrum Druku server started on port ${port}`)
);
