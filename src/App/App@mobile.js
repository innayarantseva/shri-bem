// import React, { Component } from 'react';
// import { cn } from '@bem-react/classname';
// import { Registry, withRegistry } from '@bem-react/di';
// import Header from './Header';
// import Main from './Main';
// // import logo from './logo.svg';
// // import './App.css';

// const cnApp = cn('App');
// const cnHeader = cn('Header');

// const registry = new Registry({ id: cnHeader() });

// registry.set(cnHeader(), Header);

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//           <Header />
//           <Main />
//       </div>
//     );
//   }
// }

// export default App;



import { Registry, withRegistry } from '@bem-react/di';
import { cn } from '@bem-react/classname';
import { App as AppCommon } from './App';
import Header from '../Header/Header@mobile';
import Main from '../Main';

const cnApp    = cn('App');
const cnHeader = cn('Header');
const cnMain   = cn('Main');

// registry with mobile versions of components
const registry = new Registry({ id: cnApp() });

registry.set( cnHeader(), Header );
registry.set( cnMain(),   Main   );

export const App = withRegistry(registry)(AppCommon);