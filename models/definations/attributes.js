const {DataTypes,Model}=require("sequelize");
const connection=require("../../dbConnection");

class attributes extends Model{}

attributes.init(
    {
      attributeId: {
          primaryKey: true,
          type: DataTypes.STRING(60),
       },
       name: {
      
         type: DataTypes.STRING(),
      },
      value: {
      
         type: DataTypes.STRING(),
         },
           
            discription: {
      
                type: DataTypes.STRING(),
                },
       
    },
    {
       name: "attributes",
       timestamps: true, // Moved timestamps here
       paranoid: true,
       sequelize: connection,
    }
 );
 
 attributes.beforeCreate(async (attribute)=>{
    attribute.attributeId=uuid();
 });

module.exports=attributes; 