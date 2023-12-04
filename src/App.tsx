import React from 'react';
import PageInner from './PageInner.tsx';
import Footer from './Footer.tsx';

function App() {
    return (
        <>
            <PageInner key='page-inner' />
            <Footer key='footer' />
        </>
    );
}

export default App;
