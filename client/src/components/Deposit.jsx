import React from "react";
import Navbar from "./Navbar";
import bg from "../assets/bg.jpg";

function Deposit({ accno }) {
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
           className="p-2 rounded-md mb-4"  />
          <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4s"
          >Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Deposit;
