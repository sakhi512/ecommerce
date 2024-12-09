const {create,get,update,deleteUser, getusers}=require("../controllers/userControllers");
const routes=require("express").Router();
const { Create,Update,getDelete }=require("../validations/userValidator")

routes.post("/create",Create, create);
routes.patch("/update",Update, update);
routes.get("/get-user",getDelete, getusers);
routes.get("/get",getDelete,get),
routes.delete("/delete",getDelete, deleteUser);


module.exports=routes;