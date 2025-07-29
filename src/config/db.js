import mongoose from "mongoose";

const {URI_DB, DB_NAME} = process.env;

const connectDB = async () => {
  try {
    await mongoose.connect(URI_DB, {dbName: DB_NAME});
    console.log("✅ Conectado a MongoDB", mongoose.connection.name);
  } catch (error) {
    console.error("❌ Error al conectar a MongoDB:", error.message);
    process.exit(1);
  }
};

export default connectDB;