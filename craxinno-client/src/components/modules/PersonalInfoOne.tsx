import Image from "next/image";
import React from "react";

const PersonalInfoOne = () => {
    return (
        <div className="w-[30%]">
            <form>
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
                    <div className="w-5/6 border border-solid py-2 rounded-md focus:outline-none px-3">
                        <input
                            name="name"
                            type="text"
                            className="w-full focus:outline-none placeholder:text-[#9c9999] placeholder:text-[14px] font-[400] placeholder:ps-2"
                            // value={formData.name}
                            // placeholder="Full name as per your Passport"
                            // onChange={handleChange}
                            // onBlur={handleBlur}
                        />
                    </div>
                </div>
                <div className=" w-full border border-solid py-2 rounded-md focus:outline-none px-3 h-10 my-4">
                    <input
                        name="email"
                        // type={inputType}
                        placeholder="Please select a date"
                        className="w-full focus:outline-none placeholder:text-[#9c9999] placeholder:text-[14px] font-[400] placeholder:ps-2"
                        // value={formData.name}
                        // onChange={handleChange}
                        // onFocus={() => setInputType("date")}
                        // onBlur={() => setInputType("text")}
                    />
                    {/* <input
                                datetimepicker
                                class="focus:outline-none text-md leading-5.6 ease-soft w-full appearance-none rounded-lg font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500"
                                type="text"
                                placeholder="Please select a date"
                            /> */}
                </div>
                <div className="  w-full border border-solid py-2 rounded-md focus:outline-none px-3 h-10 my-4">
                    <input
                        name=""
                        type="text"
                        className="w-full focus:outline-none placeholder:text-[#9c9999] placeholder:text-[14px] font-[400] placeholder:ps-2"
                        placeholder="Current address"
                        // value={formData.name}
                        // onChange={handleChange}
                        // onBlur={handleBlur}
                    />
                </div>
                <div className="  w-full border border-solid py-2 rounded-md focus:outline-none px-3 h-10 my-4">
                    <input
                        name=""
                        className="w-full focus:outline-none placeholder:text-[#9c9999] placeholder:text-[14px] font-[400] placeholder:ps-2"
                        type="text"
                        placeholder="How long have you lived at this address?"
                        // value={formData.name}
                        // onChange={handleChange}
                        // onBlur={handleBlur}
                    />
                </div>
                <div className="  w-full border border-solid py-2 rounded-md focus:outline-none px-3 h-fit my-4">
                    <textarea
                        name=""
                        placeholder="Tell us a bit about yourself (what are you like as a person, do you have any hobbies, etc.)"
                        className="w-full resize-none focus:outline-none placeholder:text-[#9c9999] placeholder:text-[14px] font-[400] placeholder:ps-2"
                        // value={formData.name}
                    />
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
