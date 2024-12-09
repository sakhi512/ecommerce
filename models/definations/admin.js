const {DataTypes,Model}=require("sequelize");
const connection=require("../../dbConnection");

class admins extends Model{}

admins.init(
    {
        adminId: {
          primaryKey: true,
          type: DataTypes.STRING(60),
       },
       
    }, 
    {
       name: "admin",
       timestamps: true, // Moved timestamps here
       paranoid: true,
       sequelize: connection,
    }
 );
 
 admins.beforeCreate(async (admin)=>{
   admin.adminId=uuid();
 });

module.exports=admins; 