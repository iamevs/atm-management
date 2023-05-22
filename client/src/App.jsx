import React, { useEffect, useState } from 'react';
import InsertCardPage from './components/InsertCardPage.jsx';
import PinScreen from './components/PinScreen.jsx';

const App = () => {
    const [accno, setAccno] = useState(0);
    const [pin, setPin] = useState(0);
    const [pass, setPass] = useState(0);

    useEffect(() => {
        if (accno !== 0) {
            fetch(`http://localhost:8001/selectuser/${accno}`)
                .then((res) => res.json())
                .then((data) => {
                    if (data.length > 0) {
                        setPass(data[0].pin);
                        console.log(data[0].pin);
                    } else {
                        setPass('');
                        alert("Account not found");
                        setAccno(0);
                    }
                })
                .catch((error) => {
                    console.error('Error fetching PIN:', error);
                });
        }
    }, [accno]);


    const handleAccountNumber = (accountNumber) => {
        setAccno(accountNumber);
    };
    const handlePinEntered = (pin) => {
        setPin(pin);
    };

    const auth = () => {
        if (pin === pass) {
            return true
        } else {
            return false
        }
    }

    const handleWrongPin = () => {
        alert("Wrong Pin");
        setAccno(0);
        setPin(0);
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
                        handleWrongPin()
                    )
                )
            )}

        </div>
    );
};

export default App;
