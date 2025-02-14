import mongoose from "mongoose";

const connectToMongoDB = async () => {
	try {
		await mongoose.connect("mongodb+srv://arghyadey043:gvPrYyJB5588njve@arghyachatapp.4r3ux.mongodb.net/?retryWrites=true&w=majority&appName=Arghyachatapp");
		console.log("Connected to MongoDB");
	} catch (error) {
		console.log("Error connecting to MongoDB", error.message);
	}
};

export default connectToMongoDB;
