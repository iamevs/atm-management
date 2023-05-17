import React from 'react'
import App from './App.jsx'

import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'

// components
import Screen1 from './components/Screen1.jsx';
import Screen2 from './components/Screen2.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Screen1/>,
  },
  {
    path: "s2",
    element: <Screen2/>,
  }
]);

const handleAccountNumber = (accountNumber) => {
  console.log('Account number:', accountNumber);
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
