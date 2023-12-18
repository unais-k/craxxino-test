export interface RegisteredUserInterface {
    name: string;
    email: string;
    token: string;
    _id: string;
    phone: string;
    __v: number;
    dob: string;
    password: string;
    address: string;
    livedAtAddress: string;
    genderLabel: string;
    employmentStatus: string;
    savingOrInvestment: string;
    hobbies: string;
    createProcessComplete: string;
}

export interface FormData {
    email: string;
    phone: string;
    password: string;
    confirmPassword: string;
}

export interface ErrorMessage {
    email: string;
    phone: string;
    password: string;
    confirmPassword: string;
}

export interface PersonalData {
    name: string;
    dob: string;
    address: string;
    livedAtAddress: string;
    hobbies: string;
}

export interface PersonalDataError {
    name: string;
    dob: string;
    address: string;
    livedAtAddress: string;
    hobbies: string;
}
