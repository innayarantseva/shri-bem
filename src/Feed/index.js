import React from 'react';
import { Card } from '../Card';
import { cn } from '@bem-react/classname';
import './index.css';

const cnFeed = cn('Feed'),
      data   = require('../events.json');

console.log( data );

export default class Feed extends React.Component {

    state = {}

    renderFeed = () => {
        return <section className={cnFeed()}>
            {
                data.events.map(
                    (card, index) =>
                        <Card key={`card-${index}`} {...card} />
                )
            }
        </section>
    }

    render = () => this.renderFeed( this.state )
}