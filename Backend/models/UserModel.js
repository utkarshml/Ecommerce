import validator from "validator";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import crypto from "crypto";
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
     next();
    }
    this.password = await bcrypt.hash(this.password , 10);
})

// Password Compare
userSchema.methods.matchPassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword , this.password);
}

// Jwt Tokwn
userSchema.methods.getJWToken = function(){
 return jwt.sign({id:this._id} , process.env.JWT_SECRET , {
        expiresIn:process.env.JWT_EXPIRES_TIME
 })
};

/// Reset Password Token
userSchema.methods.getResetPasswordToken = function(){
    // Generate Token
  const resetToken = crypto.randomBytes(20).toString("hex");
    this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");
    this.resetPasswordExpire = Date.now() + 30 * 60 * 1000;
    return resetToken;
}
const User = mongoose.model("User" , userSchema);

export default User;