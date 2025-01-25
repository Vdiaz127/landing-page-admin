import mongoose from "mongoose";

declare const process: {
  env: {
    NEXT_PUBLIC_MONGO_URL: string;
  };
};

const MONGODB_URI = process.env.NEXT_PUBLIC_MONGO_URL;

if (!MONGODB_URI) {
  throw new Error("Por favor, define la variable MONGODB_URI en tu archivo .env.local");
}

export async function connectDB(): Promise<void> {
  try {
    await mongoose.connect(MONGODB_URI);
  } catch (error) {
    console.error("Error al conectar con MongoDB:", error);
    throw error;
  }
}

export default connectDB;

