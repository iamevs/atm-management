import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import bg from "../assets/bg.jpg";

function Withdraw({ accno }) {
  const [amount, setAmount] = useState(0);
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    fetch(`http://localhost:8001/selectuser/${accno}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          setBalance(data[0].balance);
          console.log(data[0].balance);
        } else {
          console.log("Account not found");
        }
      })
      .catch((error) => {
        console.error("Error fetching PIN:", error);
      });
  }, [accno]);


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

  // const handleWithdraw = (event) => {
  //   if (amount <= 0) {
  //     alert("Please enter a valid amount");
  //     return;
  //   }
  //   if (amount > balance) {
  //     alert("You don't have enough balance to withdraw this amount");
  //     return;
  //   }
  //   if (amount > 100000) {
  //     alert("You can't withdraw more than 100000 at a time");
  //     return;
  //   }
  //   event.preventDefault();
  //   fetch(`http://localhost:8001/withdraw/${accno}`, {
  //     method: 'POST',
  //     body: JSON.stringify({ amount }),
  //     headers: { 'Content-Type': 'application/json' }
  //   })
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       if (data.error) {
  //         console.log('Withdrawal error:', data.error);
  //       } else {
  //         console.log('Withdrawal completed successfully');
  //         alert('Withdrawal completed successfully');
  //         window.location.replace('/');
  //       }
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching PIN:', error);
  //     });
  //   // alert("Withdrawal completed successfully")
  //   // navigate('/', { replace: true });
  // };

  const handlewithdrawvalidate = (event) => {
    event.preventDefault();

    const bal = Number(balance);
    const amt = Number(amount);

    console.log(bal);
    console.log(amt);
    if (amt <= 0) {
      alert("Please enter a valid amount");
      return;
    }

    if (amt > bal) {
      alert("Insufficient balance. Please enter a smaller amount");
      return;
    }

    if (amt > 100000) {
      alert("You can't withdraw more than 100000 at a time");
      return;
    }

    if (amt % 1 !== 0) {
      alert("Please enter a valid amount (no decimals)");
      return;
    }


    handleWithdraw(event);
  };



  const handleWithdraw = (event) => {
    event.preventDefault();
    const amt = Number(amount);

    fetch(`http://localhost:8001/withdraw/${accno}`, {
      method: 'POST',
      body: JSON.stringify({ amt }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          console.log('Withdrawal error:', data.error);
          alert('Withdrawal failed: ' + data.error);
        } else {
          console.log('Withdrawal completed successfully');
        }
      })
      .catch((error) => {
        console.error('Error fetching PIN:', error);
      });
    alert('Withdrawal completed successfully');
    navigate('/');
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
            onClick={handlewithdrawvalidate}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Withdraw;
