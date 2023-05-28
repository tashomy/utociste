import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    name: String,
    age: Number, 
    city: String,
    type: String,
    contact: String,
    animal: String,
    imageUrl: String,
    created: Date
})


const PostMessage = mongoose.model('PostMessage', postSchema);

export default  PostMessage;