import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

const title = 'Satisfier';

ReactDOM.render(
  <App title={title} />,
  document.getElementById('app')
);

module.hot.accept();
