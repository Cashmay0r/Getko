import mongoose from 'mongoose';


export async function connect() {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log('Connected to Database')
  } catch {
    console.log('Not Connected to Database')
  }


}
