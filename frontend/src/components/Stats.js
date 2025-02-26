import React from "react";

const Stats = ({ stats }) => {
    return (
        <div className="flex justify-between bg-white p-4 rounded-lg shadow-md">
            <div>
                <h3 className="text-lg font-semibold">Total Sales</h3>
                <p className="text-xl font-bold text-green-500">${stats.totalSales || 0}</p>
            </div>
            <div>
                <h3 className="text-lg font-semibold">Total Sold Items</h3>
                <p className="text-xl font-bold">{stats.totalItems || 0}</p>
            </div>
            <div>
                <h3 className="text-lg font-semibold">Not Sold Items</h3>
                <p className="text-xl font-bold text-red-500">{stats.notSold || 0}</p>
            </div>
        </div>
    );
};

export default Stats;
