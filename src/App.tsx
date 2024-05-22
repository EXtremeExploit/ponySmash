import React from 'react';
import PageInner from './PageInner.tsx';
import { Footer } from './Footer.tsx';
import './css/Events.css';

import { AprilFools } from './events/AprilFools.tsx';
import { Halloween } from './events/Halloween.tsx';
import { Christmas } from './events/Christmas.tsx';
import { NewYear } from './events/NewYear.tsx';
import { EventDecorations } from './types.ts';

function App() {
    const date = new Date();
    let eventDecoration: EventDecorations = 'none';

    if ((date.getMonth() == 3 && date.getDate() == 1)) {
        eventDecoration = 'aprilFools';
    }

    if ((date.getMonth() == 9 && date.getDate() == 31)) {
        eventDecoration = 'halloween';
    }

    if (date.getMonth() == 11 && (date.getDate() == 24 || date.getDate() == 25)) {
        eventDecoration = 'xmas';
    }

    if ((date.getMonth() == 11 && date.getDate() == 31) || (date.getMonth() == 0 && date.getDate() == 1) || true) {
        eventDecoration = 'newYear';
    }

    return (
        <>
            {
                (() => {
                    switch (eventDecoration) {
                        case 'aprilFools': return <AprilFools />;
                        case 'halloween': return <Halloween />;
                        case 'xmas': return <Christmas />;
                        case 'newYear': return <NewYear />;
                        case 'none': return <></>;
                    }
                })()
            }
            <PageInner key='page-inner' />
            <Footer key='footer' event={eventDecoration} />
        </>
    );
}

export default App;
