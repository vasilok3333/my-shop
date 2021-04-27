const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const shortid = require("shortid");

const app = express();

app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/my-online-shop-db", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

const Product = mongoose.model("products", new mongoose.Schema({
    _id: { type: String, default: shortid.generate },
    title: String,
    img: String,
    price: Number,
    company: String,
    /* color: [String], */
    info: String,
}));

app.get("/api/products", async (req, res) => {
    const products = await Product.find({});
    res.send(products);
});

app.post("/api/products", async (req, res) => {
    const newProduct = new Product(req.body);
    const saveProduct = await newProduct.save();
    res.send(saveProduct);
});

app.delete("/api/products/:id", async (req, res) => {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    res.send(deletedProduct);
})

const port = process.env.PORT || 5000;
console.log(process.env.PORT);

app.listen(port, () => console.log('serve at local host 3000 '));





