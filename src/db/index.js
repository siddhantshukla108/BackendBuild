import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () => {
    try {

        // const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

        const connectionInstance = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection FAILED ", error);
        process.exit(1)
    }
}

export default connectDB 



// import mongoose from "mongoose";

// const connectDB = async () => {
//     try {
//         console.log("🔄 Connecting to MongoDB...");

//         const connectionInstance = await mongoose.connect(process.env.MONGODB_URI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         });

//         console.log(`✅ MongoDB connected! DB Host: ${connectionInstance.connection.host}`);
//     } catch (error) {
//         console.error("❌ MongoDB connection FAILED:", error.message);
//         process.exit(1); // Stop the server if DB fails
//     }
// };

// export default connectDB;
