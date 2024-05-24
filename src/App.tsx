import React, { useState } from 'react';
import PageInner from './PageInner.tsx';
import { Footer } from './Footer.tsx';
import { EventDecorations } from './types.ts';
import { EasterDate } from './util.ts';

import { AprilFools } from './events/AprilFools.tsx';
import { Halloween } from './events/Halloween.tsx';
import { Christmas } from './events/Christmas.tsx';
import { NewYear } from './events/NewYear.tsx';
import { BDay } from './events/BDay.tsx';
import { Easters } from './events/Easters.tsx';

import './css/Events.css';
import { Valentines } from './events/Valentines.tsx';

function App() {
    const date = new Date();
    let eventDecoration: EventDecorations = 'none';

    if ((date.getMonth() == 3 && date.getDate() == 1))
        eventDecoration = 'aprilFools';

    if ((date.getMonth() == 9 && date.getDate() == 31))
        eventDecoration = 'halloween';

    if (date.getMonth() == 11 && (date.getDate() == 24 || date.getDate() == 25))
        eventDecoration = 'xmas';

    if ((date.getMonth() == 11 && date.getDate() == 31) || (date.getMonth() == 0 && date.getDate() == 1))
        eventDecoration = 'newYear';

    if ((date.getMonth() == 9 && date.getDate() == 10))
        eventDecoration = 'bday';

    if ((date.getMonth() == 9 && date.getDate() == 10))
        eventDecoration = 'bday';

    if ((date.getMonth() == 1 && date.getDate() == 14))
        eventDecoration = 'valentines';

    const ed = EasterDate(date.getFullYear());
    if ((date.getMonth() + 1 == ed.month && date.getDate() == ed.day)) {
        eventDecoration = 'easters';
    }

    const [eventData, eventDataSet] = useState<object>({});

    return (
        <>
            {
                (() => {
                    switch (eventDecoration) {
                        case 'aprilFools': return <AprilFools />;
                        case 'halloween': return <Halloween />;
                        case 'xmas': return <Christmas />;
                        case 'newYear': return <NewYear />;
                        case 'bday': return <BDay />;
                        case 'valentines': return <Valentines />;
                        case 'easters': return <Easters dataSet={eventDataSet} />;
                        case 'none': return <></>;
                    }
                })()
            }
            <PageInner key='page-inner' />
            <Footer key='footer' event={eventDecoration} eventData={eventData} />
        </>
    );
}

export default App;
