import React from "react";
import Link from "next/link";
import Image from "next/image";
import style from "../styles/Login.module.css";

const Login = () => {
    return (
        <div className="flex w-screen h-screen">
            <div
                className={`hidden md:flex flex-col items-center justify-center w-1/2 h-full ${style.login}`}
            >
                <div className="w-2/3 h-1/4">
                    <h1 className="text-4xl text-white font-bold leading-loose">
                        Your Project
                        <br />
                        Management Solution
                    </h1>
                </div>
            </div>
            <div className="w-full md:w-1/2 h-full bg-white">
                <div className="flex flex-col items-center w-full h-full">
                    <div className="absolute right-0 m-12 logo">
                        <Image src={'/Images/Logo.png'} height={50} width={200} alt=""></Image>
                    </div>
                    <div
                        id="login-form"
                        className="flex flex-col gap-2 my-auto md:w-2/3 mx-12 md:mx-auto "
                    >
                        <h1 className="text-2xl font-bold">Masuk</h1>
                        <small className="text-md">
                            Belum punya akun ? &nbsp;
                            <a href="http://#">
                                <span className="text-blue-600 underline">
                                    Daftar Akun Baru
                                </span>
                            </a>
                        </small>
                        <form>
                            <label className="block" htmlFor="email">
                                <span className="block text-md font-semibold text-slate-700">
                                    Email
                                </span>
                                <input
                                    className="py-2 px-4 my-2 w-2/3 border-b-2 focus:border-blue-400 focus:outline-none"
                                    type="email"
                                    name=""
                                    id="email"
                                    placeholder="Masukkan email anda"
                                />
                            </label>
                            <label className="block" htmlFor="password">
                                <span className="block text-md font-semibold text-slate-700">
                                    Kata Sandi
                                </span>
                                <input
                                    className="py-2 px-4 my-2 w-2/3 border-b-2 focus:border-blue-400 focus:outline-none"
                                    type="password"
                                    name=""
                                    id="password"
                                    placeholder="Masukkan kata sandi anda"
                                />
                            </label>
                            <label htmlFor="rememberMe">
                                <input
                                    type="checkbox"
                                    name=""
                                    id="rememberMe"
                                />
                                <span className="mx-2">Ingat saya</span>
                            </label>
                            <div className="flex flex-col md:flex-row justify-between items-center w-full">
                                <Link href={"/dashboard"}>
                                    <button
                                        className="my-4 w-52 h-10 bg-blue-400 text-white font-bold rounded"
                                        type="submit"
                                    >
                                        Masuk
                                    </button>
                                </Link>
                                <a href="http://#" className="text-blue-600">
                                    Lupa Kata Sandi
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
