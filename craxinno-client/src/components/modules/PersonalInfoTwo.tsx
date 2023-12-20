import React, { FormEvent, Fragment, useState } from "react";
import { IoMdArrowDropdown, IoMdCheckmark } from "react-icons/io";
import Listbox from "@/components/ui/Listbox";
import { FinancialData, FinancialDataError } from "@/types/user";

const people = [
    { name: "Employed" },
    { name: "Unemployed" },
    { name: "Self-employed" },
    { name: "Student" },
    { name: "Retired" },
    { name: "Homemaker" },
];

type InputProps = {
    formData: FinancialData;
    selected: string;
    errorMessages: FinancialDataError;
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onFormSubmit: (e: FormEvent<HTMLFormElement>) => void;
    handleChange: any;
};

const PersonalInfoTwo: React.FC<InputProps> = ({
    formData,
    selected,
    errorMessages,
    onBlur,
    onChange,
    onFormSubmit,
    handleChange,
}) => {
    return (
        <div className="w-[30%]">
            <form onSubmit={onFormSubmit}>
                <div className=" w-full border border-solid py-2 rounded-md focus:outline-none px-3 h-10 my-4">
                    <Listbox onChange={handleChange} listdown={people} selected={selected} />
                    {errorMessages.employmentStatus && (
                        <div className="text-red-500 absolute text-left text-[10px] leading-[12px] font-semibold tracking-widest w-fit">
                            {errorMessages.employmentStatus}
                        </div>
                    )}
                </div>
                <div className="w-full border border-solid py-2 rounded-md focus:outline-none px-3 h-10 my-4">
                    <input
                        name="savingOrInvestment"
                        type="text"
                        className="w-full focus:outline-none placeholder:text-[#9c9999] placeholder:text-[14px] font-[400] placeholder:ps-2"
                        placeholder="Additional savings/investments"
                        value={formData.savingOrInvestment}
                        onChange={onChange}
                        onBlur={onBlur}
                    />
                    {errorMessages.savingOrInvestment && (
                        <div className="text-red-500 absolute text-left text-[10px] leading-[12px] font-semibold tracking-widest w-fit">
                            {errorMessages.savingOrInvestment}
                        </div>
                    )}
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

export default PersonalInfoTwo;
