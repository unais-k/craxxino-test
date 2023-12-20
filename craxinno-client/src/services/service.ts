import axios from "axios";
import { toast } from "react-toastify";

export const handleCreate = async (data: Object) => {
    let response = await axios.post("https://craxxino-server-705scgno1-unais-k.vercel.app/create-user", data);

    const responseData = response.data;
    if (!responseData.status) {
        toast.warning(`${responseData.msg}`);
    }
    return responseData;
};
