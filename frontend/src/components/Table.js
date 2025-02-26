import React from "react";

const Table = ({ transactions }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md mt-4">
            <h2 className="text-lg font-bold mb-2">Transactions</h2>
            <table className="w-full border-collapse">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border p-2">Title</th>
                        <th className="border p-2">Price</th>
                        <th className="border p-2">Category</th>
                        <th className="border p-2">Sold</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((t, index) => (
                        <tr key={index} className="border">
                            <td className="p-2">{t.title}</td>
                            <td className="p-2">${t.price}</td>
                            <td className="p-2">{t.category}</td>
                            <td className="p-2">{t.sold ? "✅" : "❌"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
