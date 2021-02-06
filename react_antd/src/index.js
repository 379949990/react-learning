import React from 'react';
import ReactDOM from 'react-dom';

import 'moment/locale/zh-cn';
import 'antd/dist/antd.less';

import App from './comment/App';

ReactDOM.render(
  // <React.StrictMode>
    <App />,
  // </React.StrictMode>,
  document.getElementById('root')
);
