import React, { useState } from 'react';
import InsertCardPage from './components/InsertCardPage.jsx';

const App = () => {

    const [accno, setAccno] = useState(0);

    const handleAccountNumber = (accountNumber) => {
        setAccno(accountNumber);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen" style={{
            background: "#1a1a1a"
        }}>
            {accno === 0 ? (
                <InsertCardPage handleAccountNumber={handleAccountNumber} />
            ) : (
                <div>
                    <h2>Account Number: {accno}</h2>
                </div>
            )}
        </div>
    );
};

export default App;
