export interface RegisteredUserInterface {
    name?: string;
    email?: string;
    token?: string;
    _id?: string;
    phone?: string | number | any;
    __v?: number;
    dob?: string;
    password?: string;
    address?: string;
    livedAtAddress?: string;
    gender?: string;
    employmentStatus?: string;
    savingOrInvestment?: string;
    hobbies?: string;
}

export interface FormData {
    email: string | any;
    phone: string | any;
    password: string | any;
    confirmPassword: string | any;
}

export interface ErrorMessage {
    email: string;
    phone: string;
    password: string;
    confirmPassword: string;
}

export interface PersonalData {
    gender: string | any;
    name: string | any;
    dob: string | any;
    address: string | any;
    livedAtAddress: string | any;
    hobbies: string | any;
}

export interface PersonalDataError {
    gender: string;
    name: string;
    dob: string;
    address: string;
    livedAtAddress: string;
    hobbies: string;
}

export interface FinancialData {
    employmentStatus: string | any;
    savingOrInvestment: string | any;
}
export interface FinancialDataError {
    employmentStatus: string;
    savingOrInvestment: string;
}
