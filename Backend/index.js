const express = require("express");
const cors = require("cors");

require("./db/config");
const User = require("./db/users");
const Product = require("./db/products");
const products = require("./db/products");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/register", async (req, resp) => {
  let user = new User(req.body);
  let result = await user.save();
  result = result.toObject();
  delete result.password
  resp.send(result);
});

app.post("/login", async (req, resp) => {
  console.log(req.body);
  if (req.body.email && req.body.password) {
    let user = await User.findOne(req.body).select("-password");
    if (user) {
      resp.send(user);
    } else {
      resp.send({ result: "no user found " });
    }
  } else {
    resp.send({ result: "no user found " });
  }
});

app.post("/add-Products", async (req, resp) => {
  console.log(req.body)
  let product = new Product(req.body);
  let result = await product.save();
  resp.send(result); 
})

app.get("/products", async (req, resp) => {
  let products = await Product.find();
  if(products.length > 0){
    resp.send(products)
  }
  else{
    resp.send({result : "No data found"});
  }
})

app.delete("/product/:id", async (req,resp)=>{
    
  const result = await products.deleteOne({_id:req.params.id});
  resp.send(result);
})

app.listen(5000);
