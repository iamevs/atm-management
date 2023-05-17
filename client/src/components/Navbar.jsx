import React from 'react'

function Navbar() {
  return (
    <div>
        <nav className="bg-black p-3 items-center" style={{
            width: "80vw",
            height: "8vh",
            borderRadius: "10px 10px 0 0",
            color: "#D89216",
        }}>
            <div className="flex items-center justify-between">
                <div className="flex items-center justify-center">
                    <h1 className="text-2xl font-bold">KCT Bankers</h1>
                </div>
                <div className="flex items-center">
                    <a href="#" className="text-lg font-bold mr-4 p-2" style={{
                        color: "#D89216",
                        border: "2px solid #D89216",
                        borderRadius: "25px",
                    }}>Cancel</a>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
