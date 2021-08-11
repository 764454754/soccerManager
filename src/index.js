// const show = require('./utils/say');
import { show, say } from './utils/say';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/index';

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
// show();
say();
