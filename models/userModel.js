const { models } = require("./index")

module.exports = {
    createuser: async (body) => {
        try {
            const user = await models.users.create({ ...body });
            return {
                response: user,
            }
        } catch (error) {
            return {
                error: error.errors[0].message
            }
        }
    },
    getALlUsers: async (body) => {
        try {
            const user = await models.users.findAll(
                {
                    attributes:["name" ,"username"],

                }
            );
            return {
                response: user,
            }
        } catch (error) {
            return {
                error: error.errors[0].message
            }
        }
    },
    getUsers: async ({userId,username}) => {
        try {
            const user = await models.users.findone(
                {
                    attributes:["name" ,"username"],
                    where: {
                         ...(userId ? {userId:userId}:true),
                        ...(username ? {username:username}:true),

                    }  

                }
            );
            return {
                response: user,
            }
        } catch (error) {
            return {
                error: error.errors[0].message
            }
        }
    },
    updateUser: async ({username,...body}) => {
        try {
            const user = await models.users.update({
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
    deleteUser: async ({username}) => {
        try {
            const user = await models.users.destroy({
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
    }

}