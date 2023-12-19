import React, { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { IoMdArrowDropdown, IoMdCheckmark } from "react-icons/io";

const people = [
    { name: "Wade Cooper" },
    { name: "Employed" },
    { name: "Unemployed" },
    { name: "Self-employed" },
    { name: "Student" },
    { name: "Retired" },
    { name: "Homemaker" },
    { name: "Tom Cook" },
];

const PersonalInfoTwo = () => {
    const [selected, setSelected] = useState(people[0]);
    return (
        <div className="w-[30%]">
            <form>
                <div className=" w-full border border-solid py-2 rounded-md focus:outline-none px-3 h-10 my-4">
                    <Listbox value={selected} onChange={setSelected}>
                        <div className="relative">
                            <Listbox.Label>Assignee:</Listbox.Label>
                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                <IoMdArrowDropdown className="h-5 w-5 text-gray-400" aria-hidden="true" />
                            </span>
                            <Listbox.Button className="relative w-full cursor-default text-left focus:outline-none  focus-visible:ring-offset-orange-300 sm:text-sm">
                                <span className="block truncate">{selected.name}</span>
                            </Listbox.Button>
                            <Transition
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                    {people.map((person, personIdx) => (
                                        <Listbox.Option
                                            key={personIdx}
                                            className={({ active }) =>
                                                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                                    active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                                                }`
                                            }
                                            value={person}
                                        >
                                            {({ selected }) => (
                                                <>
                                                    <span
                                                        className={`block truncate ${
                                                            selected ? "font-medium" : "font-normal"
                                                        }`}
                                                    >
                                                        {person.name}
                                                    </span>
                                                    {selected ? (
                                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                            <IoMdCheckmark className="h-5 w-5" aria-hidden="true" />
                                                        </span>
                                                    ) : null}
                                                </>
                                            )}
                                        </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                            </Transition>
                        </div>
                    </Listbox>
                </div>
                <div className="  w-full border border-solid py-2 rounded-md focus:outline-none px-3 h-10 my-4">
                    <input
                        name=""
                        type="text"
                        className="w-full focus:outline-none placeholder:text-[#9c9999] placeholder:text-[14px] font-[400] placeholder:ps-2"
                        placeholder="Additional savings/investments"
                        // value={formData.name}
                        // onChange={handleChange}
                        // onBlur={handleBlur}
                    />
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
