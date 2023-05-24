import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Withdraw({ accno, balance }) {
  const [amount, setAmount] = useState(0);
  const navigate = useNavigate();
  const[count,setCount]=useState(0);

  const handleWithdraw = (event) => {
    event.preventDefault();
    fetch(`http://localhost:8001/withdraw/${accno}`, {method: 'POST',body: JSON.stringify({ amount }), headers: {'Content-type' : 'application/json; charset=UTF-8'}})
      .then((res) => { 
        console.log('Response received');
        res.json()
      })
      .then((data) => {
        console.log('Response data:', data);
        if (data.error) {
          console.log(data.error);
        } else {
          console.log("Withdrawal completed successfully");
          navigate('/');
        }
      })
      .catch((error) => {
        console.error('Error fetching PIN:', error);
      });
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  return (
    <div>
      <h1 className="text-4xl text-black">Withdraw {accno}</h1>
      <h1 className="text-4xl text-black">Balance: {balance}</h1>
      <input
        type="number"
        placeholder="Enter amount to withdraw"
        name="amount"
        id="amount"
        value={amount}
        onChange={handleAmountChange}
      />
      <button className="text-white font-bold py-2 px-4 rounded options" onClick={handleWithdraw}>
        Withdraw
      </button>
    </div>
  );
}

export default Withdraw;
