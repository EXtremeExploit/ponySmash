import React, { useEffect, useMemo } from 'react';
import { EventStarWarsData, StateSet } from '../types';

export function StarWars(props: {
    dataSet: StateSet<EventStarWarsData>
}) {
    const imgList = [
        'fluttershy',
        'starlight'
    ];

    const img = useMemo(() => imgList[Math.floor(Math.random() * imgList.length)], []);

    useEffect(() => {
        props.dataSet({ imgName: img });
    }, [img]);

    return (<>
        <img className='starWars' src={`./images/starWars/${img}.webp`}></img>
    </>);
}
