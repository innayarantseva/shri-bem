import React from 'react';
import { cn } from '@bem-react/classname';
import logo from './logo.svg';
import './index.css';

const cnHeader  = cn('Header'),
      menuItems = [
        'События',
        'Сводка',
        'Устройства',
        'Сценарии',
        'Камеры'
      ];

export default class Header extends React.Component {

    state = {}

    renderMain = () => {
        return <header className={cnHeader()}>
            <img src={logo} className={cnHeader('Logo')} alt='logo'/>
            <menu className={cnHeader('Menu')}>
                {
                    menuItems.map(
                        (item, index) =>
                            <div key={`item-${index}`} className={cnHeader('MenuItem')}>{item}</div>
                    )
                }
            </menu>
        </header>
    }

    render = () => this.renderMain( this.state )

}