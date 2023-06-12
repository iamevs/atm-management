import React, { useEffect, useState } from 'react';
import InsertCardPage from './components/InsertCardPage.jsx';
import PinScreen from './components/PinScreen.jsx';
import Options from './components/Options.jsx';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

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

    const handlePinEntered = (enteredPin) => {
        setPin(enteredPin);
    };

    const auth = () => {
        return pin === pass;
    };

    const handleWrongPin = () => {
        alert("Wrong Pin");
        setPin(0);
    };

    const searchaccno = (accno) => {
        fetch(`http://localhost:8001/selectuser/${accno}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.length > 0) {
                    for (let i = 0; i < data.length; i++) {
                        if (data[i].accno === accno) {
                            return true;
                        }
                    }
                    return false;
                }
            })
    };

    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        accno === 0 && searchaccno(accno) ? (
                            <InsertCardPage handleAccountNumber={handleAccountNumber} />
                        ) : (
                            <Navigate to="/pin" replace />
                        )
                    }
                />

                <Route
                    path="/pin"
                    element={
                        <PinScreen
                            handlePinEntered={handlePinEntered}
                        />
                    }
                />
                <Route
                    path="/options"
                    element={<Options />}
                />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    );

};

export default App;
