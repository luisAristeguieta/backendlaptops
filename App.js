const express = require("express");
const app = express();

app.use(express.json());

app.use("/contactos", (req,res,next)=>{
  console.log("The Header is:", req.headers);
  console.log("The Body is:", req.body);
  next();
});


const laptops = [
    { "id": 100, "marca": "Lenovo", "procesador": "Intel Core i5", "memoria": "16 GB", "disco": " 1 TB SSD" },
  { "id": 101, "marca": "Lenovo ThinkPad", "procesador": "Intel Core i5-1335U", "memoria": "16 GB", "disco": "512 GB SSD" },
  { "id": 102, "marca": "ASUS ROG Zephyrus", "procesador": "AMD Ryzen 7 7735HS", "memoria": "32 GB", "disco": "1 TB SSD" },
  { "id": 103, "marca": "Apple MacBook Air", "procesador": "Apple M2", "memoria": "8 GB", "disco": "256 GB SSD" },
  { "id": 104, "marca": "Dell Inspiron 15", "procesador": "Intel Core i3-1215U", "memoria": "8 GB", "disco": "512 GB SSD" },
  { "id": 105, "marca": "HP Pavilion", "procesador": "AMD Ryzen 5 5500U", "memoria": "12 GB", "disco": "1 TB SSD" }
];

app.post("/laptops", (req,res)=>{
  req.body.id = 106;
  res.send(req.body)
});








app.listen(3002, () => {
  console.log("Ready");
});