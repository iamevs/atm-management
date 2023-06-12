import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import bg from "../assets/bg.jpg";
import Navbar from "./Navbar";

export default function ViewTransaction({ accno }) {
  const [transactions, setTransactions] = useState([]);
  const navigate = useNavigate();
  const link = "http://localhost:8001/api/transaction"

  useEffect(() => {
    fetch(`${link}/${accno}`)
      .then((response) => response.json())
      .then((data) => {
        setTransactions(data);
      })
      .catch((error) => {
        console.error("Error fetching transactions:", error);
      });
  }, [accno]);

  setTimeout(() => {
    navigate('/');
  }, 5000);

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
          <h1 className="text-4xl text-white mb-4">Welcome to Transaction Screen </h1>
          <h2 className="text-2xl mb-5" style={{ color: "#D89216" }}>
           View your last 8 Transactions
          </h2>
          <table className="text-white mt-2">
            <thead>
              <tr>
                <th className="border-2 border-gray-200 border-dotted rounded-md p-2 m-2">
                  Transaction Type
                </th>
                <th className="border-2 border-gray-200 border-dotted rounded-md p-2 m-2">
                  Amount
                </th>
                <th className="border-2 border-gray-200 border-dotted rounded-md p-2 m-2">
                  Date
                </th>
                <th className="border-2 border-gray-200 border-dotted rounded-md p-2 m-2">
                  Time
                </th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.transid}>
                  <td className="border-2 border-gray-200 border-dotted rounded-md p-2 m-2">
                    {transaction.transtype}
                  </td>
                  <td className="border-2 border-gray-200 border-dotted rounded-md p-2 m-2">
                    {transaction.amt}
                  </td>
                  <td className="border-2 border-gray-200 border-dotted rounded-md p-2 m-2">
                    {transaction.date}
                  </td>
                  <td className="border-2 border-gray-200 border-dotted rounded-md p-2 m-2">
                    {transaction.time}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
 