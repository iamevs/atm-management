import React, { useEffect, useState } from 'react';
import bg from '../assets/bg.jpg';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

const Options = ({ accno }) => {
    const [nameCard, setNameCard] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:8001/selectuser/${accno}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.length > 0) {
                    setNameCard(data[0].name_card);
                } else {
                    alert('Account not found');
                }
            })
            .catch((error) => {
                console.error('Error fetching PIN:', error);
            });
    }, [accno]);

    const handleWithdrawal = () => {
        navigate('/withdraw');
    };

    const handleDeposit = () => {
        navigate('/deposit');
    };

    const handleBalance = () => {
        navigate('/balance');
    };

    const handleViewTransaction = () => {
        navigate('/viewtransaction');
    };


    return (
        <div className="flex flex-col items-center justify-center h-screen" style={{ background: '#1a1a1a' }}>
            <Navbar />
            <div
                className="flex flex-col items-center justify-center"
                style={{
                    background: `url(${bg})`,
                    width: '80vw',
                    height: '80vh',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    borderRadius: '0 0 10px 10px',
                }}
            >
                <div>
                    <h1 className="text-4xl text-white">Welcome, {nameCard}</h1>
                    <div className="grid grid-cols-2 gap-4">
                        <button className="text-white font-bold py-2 px-4 rounded options" onClick={handleWithdrawal}>Withdraw</button>
                        <button className="text-white font-bold py-2 px-4 rounded options" onClick={handleDeposit}>Deposit</button>
                        <button className="text-white font-bold py-2 px-4 rounded options" onClick={handleBalance}>Balance</button>
                        <button className="text-white font-bold py-2 px-4 rounded options" onClick={handleViewTransaction}>View Transaction</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Options;
