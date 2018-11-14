import React    from 'react';
import ReactDOM from 'react-dom';

import { App as AppMobile  } from './App/App@mobile';
import { App as AppDesktop } from './App/App@desktop';
import MobileDetect          from 'mobile-detect';

import './index.css';


const md   = new MobileDetect( window.navigator.userAgent ),
      type = md.phone() ? 'mobile' : 'desktop';

ReactDOM.render(
    type === 'desktop' ? <AppDesktop /> : <AppMobile />,
    document.getElementById('root')
);

// ReactDOM.render(<App />, document.getElementById('root'));
