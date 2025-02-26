import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "./components/Table";
import Stats from "./components/Stats";
import BarChart from "./components/BarChart";
import PieChart from "./components/PieChart";

const App = () => {
    const [month, setMonth] = useState("March");
    const [transactions, setTransactions] = useState([]);
    const [stats, setStats] = useState({});
    const [barData, setBarData] = useState([]);
    const [pieData, setPieData] = useState([]);
    const [loading, setLoading] = useState(false); 

    useEffect(() => {
        fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [month]);

    const fetchData = async () => {
        const transRes = await axios.get(`http://localhost:5000/api/transactions?month=${month}`);
        const statsRes = await axios.get(`http://localhost:5000/api/statistics?month=${month}`);
        const barRes = await axios.get(`http://localhost:5000/api/barchart?month=${month}`);
        const pieRes = await axios.get(`http://localhost:5000/api/piechart?month=${month}`);

        setTransactions(transRes.data);
        setStats(statsRes.data);
        setBarData(barRes.data);
        setPieData(pieRes.data);
    };


    const handleInit = async () => {
      setLoading(true);
      try {
          const response = await axios.get("http://localhost:5000/api/init");
          alert(response.data.message); // Show success message
          fetchData(); // Reload data after initialization
      } catch (error) {
          alert("Failed to initialize data!");
          console.error("Error initializing database:", error);
      }
      setLoading(false);
  };

    return (
        <div className="max-w-5xl mx-auto p-6">
            <h1 className="text-2xl font-bold text-center mb-4">MERN Transactions Dashboard</h1>
            <div className="flex justify-center mb-4">

    {/* 🔹 Initialization Button */}
    <div className="init flex justify-center mb-4">
                <button 
                    className="btn btn-primary px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
                    onClick={handleInit}
                    disabled={loading}
                >
                    {loading ? "Initializing..." : "Initialize Data"}
                </button>
            </div>

                <select 
                    className="p-2 border rounded-md shadow"
                    value={month} 
                    onChange={(e) => setMonth(e.target.value)}
                >
                    {["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].map(m => (
                        <option key={m} value={m}>{m}</option>
                    ))}
                </select>
             
            </div>
            <Stats stats={stats} />
            <Table transactions={transactions} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <BarChart data={barData} />
                <PieChart data={pieData} />
            </div>
        </div>
    );
};

export default App;
