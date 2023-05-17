import React, { useState } from 'react';
import InsertCardPage from './components/InsertCardPage.jsx';
import PinScreen from './components/PinScreen.jsx';

const App = () => {
    const [accno, setAccno] = useState(0);
    const [pin, setPin] = useState(0);
    const pass = "1234"

    const handleAccountNumber = (accountNumber) => {
        setAccno(accountNumber);
    };
    const handlePinEntered = (pin) => {
        setPin(pin);
        console.log(pin);
        console.log(typeof pin)
        console.log(pass)
        console.log(typeof pass)
    };

    const auth = () => {
        if (pin === pass) {
            return true
        } else {
            return false
        }
    }


    return (
        <div className="flex flex-col items-center justify-center h-screen" style={{ background: '#1a1a1a' }}>
            {accno === 0 ? (
                <InsertCardPage handleAccountNumber={handleAccountNumber} />
            ) : (
                pin === 0 ? (
                    <PinScreen handlePinEntered={handlePinEntered} />
                ) : (
                    auth() ? (
                        <div className="flex flex-col items-center justify-center h-screen">
                            <h1 className="text-2xl font-bold mb-4 text-white">Welcome</h1>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center h-screen">
                            <h1 className="text-2xl font-bold mb-4 text-white">Wrong Pin</h1>
                        </div>
                    )
                )
            )}

        </div>
    );
};

export default App;
