const {DataTypes,Model}=require("sequelize");
const connection=require("../../dbConnection");
const {hash}=require("bcryptjs");
const {v4:uuid}=require("uuid");

class vendors extends Model{}

vendors.init(
    {
      vendorId: {
          primaryKey: true,
          type: DataTypes.STRING(60),
       },
       name: {
         type: DataTypes.STRING(34),
         allowNull: false,
      },
      username: {
         type: DataTypes.STRING(34),
         allowNull: false,
      },
      password:{
         type: DataTypes.STRING(1000),
      }
       
    },
    {
       name: "vendor",
       timestamps: true, // Moved timestamps here
       paranoid: true,
       sequelize: connection,
    }
 );
 
 vendors.beforeCreate(async (vendor)=>{
   vendor.vendorId=uuid();
   vendor.password=await hash(vendor.password,10);

 });

module.exports=vendors; 