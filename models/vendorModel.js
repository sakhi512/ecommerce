const { models } = require("./index")

module.exports = {
    createVendor: async (body) => {
        try {
            console.log(body);
            const vendor = await models.vendors.create({...body});
            return {
                response: vendor,
            }
        } catch (error) {
            return {
                error: error.message
            }
        }
    },
    getVendor: async (body) => {
        try {
            const vendor = await models.vendors.findAll(
              {  attributes:["name" ,"username"],
              }
            );
            return {
                response: vendor,
            }
        } catch (error) {
            return {
                error: error.errors[0].message
            }
        }
    },
    updateVendor: async ({username,...body}) => {
        try {
            const user = await models.vendors.update({
                    ...body
                
            },{
                where:{
                    username:username,
                }
                
            });
            return {
                response: user,
            }
        } catch (error) {
            return {
                error: error.errors[0].message
            }
        }
    },
    deleteVendor: async ({username}) => {
        try {
            const delvendor = await models.vendors.destroy({
                where:{
                    username:username,
                }
                
            });
            return {
                response: delvendor,
            }
        } catch (error) {
            return {
                error: error.message
            }
        }
    }

}