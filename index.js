const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const port = 3000;
const {
  getProducts,
  addProducts,
  getSingleProduct,
} = require("./controllers/product");
const cors = require("cors");
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
const conn_str =
  "mongodb+srv://tikam:asdf1234@cluster0.w6i7yuy.mongodb.net/products?retryWrites=true&w=majority";
mongoose.connect(
  conn_str,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
      console.log("error in connection");
    } else {
      console.log("mongodb is connected");
    }
  }
);

app.get("/", (req, res, next) => {
  res.send({ message: "normal route" });
});
app.get("/product", getSingleProduct);
app.get('/user/:userId', (req, res) => {
   // req.params; // { userId: '42' }
    res.json(req.params);
  });
app.post("/product", addProducts);
app.get("/products", getProducts);

app.listen(port, () => {
  console.log("starting the server");
});
