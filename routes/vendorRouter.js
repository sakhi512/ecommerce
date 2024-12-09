const {create,get,update,deleteV}=require("../controllers/vendorController");
const { getVendor, createVendor } = require("../models/vendorModel");
const { Create,Update,getDelete }=require("../validations/userValidator")
const routes=require("express").Router();

routes.post("/create",Create,create);
routes.get("/getVendor",get);
routes.patch("/updateVendor",update);
routes.delete("/delete",getDelete, deleteV);


module.exports=routes;