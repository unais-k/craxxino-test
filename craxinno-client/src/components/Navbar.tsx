import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { IoIosHelpCircleOutline } from "react-icons/io";

type LandingPageHeaderProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & Partial<{}>;

const Navbar: React.FC<LandingPageHeaderProps> = (props) => {
    const router = useRouter();
    return (
        <>
            <header className={`border-b border-solid h-[60px] w-full`}>
                <div className="flex justify-between px-20 h-full">
                    <div onClick={() => router.push("/")} className="flex flex-row justify-center items-center gap-5">
                        <div className="flex h-full flex-row justify-center items-center">
                            <div className="relative">
                                <Image
                                    className=" h-fit w-fit top-2 left-1"
                                    alt="C logo"
                                    src="/image/C.svg"
                                    width={20}
                                    height={20}
                                />
                                <Image
                                    className="absolute top-2.5 left-3 h-fit w-fit"
                                    alt="T logo"
                                    src="/image/T.svg"
                                    width={20}
                                    height={20}
                                />
                            </div>
                        </div>
                        <Image alt="logo" src="/image/Logo.svg" height={100} width={100} className="h-fit w-fit" />
                    </div>
                    <div className="flex justify-center items-center">
                        <IoIosHelpCircleOutline size={30} />
                    </div>
                </div>
            </header>
        </>
    );
};

export default Navbar;
