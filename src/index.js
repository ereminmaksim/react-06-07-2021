import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Message from "./components/Message";


ReactDOM.render(
    <React.StrictMode>
        <App/>
        <Message/>
    </React.StrictMode>,
    document.getElementById('root')
);

