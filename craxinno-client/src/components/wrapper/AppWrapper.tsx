import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../Navbar";

export default function AppWrapper({ children }: { children: React.ReactNode }) {
    const router = useRouter();

    return (
        <div
            style={{
                overflow: "hidden",
            }}
        >
            <ToastContainer />
            <Navbar />
            <main>{children} </main>
        </div>
    );
}
