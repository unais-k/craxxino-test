import PersonalInfoOne from "@/components/modules/PersonalInfoOne";
import { selectUser, setUser } from "@/store/userSlice";
import { PersonalData, PersonalDataError } from "@/types/user";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import validator from "validator";
import { format } from "date-fns";

const initialFormData: PersonalData = {
    gender: "",
    name: "",
    dob: "",
    address: "",
    livedAtAddress: "",
    hobbies: "",
};

const initialErrorMessages: PersonalDataError = {
    gender: "",
    name: "",
    dob: "",
    address: "",
    livedAtAddress: "",
    hobbies: "",
};

const Index: React.FC = () => {
    const [formData, setFormData] = useState(initialFormData);
    const [errorMessages, setErrorMessages] = useState(initialErrorMessages);
    const [selected, setSelected] = useState("Mr");

    const router = useRouter();
    const dispatch = useDispatch();

    const user = useSelector(selectUser);

    useEffect(() => {
        if (user.name) {
            setFormData({
                name: user.name,
                address: user.address,
                livedAtAddress: user.livedAtAddress,
                hobbies: user.hobbies,
                dob: user.dob,
                gender: user.gender,
            });
        }
    }, [user.name, user.address, user.livedAtAddress, user.hobbies, user.dob, user.gender]);

    const handleListChange = (e: any) => {
        setSelected(e?.name);
        setFormData({ ...formData, gender: e?.name });
    };

    const handleDateChange = (date: Date | null) => {
        if (date) {
            const formattedDate = format(date, "dd-MM-yyyy");
            setFormData({ ...formData, dob: formattedDate });
        }
    };

    const validate = (): PersonalDataError => {
        const newErrorMessages: PersonalDataError = {
            gender: "",
            name: "",
            dob: "",
            address: "",
            livedAtAddress: "",
            hobbies: "",
        };
        if (formData.gender == "") newErrorMessages.gender = "please select a gender type";
        if (formData.dob == "") newErrorMessages.dob = "please select a date";
        if (formData.livedAtAddress == "") newErrorMessages.livedAtAddress = "please give a specific time period";

        if (!validator.isLength(formData.name, { min: 3 })) {
            newErrorMessages.name = "Write full name";
        }
        if (!validator.isLength(formData.hobbies, { min: 10 })) {
            newErrorMessages.hobbies = "write at least 10 characters";
        }

        if (!validator.isLength(formData.address, { min: 6 })) {
            newErrorMessages.address = "Invalid address";
        }

        return newErrorMessages;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>): void => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement> | React.FocusEvent<HTMLTextAreaElement>) => {
        setErrorMessages(validate());
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (
            !formData.gender ||
            !formData.name ||
            !formData.address ||
            !formData.dob ||
            !formData.livedAtAddress ||
            !formData.hobbies
        ) {
            setErrorMessages(validate());
            return;
        }
        await dispatch(setUser(formData));

        router.push("/financial-info-tabs");
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
                <PersonalInfoOne
                    formData={formData}
                    selected={selected}
                    errorMessages={errorMessages}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onFormSubmit={handleSubmit}
                    onDate={handleDateChange}
                    handleChange={handleListChange}
                />
            </div>
        </div>
    );
};

export default Index;
