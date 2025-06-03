import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    profilePic: {
        type: String,
    },

    token: {
        type: String,
    },
});

userSchema.pre("save", async (next) => {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

userSchema.method.isPasswordCorrect = async (password) => {
    return await bcrypt.compare(password, this.password);
};

export const User = mongoose.model("user", userSchema);
