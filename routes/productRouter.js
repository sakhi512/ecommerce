const {create}=require("../controllers/productController");
const routes=require("express").Router();

routes.post("/create",create);


module.exports=routes;