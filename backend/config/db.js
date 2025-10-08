import mongoose from "mongoose"

export const connectdb = async()=>{
    try {
        await mongoose.connect('mongodb+srv://root:toor@cluster0.kkmew6g.mongodb.net/KitchenKart');
        console.log("DB Connected");
    } catch (error) {
        console.error("DB Connection Error:", error);
        process.exit(1); // Exit the process if DB connection fails
    }
}
