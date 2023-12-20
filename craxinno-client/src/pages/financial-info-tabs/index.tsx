import PersonalInfoTwo from "@/components/modules/PersonalInfoTwo";
import { handleCreate } from "@/services/service";
import { clearUser, selectUser, setUser } from "@/store/userSlice";
import { FinancialData, FinancialDataError } from "@/types/user";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const initialFormData: FinancialData = {
    employmentStatus: "",
    savingOrInvestment: "",
};

const initialErrorMessages: FinancialDataError = {
    employmentStatus: "",
    savingOrInvestment: "",
};

const Index: React.FC = () => {
    const [formData, setFormData] = useState(initialFormData);
    const [errorMessages, setErrorMessages] = useState(initialErrorMessages);
    const [selected, setSelected] = useState("What is your current employment status?");

    const router = useRouter();
    const dispatch = useDispatch();

    const user = useSelector(selectUser);
    useEffect(() => {
        if (user.employmentStatus) {
            setFormData({
                employmentStatus: user.employmentStatus,
                savingOrInvestment: user.savingOrInvestment,
            });
            setSelected(user.employmentStatus);
        }
    }, [user.employmentStatus, user.savingOrInvestment]);

    const handleListChange = (e: any) => {
        setSelected(e?.name);
        setFormData({ ...formData, employmentStatus: e?.name });
    };

    const validate = (): FinancialDataError => {
        const newErrorMessages: FinancialDataError = {
            employmentStatus: "",
            savingOrInvestment: "",
        };
        if (formData.employmentStatus == "") newErrorMessages.employmentStatus = "please select a type";
        if (formData.savingOrInvestment == "") newErrorMessages.savingOrInvestment = "please give a specific answer";

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
        if (!formData.employmentStatus || !formData.savingOrInvestment) {
            setErrorMessages(validate());
            return;
        }
        await dispatch(setUser(formData));
        if (user.employmentStatus && user.savingOrInvestment) {
            const response = await handleCreate(user);
            if (response.status) toast.success("Authorization completed");

            dispatch(clearUser());
            dispatch(setUser(response.user));
            dispatch(setUser({ token: response.token }));
            router.push("/profile");
        }
    };

    return (
        <div>
            <div className="flex flex-col justify-center items-center">
                <div className="flex flex-row justify-center gap-3 mt-10">
                    <span className="bg-[#EFEFEF] h-8 w-8 rounded-full text-[#666666] font-[700] text-[14px] p-3 flex items-center justify-center">
                        1
                    </span>
                    <span className="bg-[#0075FF] h-8 w-8 rounded-full text-white font-[700] text-[14px] p-3 flex items-center justify-center">
                        2
                    </span>
                </div>
                <div className="text-center">
                    <h2 className="font-urbanist leading-7 text-[#000000] font-[700] text-[24px] py-3">
                        Financial information
                    </h2>
                    <p className="font-[500] font-urbanist text-[14px] leading-4 text-[#666666]">
                        All your information is stored securely.
                    </p>
                </div>
                <PersonalInfoTwo
                    formData={formData}
                    selected={selected}
                    errorMessages={errorMessages}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onFormSubmit={handleSubmit}
                    handleChange={handleListChange}
                />
            </div>
        </div>
    );
};

export default Index;
