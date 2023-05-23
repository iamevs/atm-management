import React, { useEffect, useState } from 'react';
import bg from '../assets/bg.jpg';
import Navbar from './Navbar';

const Options = ({ accno }) => {
    const [nameCard, setNameCard] = useState('');

    useEffect(() => {
        fetch(`http://localhost:8001/selectuser/${accno}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.length > 0) {
                    setNameCard(data[0].name_card);
                } else {
                    alert("Account not found");
                }
            })
            .catch((error) => {
                console.error('Error fetching PIN:', error);
            });
    }, [accno]);

    console.log(accno);

    return (
        <div className="flex flex-col items-center justify-center h-screen" style={{ background: '#1a1a1a' }}>
            <Navbar />
            <div className="flex flex-col items-center justify-center" style={{
                background: `url(${bg})`,
                width: "80vw",
                height: "80vh",
                backgroundPosition: "center",
                backgroundSize: "cover",
                borderRadius: "0 0 10px 10px",
            }}>
                <div>
                    <h1 className="text-4xl text-white">Welcome, {nameCard}</h1>
                    <div className="grid grid-cols-2 gap-4">
                        <button className="text-white font-bold py-2 px-4 rounded options">Withdraw</button>
                        <button className="text-white font-bold py-2 px-4 rounded options">Deposit</button>
                        <button className="text-white font-bold py-2 px-4 rounded options">Balance</button>
                        <button className="text-white font-bold py-2 px-4 rounded options">View Transaction</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Options;
