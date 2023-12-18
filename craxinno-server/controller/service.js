import UserModel from "./../model/userModel.js";
import bcrypt from "bcrypt";

export const RegisterAPI = async (req, res) => {
    try {
        const { email, password, phone } = req.body;
        let emailSearch = await UserModel.findOne({ email: email });
        if (emailSearch) return res.status(400).json({ response: "email id already exist" });
        let phoneSearch = await UserModel.findOne({ phone: phone });
        if (phoneSearch) return res.status(400).json({ response: "phone number already exist" });

        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        try {
            const userDoc = await UserModel.create({
                email: email,
                password: hashedPassword,
                phone: phone,
            });
            res.status(201).json({ response: "user created", user: userDoc });
        } catch (error) {
            console.log(error.message);
        }
    } catch (error) {
        res.status(500).json({ response: error.message });
    }
};

export const PersonalInfoAPI = async (req, res) => {
    try {
        console.log(req.body);
    } catch (error) {
        res.status(500).json({ response: error.message });
    }
};
