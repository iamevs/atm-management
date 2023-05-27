import React from "react";

export default function Navbar() {

    const backtohome = (e) => {
        e.preventDefault();
        window.location.href = "/";
    };
  return (
    <div>
      <nav
        className="bg-black p-3 items-center"
        style={{
          width: "80vw",
          height: "8vh",
          borderRadius: "10px 10px 0 0",
          color: "#D89216",
        }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center">
            <a className="text-2xl font-bold" href="/">
              KCT Bankers
            </a>
          </div>
          <div className="flex items-center">
            <button
              className="text-lg font-bold mr-4 p-2"
              style={{
                color: "#D89216",
                border: "2px solid #D89216",
                borderRadius: "25px",
              }}
              onClick={backtohome}
            >
              Cancel
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
