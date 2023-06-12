import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import bg from "../assets/bg.jpg";
import Navbar from "./Navbar";

const Options = ({ accno }) => {
  const [nameCard, setNameCard] = useState("");
  const navigate = useNavigate();
  const link = "http://localhost:8001/api/selectuser";

  useEffect(() => {
    fetch(`${link}/${accno}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          setNameCard(data[0].name_card);
        } else {
          alert("Account not found");
        }
      })
      .catch((error) => {
        console.error("Error fetching PIN:", error);
      });
  }, [accno]);

  const handleWithdrawal = () => {
    navigate("/withdraw");
  };

  const handleDeposit = () => {
    navigate("/deposit");
  };

  const handleBalance = () => {
    alert("you will be redirected back in 2 sec");
    navigate("/balance");
  };

  const handleViewTransaction = () => {
    alert("you will be redirected back in 5 sec");
    navigate("/viewtransaction");
  };

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
          <h1 className="text-4xl text-white mb-3">Welcome, {nameCard}</h1>
          <h2 className="text-2xl mb-5" style={{ color: "#D89216" }}>
            Select a transaction
          </h2>
          <div className="grid grid-cols-2 gap-5">
            <button
              className="text-white font-bold py-2 px-4 rounded options"
              onClick={handleWithdrawal}
            >
              Withdraw
            </button>
            <button
              className="text-white font-bold py-2 px-4 rounded options"
              onClick={handleDeposit}
            >
              Deposit
            </button>
            <button
              className="text-white font-bold py-2 px-4 rounded options"
              onClick={handleBalance}
            >
              Balance
            </button>
            <button
              className="text-white font-bold py-2 px-4 rounded options"
              onClick={handleViewTransaction}
            >
              View Transaction
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Options;
