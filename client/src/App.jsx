import React, { useEffect, useState } from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Balance from './components/Balance.jsx';
import Deposit from './components/Deposit.jsx';
import InsertCardPage from './components/InsertCardPage.jsx';
import Options from './components/Options.jsx';
import PinScreen from './components/PinScreen.jsx';
import ViewTransaction from './components/ViewTransaction.jsx';
import Withdraw from './components/Withdraw.jsx';


const App = () => {
    const [accno, setAccno] = useState(0);
    const [pin, setPin] = useState(''); // entered in UI
    const [pass, setPass] = useState(''); // fetched from DB
    const [validacc, setValidAcc] = useState(false);
    const [validation, setValidation] = useState(false);
    const [balance, setBalance] = useState(0);
    const link = "http://localhost:8001/api/selectuser"

    useEffect(() => {
        if (accno) {
            fetch(`${link}/${accno}`)
                .then((res) => res.json())
                .then((data) => {
                    if (data.length > 0) {
                        setPass(data[0].pin);
                        console.log("pin : ", data[0].pin);
                        setBalance(data[0].balance);
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
        } else {
            window.alert('Invalid PIN. Please try again.');
        }
    };

    const handlebalance = (bal) => {
        setBalance(bal);
    }
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
                <Route
                    path="/withdraw"
                    element={<Withdraw accno={accno} balance={balance} />}
                />
                <Route
                    path="/deposit"
                    element={<Deposit accno={accno} handlebalance={handlebalance} balance={balance}/>}
                />
                <Route
                    path="/balance"
                    element={<Balance accno={accno} />}
                />
                <Route
                    path="/viewtransaction"
                    element={<ViewTransaction accno={accno} />}
                />
            </Routes>
        </Router>
    );
};

export default App;
