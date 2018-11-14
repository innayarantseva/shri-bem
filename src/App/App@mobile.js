import { Registry, withRegistry } from '@bem-react/di';
import { cn }                     from '@bem-react/classname';
import { App as AppCommon }       from './App';
import Header                     from '../Header/Header@mobile';
import Main                       from '../Main';

const cnApp    = cn('App');
const cnHeader = cn('Header');
const cnMain   = cn('Main');

// registry with mobile versions of components
const registry = new Registry({ id: cnApp() });

registry.set( cnHeader(), Header );
registry.set( cnMain(),   Main   );

export const App = withRegistry(registry)(AppCommon);