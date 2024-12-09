
// const { response } = require("express");
const responceHandler=require("../responcehandler");
const { createVendor,getVendor,updateVendor,deleteVendor } = require("../models/vendorModel");
const { response } = require("express");

module.exports = {

    create: async (req, res) => {
        try {
  
             const response=await createVendor(req.body);
            // return res.send({
               
            //     code:"200",
            //     message:"user created successfully",
            //     data:req.body

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
   
    get: async (req, res) => {
        try {
     
             const response=await getVendor();
             
            // return res.send({
               
            //     code:"200",
            //     message:"user created successfully",
            //     data:req.body

            // });
            return responceHandler(res,response);
        } catch (error) {
            return responceHandler(res,error.message);
            // return res.send({
            //     error: error.message,
            //     code:"400",
            //     data:{}
            // });

        }


    },
    update: async (req, res) => {
        try {
            const response=await updateVendor(req.body);
            
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
    deleteV: async (req, res) => {
        try {
            const response=await deleteVendor(req.query);
       
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
