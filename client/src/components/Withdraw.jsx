import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import bg from "../assets/bg.jpg";

function Withdraw({ accno, balance }) {
  const [amount, setAmount] = useState(0);
  const navigate = useNavigate();
  const [count, setCount] = useState(0);

  // const handleWithdraw = (event) => {
  //   event.preventDefault();
  //   fetch(`http://localhost:8001/withdraw/${accno}`, {
  //     method: 'POST',
  //     body: JSON.stringify({ amount }),
  //     headers: { 'Content-Type': 'application/json' }
  //   })
  //     .then((res) => {
  //       console.log("request arived")
  //       if (res.status === 400) {
  //         throw new Error('Bad Request');
  //       }
  //       return res.json();
  //     })
  //     .then((data) => {
  //       console.log('Response data:', data);
  //       if (data.error) {
  //         console.log('Withdrawal error:', data.error);
  //       } else {
  //         console.log('Withdrawal completed successfully');
  //         navigate('/');
  //       }
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching PIN:', error);
  //     });
  // };
  
  const handleWithdraw = (event) => {
    event.preventDefault();
    fetch(`http://localhost:8001/withdraw/${accno}`, {
      method: 'POST',
      body: JSON.stringify({ amount }),
      headers: { 'Content-Type': 'application/json' }
    })
    .then((res) => {
      console.log('Withdrawal amount:', amount);
      console.log('Request arrived');
      console.log('Response status:', res.status);
      return res.json();
    })
    .then((data) => {
      console.log('Response data:', data);
      if (data.error) {
        console.log('Withdrawal error:', data.error);
      } else {
        console.log('Withdrawal completed successfully');
        navigate('/');
      }
    })
    .catch((error) => {
      console.error('Error fetching PIN:', error);
    });
};

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
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
          <h1 className="text-4xl text-white mb-3 font-bold ">
            Welcome to Withdrawal Screen
          </h1>
          <h2 className="text-2xl mb-5" style={{ color: "#D89216" }}>
            Enter the Amount
          </h2>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 mb-4"
            placeholder="Enter the amount"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            onClick={handleWithdraw}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Withdraw;
