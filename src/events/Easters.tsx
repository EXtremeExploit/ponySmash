import React, { useEffect, useMemo } from 'react';
import { NUM_EASTER_IMGS } from '../constants.tsx';
import { EventEastersData, StateSet } from '../types.ts';

export function Easters(props: {
    dataSet: StateSet<EventEastersData>
}) {
    const img = useMemo(() => {
        return Math.floor(Math.random() * NUM_EASTER_IMGS);
    }, [NUM_EASTER_IMGS]);

    useEffect(() => {
        props.dataSet({ imgNum: img });
    }, [img]);

    return (<>
        <img className='easter-pony' src={`./images/easter/${img}.webp`}></img>
    </>);
}
