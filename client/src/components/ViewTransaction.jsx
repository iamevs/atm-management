import React , { useState, useEffect}from "react";
import Navbar from "./Navbar";
import bg from "../assets/bg.jpg";


function ViewTransaction({ accno }) {

  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8001/transaction/${accno}`)
      .then((response) => response.json())
      .then((data) => {
        setTransactions(data);
      })
      .catch((error) => {
        console.error('Error fetching transactions:', error);
      });
  }, [accno]);

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
            <table className="text-white">
            <thead>
              <tr>
                <th>Transaction Type</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.transid}>
                  <td>{transaction.transtype}</td>
                  <td>{transaction.amt}</td>
                  <td>{transaction.date}</td>
                  <td>{transaction.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ViewTransaction;
