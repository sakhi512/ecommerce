// const express=require("express");
// const port=3000;

// const app=express();

// app.get("/user",(req,res)=>{
// return res.send("sakhi abbas");
// });
// app.listen(port,()=>{
//     console.log('you are using  port ${port}');
// });

// const adminRouter=require("./routes/adminRouter");
// const authRouter=require("./routes/authRouter");

const express = require("express");
const  bodyParser = require("body-parser");
const morgan = require("morgan")
const {db} = require("./models/index"); // Fixed import


const userRouter = require("./routes/userRouter");
const vendorRouter=require("./routes/vendorRouter");
const productRouter=require("./routes/productRouter");
const port = 3000;

const app = express();

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Parse application/json
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use("/users", userRouter);
app.use("/vendor",vendorRouter);
app.use("/product",productRouter);

db.connection.sync({ alter: true, }) 
   .then(() => {
      app.listen(port, () => {
         console.log(`Server is running on port ${port}`);
      });
   })
   .catch((error) => {
      console.log(error);
      console.log("Unable to connect to database");
   });


// app.use("/admin",adminRouter);
// app.use("/auth",authRouter);

// app.listen(port1,()=>{
//     console.log('you are using  port ${port}');
// });