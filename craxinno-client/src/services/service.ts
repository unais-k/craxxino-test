import axios from "axios";
import { toast } from "react-toastify";

export const handleCreate = async (data: Object) => {
    let response = await axios.post("http://localhost:4001/create-user", data);

    const responseData = response.data;
    if (!responseData.status) {
        toast.warning(`${responseData.msg}`);
    }
    return responseData;
};
