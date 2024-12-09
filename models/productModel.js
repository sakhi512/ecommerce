const { models } = require("./index")

module.exports = {
    createProduct: async (body) => {
        try {
            const product = await models.products.create({ ...body });
            return {
                response: product,
            }
        } catch (error) {
            return {
                error: error.errors[0].message
            }
        }
    },
    

}