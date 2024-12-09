const connection = require("../dbConnection");
const users = require("./definations/users");
const admin=require("./definations/admin");
const vendors = require("./definations/vendors");
const products = require("./definations/product");
const productVariation=require("../models/definations/productVariation");
const attribute=require("./definations/attributes");
const variationHasattribute=require("./definations/variationHasAttribute");
const models={ users,admin,vendors,products,productVariation,variationHasattribute };
//relation

//vendor product 1:M
vendors.hasMany(products,{foreignKey:"vendorId", as:"vendors"})
products.belongsTo(vendors,{foreignKey:"vendorId", as:"products"})

//product productVariation 1:M
products.hasMany(productVariation,{foreignKey:"productId",as :"productVariation"});
productVariation.belongsTo(products,{foreignKey:"productId",as:"products"});


//variation attribute M:M through variationhasattibute

productVariation.hasMany(variationHasattribute,{foreignKey:"productVariationId"});
variationHasattribute.belongsTo(productVariation,{foreignKey:"productVariationId"});

attribute.hasMany(variationHasattribute,{foreignKey:"attributeId",as:"attribute"});
variationHasattribute.belongsTo(attribute,{foreignKey:"attributeId",as:"variationHasattribute"});

const db = {};
db.connection = connection;
connection.models = models;

module.exports = { db, models };
 