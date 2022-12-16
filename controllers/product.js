const Product = require("../models/Product");
exports.getProducts = (req, res, next) => {
  Product.find()
    .then((products) => {
      res.status(200).json(products);
    })
    .catch((err) => console.log(err));
};
exports.getSingleProduct = (req, res, next) => {
  console.log("this is a function to fetch a single product");
  console.log(req.body.pId);
  Product.findById(req.body.pId)
    .then((item) => {
      res.status(200).json(item);
    })
    .catch((err) => console.log(err));
};
const productArray = [
  "Bag",
  "Handbag",
  "Travel bag",
  "Schoolbag",
  "Tourist bag",
  "American tourist",
];
exports.addProducts = (req, res, next) => {
  for (let i = 0; i <= 10; i++) {
    const newProduct = new Product({
      title: productArray[Math.floor(Math.random() * 6)],
      description: "This is a description for the product",
      price: Math.floor(Math.random() * 1000),
    });
    newProduct.save();
  }
  res.status(201).send({ message: "Products added successfully" });
};
