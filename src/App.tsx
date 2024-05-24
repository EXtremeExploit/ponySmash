import React, { useRef, useState } from 'react';

import { EventDecorations } from './types.ts';
import { Events } from './Events.tsx';
import PageInner from './PageInner.tsx';
import { Footer } from './Footer.tsx';


import './css/Events.css';
function App() {
    const eventDecoration = useRef<EventDecorations>('none');
    const [eventData, eventDataSet] = useState<object>({});

    return (
        <>
            <Events key='events' eventDecoration={eventDecoration} eventDataSet={eventDataSet} />
            <PageInner key='page-inner' />
            <Footer key='footer' event={eventDecoration} eventData={eventData} />
        </>
    );
}

export default App;
