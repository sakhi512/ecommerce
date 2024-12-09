
const { response } = require("express");
const errorHandler = require("../errorHandler");
const { createuser,getALlUsers,updateUser,deleteUser,getUsers } = require("../models/userModel");
const responceHandler=require("../responcehandler");

module.exports = {

    create: async (req, res) => {
        try {
     
             const response=await createuser(req.body);
             
            // return res.send({
               
            //     code:"200",
            //     message:"user created successfully",
            //     data:req.body

            // });
            return responceHandler(res,response);
        } catch (error) {
            return responceHandler(res,{error:error});
            // return res.send({
            //     error: error.message,
            //     code:"400",
            //     data:{}
            // });

        }


    },
   
    get: async (req, res) => {
        try {
            const response=await getALlUsers();
           
            // return res.send({
               
            //     code:"200",
            //     message:"user retrieved successfully",
            //     data:req.query

            // });
            return responceHandler(res,response);
        } catch (error) {
            return responceHandler(res,{error:error});
            // return res.send({
            //     error: error.message,
            //     code:"400",
            //     data:{}
            // });

        }


    },
    getusers: async (req, res) => {
        try {
            const response=await getUsers(req.query);
           
            // return res.send({
               
            //     code:"200",
            //     message:"user retrieved successfully",
            //     data:req.query

            // });
            return responceHandler(res,response);
        } catch (error) {
            return responceHandler(res,{error:error.message});
            // return res.send({
            //     error: error.message,
            //     code:"400",
            //     data:{}
            // });

        }


    },
    update: async (req, res) => {
        try {
            const response=await updateUser(req.body);
            
            // return res.send({
               
            //     code:"200",
            //     message:"user updated successfully",
            //     data:req.body

            // });
            return responceHandler(res,response);
        } catch (error) {
            return responceHandler(res,{error:error});
            // return res.send({
            //     error: error.message,
            //     code:"400",
            //     data:{}
            // });

        }


    },
    deleteUser: async (req, res) => {
        try {
            const response=await deleteUser(req.query);
           
            // return res.send({
            //     code:"200",
            //     message:"user deleted successfully",
            //     data:req.query
            // });
            return responceHandler(res,response);
        } catch (error) {
            return responceHandler(res,{error:error});
            // return res.send({
            //     error: error.message,
            //     code:"400",
            //     data:{}
            // });

        }


    },

}
