import App from '/components/App.jsx';
import { React, ReactDOM } from 'https://unpkg.com/es-react/dev';

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(App),
    document.querySelector('#react-app')
  );
});