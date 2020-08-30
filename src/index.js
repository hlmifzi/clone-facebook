import React from 'react';
import ReactDOM from 'react-dom';
import PatchedReactDOM from '@hot-loader/react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './index.css';

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

if (process.env.REACT_DOM === 'patched') {
  PatchedReactDOM.render(<App />, document.getElementById('root'));
} else {
  ReactDOM.render(<App />, document.getElementById('root'));
}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
