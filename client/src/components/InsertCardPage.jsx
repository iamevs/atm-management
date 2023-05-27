import React, { useState } from 'react';
import bg from '../assets/bg.jpg';
import Navbar from './Navbar';

const InsertCardPage = ({ handleAccountNumber }) => {
    const [accountNumber, setAccountNumber] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        handleAccountNumber(accountNumber);
    };

    return (
        
        <div className="flex flex-col items-center justify-center h-screen" style={{ background: '#1a1a1a' }}>
            <Navbar style={{
                position: "realative",
                top: "0",
            }} />
            <div className="flex flex-col items-center justify-center" style={{
                background: `url(${bg})`,
                width: "80vw",
                height: "80vh",
                backgroundPosition: "center",
                backgroundSize: "cover",
                borderRadius: "0 0 10px 10px",
            }}>
                <div 
                style={{
                    borderRadius: "15px",
                    boxShadow: "0px 0px 20px 3px rgb(136 136 136 / 29%)",
                    border: "2px dotted #D89216",
                }}
                className='p-10 flex flex-col items-center justify-center'
                >
                    <h2 className="text-4xl font-bold mb-12 text-white">Wecome to KCT Bankers</h2>
                    <h2 className="text-2xl font-bold mb-4" 
                    style={{
                        color: "#D89216",
                    }}>Enter Account Number</h2>    
                    <form onSubmit={handleSubmit} className="w-64 flex flex-col">
                        <input
                            type="number"
                            id="accountNumber"
                            value={accountNumber}
                            onChange={(e) => setAccountNumber(e.target.value)}
                            className="border border-gray-300 rounded px-3 py-2 w-full mb-4"
                            placeholder='Enter your Account Number'
                        />
                        <button
                            type="submit"
                            className=" text-white font-bold py-2 px-4 items-center justify-center rounded-full"
                            style={{
                                color: "#D89216",
                                border: "2px solid #D89216",
                            }}
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default InsertCardPage;
