import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bg from "../assets/bg.jpg";
import Navbar from "./Navbar";

export default function Deposit({ accno, handlebalance , Balance}) {

  const [amount, setAmount] = useState(0);
  const navigate = useNavigate();
  const link = "http://localhost:8001/api/deposit"

  const handleDeposit = (event) => {
    if (amount <= 0) {
      alert("Please enter a valid amount");
      return;
    }
    if (amount > 100000) {
      alert("You can't deposit more than 100000 at a time");
      return;
    }
    if (amount%10 != 0) {
      alert("Enter a round figure value")
      return;
    }
    handlebalance(Balance + amount)
    event.preventDefault();
    fetch(`${link}/${accno}`, {
      method: 'POST',
      body: JSON.stringify({ amount }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.error) {
          console.log('Deposit error:', data.error);
        } else {
          alert('Deposit completed successfully');
          navigate('/');
        }
      })
      .catch((error) => {
        console.error('Error fetching PIN:', error);
      });
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
          <h1 className="text-4xl text-white mb-3 font-bold">
            Welcome to Deposit screen
          </h1>
          <h2
            className="text-2xl mb-3"
            style={{
              color: "#D89216",
            }}
          >
            Enter the amount
          </h2>
          <input
            type="number"
            placeholder="Enter the amount to be deposited"
            className="p-2 rounded-md mb-4"
            value={amount}
            onChange={(event) => {
              setAmount(event.target.value);
            }}
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4s"
            onClick={handleDeposit}
          >Submit</button>
        </div>
      </div>
    </div>
  );
}

