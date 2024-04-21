import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    fName: {
        type: String,
        required: true,
    },
        
    Mail: {
    type: String,
    required: true,
    },

    pNumber: {
    type: String,
    required: true,
    },

    pWord: {
    type: String,
    required: true,
    }
})

const User = mongoose.model('User', userSchema);

export default User;