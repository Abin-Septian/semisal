import React from "react";
import Layout from "../../components/themes/layout";
import Doughnut from "../../components/chart/doughnut"
import Project from "../../components/table/project"

const index = () => {
    return (
        <>
            <Layout>
                <div className="max-w-screen-2xl mx-auto mt-10">
                    <div className="flex gap-6">
                        <div className="w-1/3 min-h-30rem p-4 rounded drop-shadow-lg bg-white">
                            <h2 className="text-2xl font-bold text-sky-600">Status Proyek</h2>
                            <p>Menampilkan jumlah data proyek berdasarkan status pada proyek</p>
                            <div className="m-4">

                            <Doughnut />
                            </div>
                        </div>
                        <div className="w-2/3 min-h-30rem p-4 rounded drop-shadow-lg bg-white">
                            <h2 className="text-2xl font-bold text-sky-600">Nilai Proyek</h2>
                            <p>Menampilkan nilai proyek berdasarkan segmen industri</p>
                            <div className="w-full bg-gray-200 mt-8">
                                <Project />
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default index;
