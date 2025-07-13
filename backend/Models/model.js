import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    address: String,
    phone: String,
    age: Number
});

const user = mongoose.model('User', userSchema);
export default user;



