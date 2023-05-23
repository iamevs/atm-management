import React, { useEffect, useState } from 'react';
import InsertCardPage from './components/InsertCardPage.jsx';
import PinScreen from './components/PinScreen.jsx';
import Options from './components/Options.jsx';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

const App = () => {
    const [accno, setAccno] = useState(0);
    const [pin, setPin] = useState(''); // entered in UI
    const [pass, setPass] = useState(''); // fetched from DB
    const [validacc, setValidAcc] = useState(false);
    const [validation, setValidation] = useState(false);

    useEffect(() => {
        if (accno) {
            fetch(`http://localhost:8001/selectuser/${accno}`)
                .then((res) => res.json())
                .then((data) => {
                    if (data.length > 0) {
                        setPass(data[0].pin);
                        setValidAcc(true);
                    } else {
                        setPass('');
                        setValidAcc(false);
                        setAccno(0);
                        window.alert('Invalid account number. Please try again.');
                        window.location.href = '/';
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
        if (enteredPin === pass) {
            setValidation(true);
            console.log(validation);
        } else {
            window.alert('Invalid PIN. Please try again.');
        }
    };

    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        validacc ? (
                            <Navigate to="/pin" replace />
                        ) : (
                            <div>
                                <InsertCardPage handleAccountNumber={handleAccountNumber} />
                            </div>
                        )
                    }
                />
                <Route
                    path="/pin"
                    element={
                        validation ? (
                            <Navigate to="/options" replace />
                        ) : (
                            <PinScreen handlePinEntered={handlePinEntered} />)
                    } />
                <Route
                    path="/options"
                    element={<Options accno={accno} />}
                />
            </Routes>
        </Router>
    );
};

export default App;
