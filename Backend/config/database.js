import mongoose  from "mongoose";

const database = () =>{
    mongoose.connect(process.env.MONGODB_URI , {
       dbName:"Ecommerce"
    }).then((data) => {
        console.log(`Connected to MongoDB on ${data.connection.host}`);
    })
}
export default database;