import { selectUser } from "@/store/userSlice";
import React from "react";
import { useSelector } from "react-redux";

const Index = () => {
    const user = useSelector(selectUser);

    return (
        <section className="flex h-full w-full justify-center flex-col items-center py-10">
            <div className="text-center">
                <h2 className="font-urbanist leading-7 text-[#000000] font-[700] text-[24px] py-3">Profile</h2>
            </div>
            <div className="w-full flex justify-center items-center flex-col">
                <div className="mt-10 w-[30%]">
                    <label>Name</label>
                    <div className="w-full min-w-[200px] py-2 h-fit flex flex-row gap-3">
                        <div className="w-1/6">
                            <input
                                placeholder="please enter"
                                name="gender"
                                value={user?.gender}
                                className="w-full border border-solid ps-3 rounded-md shadow-sm placeholder:text-gray-500  focus:border-indigo-500 placeholder:ps-2 focus:outline-none py-3 font-urbanist text-[18px] leading-5 text-black "
                                type="text"
                            />
                        </div>
                        <div className="w-5/6 ">
                            <input
                                placeholder="please enter"
                                name="name"
                                value={user?.name}
                                className="w-full border border-solid ps-3 rounded-md shadow-sm placeholder:text-gray-500  focus:border-indigo-500 placeholder:ps-2 focus:outline-none py-3 font-urbanist text-[18px] leading-5 text-black "
                                type="text"
                            />
                        </div>
                    </div>
                    <div className="w-full min-w-[200px] py-2 h-fit">
                        <label>E-mail</label>
                        <input
                            placeholder="please enter"
                            name="email"
                            value={user?.email}
                            className="w-full border border-solid ps-3 rounded-md shadow-sm placeholder:text-gray-500  focus:border-indigo-500 placeholder:ps-2 focus:outline-none py-3 font-urbanist text-[18px] leading-5 text-black "
                            type="text"
                        />
                    </div>
                    <div className="w-full min-w-[200px] py-2 h-fit">
                        <label>Phone</label>
                        <input
                            placeholder="please enter"
                            name="phone"
                            value={user?.phone}
                            className="w-full border border-solid ps-3 rounded-md shadow-sm placeholder:text-gray-500  focus:border-indigo-500 placeholder:ps-2 focus:outline-none py-3 font-urbanist text-[18px] leading-5 text-black "
                            type="text"
                        />
                    </div>
                    <div className="w-full min-w-[200px] py-2 h-fit">
                        <label>Address</label>
                        <input
                            placeholder="please enter"
                            name="address"
                            value={user?.address}
                            className="w-full border border-solid ps-3 rounded-md shadow-sm placeholder:text-gray-500  focus:border-indigo-500 placeholder:ps-2 focus:outline-none py-3 font-urbanist text-[18px] leading-5 text-black "
                            type="text"
                        />
                    </div>
                    <div className="w-full min-w-[200px] py-2 h-fit">
                        <label>Lived for</label>
                        <input
                            placeholder="please enter"
                            name="livedFor"
                            value={user?.livedAtAddress}
                            className="w-full border border-solid ps-3 rounded-md shadow-sm placeholder:text-gray-500  focus:border-indigo-500 placeholder:ps-2 focus:outline-none py-3 font-urbanist text-[18px] leading-5 text-black "
                            type="text"
                        />
                    </div>
                    <div className="w-full min-w-[200px] py-2 h-fit">
                        <label>Hobby</label>
                        <input
                            placeholder="please enter"
                            name="hobbies"
                            value={user?.hobbies}
                            className="w-full border border-solid ps-3 rounded-md shadow-sm placeholder:text-gray-500  focus:border-indigo-500 placeholder:ps-2 focus:outline-none py-3 font-urbanist text-[18px] leading-5 text-black "
                            type="text"
                        />
                    </div>
                    <div className="w-full min-w-[200px] py-2 h-fit">
                        <label>Current Status</label>
                        <input
                            placeholder="please enter"
                            name="employmentStatus"
                            value={user?.employmentStatus}
                            className="w-full border border-solid ps-3 rounded-md shadow-sm placeholder:text-gray-500  focus:border-indigo-500 placeholder:ps-2 focus:outline-none py-3 font-urbanist text-[18px] leading-5 text-black "
                            type="text"
                        />
                    </div>
                    <div className="w-full min-w-[200px] py-2 h-fit">
                        <label>Investments</label>
                        <input
                            placeholder="please enter"
                            name="savingOrInvestment"
                            value={user?.savingOrInvestment}
                            className="w-full border border-solid ps-3 rounded-md shadow-sm placeholder:text-gray-500  focus:border-indigo-500 placeholder:ps-2 focus:outline-none py-3 font-urbanist text-[18px] leading-5 text-black "
                            type="text"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Index;
