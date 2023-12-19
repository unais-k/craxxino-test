"use client";

import Input from "@/components/ui/input";
import { handleSignUP } from "@/services/service";
import { ErrorMessage, FormData } from "@/types/user";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import validator from "validator";

const initialFormData: FormData = {
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
};

const initialErrorMessages: ErrorMessage = {
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
};

const HOME = () => {
    const [formData, setFormData] = useState(initialFormData);
    const [errorMessages, setErrorMessages] = useState(initialErrorMessages);

    const router = useRouter();

    const validate = (): ErrorMessage => {
        const newErrorMessages: ErrorMessage = {
            email: "",
            phone: "",
            password: "",
            confirmPassword: "",
        };

        // Validate Email
        if (!validator.isEmail(formData.email)) {
            newErrorMessages.email = "Invalid email address";
        }

        // Validate Phone
        if (!validator.isMobilePhone(formData.phone, "any", { strictMode: false })) {
            newErrorMessages.phone = "Invalid phone number";
        }

        // Validate Password
        if (!validator.isLength(formData.password, { min: 6 })) {
            newErrorMessages.password = "Password must be at least 6 characters";
        } else if (!/(?=.*[A-Z])(?=.*\d)(?=.*[a-z])/.test(formData.password)) {
            newErrorMessages.password = "Password must be alphanumeric with at least one uppercase letter and one number";
        }

        // Validate Confirm Password
        if (formData.password !== formData.confirmPassword) {
            newErrorMessages.confirmPassword = "Passwords do not match";
        }

        return newErrorMessages;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        setErrorMessages(validate());
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrorMessages(validate());
        // const response = await handleSignUP(formData);

        router.push("/confirmation-tabs");

        // Additional logic for form submission goes here
    };

    return (
        <section className="flex h-full w-full justify-center flex-col items-center py-10">
            <div className="text-center">
                <h2 className="font-urbanist leading-7 text-[#000000] font-[700] text-[24px] py-3">Create your account</h2>
                <p className="font-[500] font-urbanist text-[14px] leading-4 text-[#666666]">
                    Set-up your RentlyPass in as little as 2 minutes.
                </p>
            </div>
            <form onSubmit={handleSubmit} className="w-full flex justify-center items-center flex-col">
                <div className="mt-10 w-[30%]">
                    <h2 className="font-[700] font-urbanist text-[16px] leading-5 text-[#666666] pt-3">Contact details</h2>
                    <div className="relative w-full min-w-[200px] h-10 my-4">
                        <Input
                            name="email"
                            type="text"
                            value={formData.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            errorMessage={errorMessages.email}
                        />
                    </div>
                    <div className="relative w-full min-w-[200px] h-10">
                        <Input
                            name="phone"
                            type="text"
                            value={formData.phone}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            errorMessage={errorMessages.phone}
                        />
                    </div>
                </div>
                <div className="mt-5 w-[30%]">
                    <h2 className="font-[700] font-urbanist text-[16px] leading-5 text-[#666666] pt-3">Set a password</h2>
                    <div className="relative w-full min-w-[200px] h-10 my-4">
                        <Input
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            errorMessage={errorMessages.password}
                        />
                    </div>
                    {/* <div className="relative bg-inherit my-5">
                        <input
                            type="text"
                            id="username"
                            name="username"
                            className="peer bg-transparent h-10 w-72 text-black rounded-lg placeholder-transparent border border-solid px-2 ring-gray-500 focus:ring-[#0075FF] focus:outline-none focus:border-[#0075FF]"
                            placeholder="Type inside me"
                        />
                        <label className="absolute cursor-text left-0 -top-3 text-sm text-black bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-[#0075FF] peer-focus:bg-white peer-focus:text-sm transition-all">
                            email
                        </label>
                    </div> */}
                    <div className="relative w-full min-w-[200px] h-10">
                        <Input
                            name="confirmPassword"
                            type="password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            errorMessage={errorMessages.confirmPassword}
                        />
                    </div>
                </div>
                <div className="mt-5 w-[30%] flex flex-row gap-3">
                    <Image alt="info" className="pb-2" src="/image/info.svg" width={20} height={20} />
                    <p className="text-[14px] leading-[16px] font-[500] text-gray-500">
                        We need a password to keep your information safe. But don’t worry, we’ll also send your custom
                        RentlyPass URL via email.
                    </p>
                </div>
                <button
                    type="submit"
                    className="mt-5 w-[30%] py-5 rounded-md bg-[#0075FF] text-white font-[700] text-[14px]"
                >
                    Create your account
                </button>
                <p className="mt-5 w-[30%] text-[14px] leading-[16px] font-[500] text-gray-500">
                    By clicking ‘Create your account’, you are agreeing to our{" "}
                    <span className="underline">Terms & Conditions</span> and{" "}
                    <span className="underline">Privacy Policy.</span>
                </p>
            </form>
        </section>
    );
};

export default HOME;
