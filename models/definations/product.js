const {DataTypes,Model}=require("sequelize");
const connection=require("../../dbConnection");
const vendor=require("../definations/vendors");
class products extends Model{}

products.init(
    {
      productId: {
          primaryKey: true,
          type: DataTypes.STRING(60),
       },
       productName: {
      
         type: DataTypes.STRING(),
         allowNull:false,
      },
      discription: {
      
         type: DataTypes.STRING(),
         allowNull:false,
         },
         vendorId:{
            type:DataTypes.STRING(),
            allowNull:false,
            references:{
          model:vendor,
          key:"vendorId",

            }
         },
       
    },
    {
       name: "products",
       timestamps: true, // Moved timestamps here
       paranoid: true,
       sequelize: connection,
    }
 );
 
 products.beforeCreate(async (product)=>{
   product.productId=uuid();
 });

module.exports=products; 