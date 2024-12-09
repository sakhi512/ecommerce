const {DataTypes,Model}=require("sequelize");
const connection=require("../../dbConnection");
const {hash}=require("bcryptjs");
const {v4:uuid}=require("uuid");

class users extends Model{}

users.init(
    {
       userId: {
          primaryKey: true,
          type: DataTypes.STRING(60),
       },
       name: {
          type: DataTypes.STRING(60),
          allowNull: true,
       },
       username: {
          type: DataTypes.STRING(34),
          unique: true,
          allowNull: false,
       },
       password: {
          type: DataTypes.STRING(1000),
          unique: true,
       },
    },
    {
       name: "user",
       timestamps: true, // Moved timestamps here
       paranoid: true,
       sequelize: connection,
    }
 );

 users.beforeCreate(async (user)=>{
   user.userId=uuid();
   user.password=await hash(user.password,10);
 });

 users.afterCreate((user)=>{
   delete user.dataValues.password;
 });
 
module.exports=users; 