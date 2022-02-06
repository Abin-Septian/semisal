import React from "react";
import Header from "./header";
import Footer from "./footer";
import Head from "next/head";

const layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Dashboard</title>
            </Head>
            <div className="w-screen min-h-screen tracking-wider">
                <Header />
                <main>{children}</main>
                <Footer />
            </div>
        </>
    );
};

export default layout;
