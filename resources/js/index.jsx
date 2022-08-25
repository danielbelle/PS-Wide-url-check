import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';


if (document.getElementById('interwebsApp')) {
    ReactDOM.render(<App />, document.getElementById('interwebsApp'));
}
