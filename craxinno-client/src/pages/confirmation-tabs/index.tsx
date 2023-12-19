import PersonalInfoOne from "@/components/modules/PersonalInfoOne";
import { handleSignUP } from "@/services/service";
import { PersonalData, PersonalDataError } from "@/types/user";
import Image from "next/image";
import React, { useState } from "react";
import validator from "validator";

const initialFormData: PersonalData = {
    name: "",
    dob: "",
    address: "",
    livedAtAddress: "",
    hobbies: "",
};

const initialErrorMessages: PersonalDataError = {
    name: "",
    dob: "",
    address: "",
    livedAtAddress: "",
    hobbies: "",
};

const Index = () => {
    const [formData, setFormData] = useState(initialFormData);
    const [errorMessages, setErrorMessages] = useState(initialErrorMessages);
    const [value, setValue] = useState(new Date());
    const [inputType, setInputType] = useState<"date" | "text">("text");

    const handleDateChange = (date: any) => {
        console.log("date:", date);
        setValue(date);
    };

    const validate = (): PersonalDataError => {
        const newErrorMessages: PersonalDataError = {
            name: "",
            dob: "",
            address: "",
            livedAtAddress: "",
            hobbies: "",
        };

        if (!validator.isLength(formData.name, { min: 3 })) {
            newErrorMessages.name = "Write full name";
        }

        if (!validator.isLength(formData.address, { min: 6 })) {
            newErrorMessages.address = "Invalid address";
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
        const response = await handleSignUP(formData);
    };
    return (
        <div>
            <div className="flex flex-col justify-center items-center">
                <div className="flex flex-row justify-center gap-3 mt-10">
                    <span className="bg-[#0075FF] h-8 w-8 rounded-full text-white font-[700] text-[14px] p-3 flex items-center justify-center">
                        1
                    </span>
                    <span className="bg-[#EFEFEF] h-8 w-8 rounded-full text-[#666666] font-[700] text-[14px] p-3 flex items-center justify-center">
                        2
                    </span>
                </div>
                <div className="text-center">
                    <h2 className="font-urbanist leading-7 text-[#000000] font-[700] text-[24px] py-3">
                        Personal information
                    </h2>
                    <p className="font-[500] font-urbanist text-[14px] leading-4 text-[#666666]">
                        Please answer questions as accurately as possible.
                    </p>
                </div>
                <PersonalInfoOne />
            </div>
        </div>
    );
};

export default Index;
