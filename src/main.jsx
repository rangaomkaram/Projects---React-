import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import React from 'react';

//  createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

// here below code instead jsx code we used createElement function using react , which has props to accept tags as objects, child content 
createRoot(document.getElementById('root')).render(React.createElement(App))