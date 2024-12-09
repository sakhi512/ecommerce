const joi=require("joi");
const responceHandler=require("../responcehandler");

const create=joi.object({
    name:joi.string().required(),
    username:joi.string().required(),
    password:joi.string().required(),

});
const update=joi.object({
    name:joi.string(),
    username:joi.string().required(),

});

const getdelete=joi.object({
    username:joi.string(),

});


module.exports={
     Create:async (req,res,next)=>{
        try{
        await create.validateAsync(req.body);
        next();
        }
        catch(error){
            return responceHandler(res,{error:error.message});
        }
        },
        Update:async (req,res,next)=>{
            try{
            await update.validateAsync(req.body);
            next();
            }
            catch(error){
                return responceHandler(res,{error:error.message});
            }
            },
            getDelete:async (req,res,next)=>{
                try{
                await getdelete.validateAsync(req.body);
                next();
                }
                catch(error){
                    return responceHandler(res,{error:error.message});
                }
                },

}
