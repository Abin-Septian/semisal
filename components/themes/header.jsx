import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from 'next/image'

const Header = () => {
    const router = useRouter();

    return (
        <div className="flex justify-between items-center px-8 w-screen shadow-md h-14 font-medium">
            <div>
                <Image src={'/Images/Logo2.png'} height={30} width={120} alt=""></Image>
            </div>
            <div className="flex gap-8 items-center">
                <Link href={"/dashboard"} passHref={true}>
                    <a
                        className={`cursor-pointer ${
                            router.pathname.includes("/dashboard")
                                ? "text-blue-300"
                                : ""
                        }`}
                    >
                        Dashboard
                    </a>
                </Link>
                <Link href={"/proyek"} passHref={true}>
                    <a
                        className={`cursor-pointer ${
                            router.pathname.includes("/proyek")
                                ? "text-blue-300"
                                : ""
                        }`}
                    >
                        Proyek
                    </a>
                </Link>
                <Link href={"/laporan"} passHref={true}>
                    <a
                        className={`cursor-pointer ${
                            router.pathname.includes("/laporan")
                                ? "text-blue-300"
                                : ""
                        }`}
                    >
                        Laporan
                    </a>
                </Link>
                <Link href={"/setting"} passHref={true}>
                    <a
                        className={`cursor-pointer ${
                            router.pathname.includes("/setting")
                                ? "text-blue-300"
                                : ""
                        }`}
                    >
                        Setting
                    </a>
                </Link>
                <div className="w-8 h-8  rounded bg-gray-400"></div>
            </div>
        </div>
    );
};

export default Header;
