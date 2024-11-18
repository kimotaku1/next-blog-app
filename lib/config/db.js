import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://narutobibek000:bibek123@cluster0.8w30m.mongodb.net/blog-app')
    console.log("DB Connected");
    
}