import React from "react";
import ReactDOM from 'react-dom';

import App from './js/App';

const appElement = document.getElementById('app');
if (!appElement) throw new Error('#app could not be found');
ReactDOM.render(<App />, appElement);
