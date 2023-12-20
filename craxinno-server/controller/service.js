import UserModel from "./../model/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const RegisterAPI = async (req, res) => {
    try {
        const {
            email,
            password,
            phone,
            name,
            dob,
            address,
            livedAtAddress,
            gender,
            employmentStatus,
            savingOrInvestment,
            hobbies,
        } = req.body;
        let emailSearch = await UserModel.findOne({ email: email });
        if (emailSearch) return res.status(200).json({ status: false, msg: "user email already exist" });
        let phoneSearch = await UserModel.findOne({ phone: phone });
        if (phoneSearch) return res.status(200).json({ status: false, msg: "phone number already exist" });

        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        try {
            const userDoc = await UserModel.create({
                email: email,
                password: hashedPassword,
                phone: phone,
                name,
                dob,
                address,
                livedAtAddress,
                gender,
                employmentStatus,
                savingOrInvestment,
                hobbies,
            });

            const token = await jwt.sign({ userDoc }, process.env.JWT_SECRET, {
                expiresIn: 3000000,
            });

            res.status(201).json({
                status: true,
                msg: "user created",
                token: token,
                user: userDoc,
            });
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
