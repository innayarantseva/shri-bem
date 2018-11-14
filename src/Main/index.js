import React from 'react';
import Feed from '../Feed';
import { cn } from '@bem-react/classname';
import './index.css';

const cnMain = cn('Main'),
      data   = require('../events.json');

console.log( data );

export default class Main extends React.Component {

    state = {}

    renderMain = () => {
        return <section className={cnMain()}>
            <h1 className={cnMain('Title')}>Лента событий</h1>
            <Feed />
        </section>
    }

    render = () => this.renderMain(this.state)
}