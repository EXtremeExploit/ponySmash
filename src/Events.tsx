import React from 'react';

import { EventDecorations, Ref, StateSet } from './types.ts';
import { EasterDate } from './util.ts';

import { AprilFools } from './events/AprilFools.tsx';
import { Halloween } from './events/Halloween.tsx';
import { StarWars } from './events/StarWars.tsx';
import { Christmas } from './events/Christmas.tsx';
import { NewYear } from './events/NewYear.tsx';
import { BDay } from './events/BDay.tsx';
import { Easters } from './events/Easters.tsx';
import { Valentines } from './events/Valentines.tsx';
import { BlazeIt } from './events/BlazeIt.tsx';


export function Events(props: {
    eventDecoration: Ref<EventDecorations>,
    eventDataSet: StateSet<object>
}) {
    const date = new Date();

    // April 1
    if ((date.getMonth() == 3 && date.getDate() == 1))
        props.eventDecoration.current = 'aprilFools';

    // October 31
    if ((date.getMonth() == 9 && date.getDate() == 31))
        props.eventDecoration.current = 'halloween';

    // December 25
    if (date.getMonth() == 11 && (date.getDate() == 24 || date.getDate() == 25))
        props.eventDecoration.current = 'xmas';

    // December 31 / January 1
    if ((date.getMonth() == 11 && date.getDate() == 31) || (date.getMonth() == 0 && date.getDate() == 1))
        props.eventDecoration.current = 'newYear';

    // October 10
    if ((date.getMonth() == 9 && date.getDate() == 10))
        props.eventDecoration.current = 'bday';

    // February 14
    if ((date.getMonth() == 1 && date.getDate() == 14))
        props.eventDecoration.current = 'valentines';

    // May 4
    if ((date.getMonth() == 4 && date.getDate() == 4))
        props.eventDecoration.current = 'starWars';

    // April 20
    if ((date.getMonth() == 3 && date.getDate() == 20))
        props.eventDecoration.current = 'blazeIt';

    const ed = EasterDate(date.getFullYear());
    if ((date.getMonth() + 1 == ed.month && date.getDate() == ed.day)) {
        props.eventDecoration.current = 'easters';
    }

    return (
        <>
            {
                (() => {
                    switch (props.eventDecoration.current) {
                        case 'aprilFools': return <AprilFools />;
                        case 'halloween': return <Halloween />;
                        case 'xmas': return <Christmas />;
                        case 'newYear': return <NewYear />;
                        case 'bday': return <BDay />;
                        case 'valentines': return <Valentines />;
                        case 'easters': return <Easters dataSet={props.eventDataSet} />;
                        case 'starWars': return <StarWars dataSet={props.eventDataSet} />;
                        case 'blazeIt': return <BlazeIt dataSet={props.eventDataSet} />;
                        case 'none': return <></>;
                    }
                })()
            }
        </>
    );
}
