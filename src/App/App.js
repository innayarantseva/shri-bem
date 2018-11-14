import * as React                from 'react';
import      { cn }               from '@bem-react/classname';
import      { RegistryConsumer } from '@bem-react/di';

const cnApp    = cn('App');
const cnHeader = cn('Header');
const cnMain   = cn('Main');

export const App = () => (
    <RegistryConsumer>
        {
            registries => {
                const registry = registries[ cnApp() ];

                const Header = registry.get( cnHeader() );
                const Main   = registry.get( cnMain()   );

                return <div className="App">
                          <Header />
                          <Main />
                      </div>;
            }
        }
    </RegistryConsumer>
);