import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


// There are two method to add element in react 


// 1st one

const AnotherElement=(
    <a href='https://google.com' target='_blank'>click to visit google</a>
)

// 2nd one
const ReactElement = React.createElement(
    'a',
    {
        href:'https://google.com',
        target : 'blank'
    },
    'click to open google'
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    {ReactElement}
    {AnotherElement}
    </>
);

