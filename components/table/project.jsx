import React from "react";

const project = () => {
    const data = [
        { name: "test", total: 12, value: "123.000.000" },
        { name: "test", total: 12, value: "123.000.000" },
        { name: "test", total: 12, value: "123.000.000" },
        { name: "test", total: 12, value: "123.000.000" },
        { name: "test", total: 12, value: "123.000.000" },
        { name: "test", total: 12, value: "123.000.000" },
        { name: "test", total: 12, value: "123.000.000" },
        { name: "test", total: 12, value: "123.000.000" },
        { name: "test", total: 12, value: "123.000.000" },
        { name: "test", total: 12, value: "123.000.000" },
        { name: "test", total: 12, value: "123.000.000" },
        { name: "test", total: 12, value: "123.000.000" },
        { name: "test", total: 12, value: "123.000.000" },
    ];
    return (
        <div>
            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Segment</th>
                        <th>Total Proyek</th>
                        <th>Total Nilai Proyek</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => {
                        return (
                            <tr
                                className="bg-white odd:bg-gray-100 text-center"
                                key={index}
                            >
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.total}</td>
                                <td>{item.value}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default project;
