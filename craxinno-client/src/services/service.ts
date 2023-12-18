import axios from "axios";

export const handleSignUP = async (data: Object) => {
    let response = await axios.post("http://localhost:4001/create-user", data);

    const responseData = response.data;
    if (responseData?.isError) {
        return { msg: "error" };
    }

    return responseData;
};
