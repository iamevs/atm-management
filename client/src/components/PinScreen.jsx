import React, { useState } from 'react';
import bg from '../assets/bg.jpg';
import Navbar from './Navbar';

const PinScreen = ({ handlePinEntered }) => {
    const [pin, setPin] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        handlePinEntered(pin);
    };

    return (
        
        <div className="flex flex-col items-center justify-center h-screen" style={{ background: '#1a1a1a' }}>
            <div className="flex flex-col items-center justify-center h-screen">
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
                        <h2 className="text-2xl font-bold mb-4 text-white">Enter PIN</h2>
                        <form onSubmit={handleSubmit} className="w-64 flex flex-col items-center">
                            <input
                                type="password"
                                value={pin}
                                className="border border-gray-300 rounded px-3 py-2 w-full mb-4 text-center password"
                                placeholder='Enter your PIN'
                                onChange={(e) => setPin(e.target.value)}
                            />
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PinScreen;
