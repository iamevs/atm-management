import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import bg from "../assets/bg.jpg";
import Navbar from "./Navbar";

export default function Balance({ accno }) {
  const [balance, setbalance] = useState(0);
  const navigate = useNavigate();
  const link = "http://localhost:8001/api/selectuser"

  useEffect(() => {
    fetch(`${link}/${accno}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          setbalance(data[0].balance);
          console.log(data[0].balance);
        } else {
          alert("Account not found");
        }
      })
      .catch((error) => {
        console.error("Error fetching PIN:", error);
      });
  }, [accno]);

  setTimeout(() => {
    navigate("/"); 
  }, 2000);

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
          <h1 className="text-3xl text-white mb-3">View your balance </h1>  
          <h1 className="text-2xl text-white mb-3" style={{ color: "#D89216" }}> Your balance : {balance}</h1>
        </div>
      </div>
    </div>
  );
}
