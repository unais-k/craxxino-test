import React, { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { IoMdArrowDropdown, IoMdCheckmark } from "react-icons/io";

type InputProps = {
    onChange: (e: any) => void;
    listdown: { name: string }[];
    selected: string;
};

const Index: React.FC<InputProps> = ({ listdown, selected, onChange }) => {
    return (
        <>
            <Listbox value={selected} onChange={onChange}>
                <div className="relative">
                    <Listbox.Button className="relative w-full cursor-default text-left focus:outline-none  focus-visible:ring-offset-orange-300 sm:text-sm">
                        <span className="block truncate">{selected}</span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <IoMdArrowDropdown className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        </span>
                    </Listbox.Button>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options className="absolute mt-3 max-h-60 w-fit overflow-auto bg-white py-1 text-base shadow-lg focus:outline-none sm:text-sm">
                            {listdown.map((person, personIdx) => (
                                <Listbox.Option
                                    key={personIdx}
                                    className={({ active }) =>
                                        `relative cursor-default border-t border-solid select-none py-2 px-2 ${
                                            active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                                        }`
                                    }
                                    value={person}
                                >
                                    {({ selected }) => (
                                        <>
                                            <span
                                                className={`block px-5 truncate ${
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
        </>
    );
};

export default Index;
