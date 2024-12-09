const {DataTypes,Model}=require("sequelize");
const connection=require("../../dbConnection");

class customers extends Model{}

customers.init(
    {
        customerId: {
          primaryKey: true,
          type: DataTypes.STRING(60),
       },
       
    },
    {
       name: "customers",
       timestamps: true, // Moved timestamps here
       paranoid: true,
       sequelize: connection,
    }
 );
 
 customers.beforeCreate(async (customer)=>{
   customer.customerId=uuid();
 });

module.exports=customers; 