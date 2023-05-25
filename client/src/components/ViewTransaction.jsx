import React from "react";
import Navbar from "./Navbar";
import bg from "../assets/bg.jpg";


function ViewTransaction({ accno }) {
  return (
    <div
      className="flex flex-col items-center justify-center h-screen"
      style={{ background: "#1a1a1a" }}
    >
      <Navbar />
      <div
        className="flex flex-col items-center justify-center"
        style={{
          background: `url(${bg})`,
          width: "80vw",
          height: "80vh",
          backgroundPosition: "center",
          backgroundSize: "cover",
          borderRadius: "0 0 10px 10px",
        }}
      >
        <div
          className="flex flex-col items-center justify-between"
          style={{
            borderRadius: "15px",
            boxShadow: "0px 0px 20px 3px rgb(136 136 136 / 29%)",
            border: "2px dotted #D89216",
            padding: "20px",
          }}
        >
            <h1 className="text-white text-2xl">View you last 10 transactions</h1>
            <table className="table border-2 border-dashed border-gray-300 mt-4">
                <th className="border-2 border-dashed p-2" style={{
                    color: "#D89216"
                }}>S.no</th>
                <th className="border-2 border-dashed p-2" style={{
                    color: "#D89216"
                }}>Transaction Id</th>
                <th className="border-2 border-dashed p-2" style={{
                    color: "#D89216"
                }}>Transaction Type</th>
                <th className="border-2 border-dashed p-2" style={{
                    color: "#D89216"
                }}>Amount</th>
                <th className="border-2 border-dashed p-2" style={{
                    color: "#D89216"
                }}>Date</th>
                <th className="border-2 border-dashed p-2" style={{
                    color: "#D89216"
                }}>Time</th>
                <tr>
                    <td className="border-2 border-dashed text-white p-2 text-white">1</td>
                    <td className="border-2 border-dashed text-white p-2 text-white">12121</td>
                    <td className="border-2 border-dashed text-white p-2 text-white">Deposit</td>
                    <td className="border-2 border-dashed text-white p-2 text-white">2000</td>
                    <td className="border-2 border-dashed text-white p-2 text-white">12/12/23</td>
                    <td className="border-2 border-dashed text-white p-2 text-white">12:45</td>
                </tr>
            </table>
        </div>
      </div>
    </div>
  );
}

export default ViewTransaction;
