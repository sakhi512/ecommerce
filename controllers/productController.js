
// const { response } = require("express");
const responceHandler=require("../responcehandler");
const { createProduct } = require("../models/productModel");

module.exports = {

    create: async (req, res) => {
        try {
     
            //req.body.vendorId=rq.vendor.vendorId;
             const response=await createProduct(req.body);
             
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
   
    

}
