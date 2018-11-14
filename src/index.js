import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App as AppMobile} from './App/App@mobile';
import {App as AppDesktop} from './App/App@desktop';
// import * as serviceWorker from './serviceWorker';

import MobileDetect from 'mobile-detect';

const md = new MobileDetect( window.navigator.userAgent ),
      type = md.phone() ? 'mobile' : 'desktop';
// console.log( md.phone() );

// const ua = new DeviceDetector().parse(navigator.userAgent) || {};
// const device = ua.device || { type: 'desktop' };

ReactDOM.render(
 type === 'desktop' ? <AppDesktop /> : <AppMobile />,
 document.getElementById('root')
);

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
