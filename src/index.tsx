import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './App';
import './index.html';
import './main.css';

const data = [
    {},
    { format: 'YYYY-MM-DD HH:mm:ss'},
    { format: '[JPN: ]MMM DD (ddd) HH:mm:ss', tz: "9" },
    { format: '[HWI: ]MMM DD (ddd) HH:mm:ss', tz: "-10" }
];

ReactDOM.render(
    <App data={data} />,
    document.getElementById("app")
);