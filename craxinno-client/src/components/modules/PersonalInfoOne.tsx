import Image from "next/image";
import React, { FormEvent, useState } from "react";
import Listbox from "@/components/ui/Listbox";
import { PersonalData, PersonalDataError } from "@/types/user";

const people = [{ name: "Mr" }, { name: "Mrs" }, { name: "He" }, { name: "She" }, { name: "non-disclosable" }];

type InputProps = {
    formData: PersonalData;
    selected: string;
    errorMessages: PersonalDataError;
    onBlur: (e: React.FocusEvent<HTMLInputElement> | React.FocusEvent<HTMLTextAreaElement>) => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void;
    onFormSubmit: (e: FormEvent<HTMLFormElement>) => void;
    onDate: (date: Date | null) => void;
    handleChange: any;
};

const PersonalInfoOne: React.FC<InputProps> = ({
    formData,
    selected,
    errorMessages,
    onBlur,
    onChange,
    onFormSubmit,
    onDate,
    handleChange,
}) => {
    const [inputType, setInputType] = useState<"date" | "text">("text");

    const onDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputDate = new Date(event.target.value);
        onDate(inputDate);
    };

    return (
        <div className="w-[30%]">
            <form onSubmit={onFormSubmit}>
                <div className="w-full flex gap-3 h-10 my-4">
                    <div className="w-1/6 border border-solid relative rounded-md ps-2 pt-2">
                        <Listbox onChange={handleChange} listdown={people} selected={selected} />
                        {errorMessages.gender && (
                            <div className="text-red-500 absolute text-left text-[10px] leading-[12px] font-semibold tracking-widest w-fit">
                                {errorMessages.gender}
                            </div>
                        )}
                    </div>
                    <div className="w-5/6 border border-solid py-2 rounded-md focus:outline-none px-3">
                        <input
                            name="name"
                            type="text"
                            placeholder="Full Name as per your passport"
                            className="w-full focus:outline-none placeholder:text-[#9c9999] placeholder:text-[14px] font-[400] placeholder:ps-2"
                            value={formData.name}
                            onChange={onChange}
                            onBlur={onBlur}
                        />
                        {errorMessages.name && (
                            <div className="text-red-500 text-left text-[10px] leading-[12px] font-semibold tracking-widest w-full">
                                {errorMessages.name}
                            </div>
                        )}
                    </div>
                </div>
                <div className=" w-full border border-solid py-2 rounded-md focus:outline-none px-3 h-10 my-4">
                    <input
                        name="date"
                        type={inputType}
                        placeholder="Please select a date"
                        className="w-full focus:outline-none placeholder:text-[#9c9999] placeholder:text-[14px] font-[400] placeholder:ps-2"
                        value={formData.dob}
                        onChange={onDateChange}
                        onFocus={() => setInputType("date")}
                        onBlur={() => setInputType("text")}
                    />
                    {errorMessages.dob && (
                        <div className="text-red-500 text-left text-[10px] leading-[12px] font-semibold tracking-widest w-full">
                            {errorMessages.dob}
                        </div>
                    )}
                </div>
                <div className="  w-full border border-solid py-2 rounded-md focus:outline-none px-3 h-10 my-4">
                    <input
                        name="address"
                        type="text"
                        className="w-full focus:outline-none placeholder:text-[#9c9999] placeholder:text-[14px] font-[400] placeholder:ps-2"
                        placeholder="Current address"
                        value={formData.address}
                        onChange={onChange}
                        onBlur={onBlur}
                    />
                    {errorMessages.address && (
                        <div className="text-red-500 text-left text-[10px] leading-[12px] font-semibold tracking-widest w-full">
                            {errorMessages.address}
                        </div>
                    )}
                </div>
                <div className="  w-full border border-solid py-2 rounded-md focus:outline-none px-3 h-10 my-4">
                    <input
                        name="livedAtAddress"
                        className="w-full focus:outline-none placeholder:text-[#9c9999] placeholder:text-[14px] font-[400] placeholder:ps-2"
                        type="text"
                        placeholder="How long have you lived at this address?"
                        value={formData.livedAtAddress}
                        onChange={onChange}
                        onBlur={onBlur}
                    />
                    {errorMessages.livedAtAddress && (
                        <div className="text-red-500 text-left text-[10px] leading-[12px] font-semibold tracking-widest w-full">
                            {errorMessages.livedAtAddress}
                        </div>
                    )}
                </div>
                <div className="  w-full border border-solid py-2 rounded-md focus:outline-none px-3 h-fit my-4">
                    <textarea
                        name="hobbies"
                        placeholder="Tell us a bit about yourself (what are you like as a person, do you have any hobbies, etc.)"
                        className="w-full resize-none focus:outline-none placeholder:text-[#9c9999] placeholder:text-[14px] font-[400] placeholder:ps-2"
                        value={formData.hobbies}
                        onBlur={onBlur}
                        onChange={onChange}
                    />
                    {errorMessages.hobbies && (
                        <div className="text-red-500 text-left text-[10px] leading-[12px] font-semibold tracking-widest w-full">
                            {errorMessages.hobbies}
                        </div>
                    )}
                </div>
                <div className="mt-5 w-full flex flex-row gap-3">
                    <Image alt="info" className="pb-2" src="/image/info.svg" width={20} height={20} />
                    <p className="text-[14px] leading-[16px] font-[500] text-gray-500">
                        All information can be edited once you have created your account.
                    </p>
                </div>
                <button
                    type="submit"
                    className="mt-5 w-full py-5 rounded-md bg-[#0075FF] text-white font-[700] text-[14px]"
                >
                    Save and continue
                </button>
            </form>
        </div>
    );
};

export default PersonalInfoOne;
