import React from "react";

interface InputProps {
    value: string;
    name: string;
    type: string;
    errorMessage: string;
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ value, onBlur, onChange, errorMessage, name, type }) => {
    return (
        <>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                // required
                onBlur={onBlur}
                className="peer bg-transparent h-10 w-full text-black rounded-lg placeholder-transparent border border-solid px-2 ring-gray-500 focus:ring-[#0075FF] focus:outline-none focus:border-[#0075FF]"
                placeholder="Type inside me"
            />
            <label className="absolute cursor-text left-0 -top-3 text-sm text-black bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-[#0075FF] peer-focus:bg-white peer-focus:text-sm transition-all">
                {name}
            </label>
            {errorMessage && (
                <div className="text-red-500 text-left text-[10px] leading-[12px] font-semibold tracking-widest w-full">
                    {errorMessage}
                </div>
            )}
        </>
    );
};

export default Input;
