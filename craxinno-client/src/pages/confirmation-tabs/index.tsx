import Input from "@/components/ui/input";
import { handleSignUP } from "@/services/service";
import { PersonalData, PersonalDataError } from "@/types/user";
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
                <div className="w-[30%]">
                    <div>
                        <div className="w-full flex gap-3 h-10 my-4">
                            <div className="w-1/6 border border-solid rounded-md">
                                <select className="w-16 outline-none focus:outline-none ps-2 pt-2" name="" id="">
                                    <option value="Mr">Mr</option>
                                    <option value="Mrs">Mrs</option>
                                    <option value="He">He</option>
                                    <option value="She">She</option>
                                    <option value="Non-disclosable">Non-disclosable</option>
                                </select>
                            </div>
                            <div className="w-4/6 relative">
                                <Input
                                    name="email"
                                    type="text"
                                    value={formData.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    errorMessage={errorMessages.name}
                                />
                            </div>
                        </div>
                        <div className="relative w-full min-w-[200px] h-10 my-4">
                            <Input
                                name="email"
                                type="date"
                                value={formData.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                errorMessage={errorMessages.name}
                            />
                        </div>
                        <div className="relative w-full min-w-[200px] h-10 my-4">
                            <Input
                                name="email"
                                type="text"
                                value={formData.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                errorMessage={errorMessages.name}
                            />
                        </div>
                        <div className="relative w-full min-w-[200px] h-10 my-4">
                            <Input
                                name="email"
                                type="text"
                                value={formData.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                errorMessage={errorMessages.name}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;
