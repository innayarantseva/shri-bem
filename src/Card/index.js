import React from 'react';
import { cn } from '@bem-react/classname';
import { withBemMod } from '@bem-react/core';
import './index.css';

const cnCard = cn('Card');

function RenderCard({title, type, source, icon, size, time, description, data}) {

    const getDataType = ( data ) => {
        if ( data.type === 'graph' ) {
            return <img src={require('./assets/Richdata.svg')} alt='graph'/>;
        }

        if ( data.image ) {
            return <img src={require(`${data.image}`)} alt=''/>;
        }

        if ( data.buttons ) {
            return <div className="card__buttons">
                {
                    data.buttons.map(
                        (button, index) =>
                            button === 'Да'
                                ? <div key={`button-${index}`} className="card__button card__button-bright">{ button }</div>
                                : <div key={`button-${index}`} className="card__button card__button-grey"  >{ button }</div>
                    )
                }
            </div>
        }

        return null;
        // if (
        //     data.events[i].data.albumcover &&
        //     data.events[i].data.artist     &&
        //     data.events[i].data.track      &&
        //     data.events[i].data.volume
        // )
        // if ( data.events[i].data.temperature && data.events[i].data.humidity ) {

    }

    return (
        <div className={cnCard({ size, type })}>
            <div className={cnCard('Header')}>
                <div className={cnCard('EventTitle')}>
                    <div className={cnCard('Icon')}>
                        <img src={require(`./assets/${icon}.svg`)} alt={icon}/>
                    </div>
                    <div className={cnCard('Title')}>{ title }</div>
                </div>

                <div className={cnCard('EventInfo')}>
                    <div className={cnCard('Source')}>{ source }</div>
                    <div className={cnCard('Time')}>{ time }</div>
                </div>
            </div>
            <div className={cnCard('Content')}>
                <div className={cnCard('Description')}>{ description }</div>
                <div className={cnCard('Data')}>
                    { data && getDataType(data) }
                </div>
            </div>
            <div className="card__close">
                <img src={require('./assets/cross.svg')} alt='close'/>
            </div>
            <div className="card__action">
                <img src={require('./assets/Next.svg')} alt='action'/>
            </div>
        </div>
    )
}

export const Card = withBemMod(cnCard(), { isFull: true })(RenderCard)
