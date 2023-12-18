import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        dob: { type: String },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        phone: {
            type: Number,
            unique: true,
            required: true,
        },
        address: { type: String },
        livedAtAddress: { type: String },
        genderLabel: { type: String },
        employmentStatus: { type: String },
        savingOrInvestment: { type: String },
        hobbies: { type: String },
        createProcessComplete: { type: Boolean },
        password: {
            type: String,
            min: 6,
            required: true,
        },
    },
    { timestamps: true }
);

const UserModel = mongoose.model("User", userSchema);
export default UserModel;
