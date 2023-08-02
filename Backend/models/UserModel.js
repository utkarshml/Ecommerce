import validator from "validator";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({

    name:{
        type:String,
        required:[true , "Please enter your name"],
        maxLength:[30 , "Your name cannot exceed 30 characters"],
        minLendth:[4 , "Your name must be at least 4 characters long"]
    },
    email:{
        type:String,
        required:[true , "Please enter your email"],
        unique:true,
        validate:[validator.isEmail , "Please enter valid email address"]  },
    password:{
        type:String,
        required:[true , "Please enter your password"],
        minLength:[6 , "Your password must be longer than 6 characters"],
        select:false
    },
    avatar:{
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }
    },
    role:{
        type:String,
        default:"user"
    },
    createdAt:{
        type:Date,

        default:Date.now
    },
    resetPasswordToken:String,
    resetPasswordExpire:Date
});

userSchema.pre("save" , async function(next){
    if(!this.isModified("password")){
       return next();
    }
    this.password = await bcrypt.hash(this.password , 10);
})
userSchema.methods.JWToken = function(){
    console.log(process.env.JWT_SECRET)
    console.log(process.env.JWT_EXPIRES_TIME)
 return jwt.sign({id:this._id} , process.env.JWT_SECRET , {
        expiresIn:process.env.JWT_EXPIRES_TIME
 })
};
userSchema.methods.matchPassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword , this.password);
}

const User = mongoose.model("User" , userSchema);
export default User;