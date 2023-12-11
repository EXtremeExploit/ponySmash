import React from 'react';
import { Character, List } from './util.ts';
import PonyContainer from './PonyContainer.tsx';
import ShameTextDefault from './ShameTextDefault.tsx';

function EndScreen(props: { smashes: React.MutableRefObject<Character[]>, list: React.MutableRefObject<Character[]>, listType: List }) {
    return (
        <>
            <p className='pony-name'>Its over!, You would smash{props.smashes.current.filter((e) => e.filly === true).length > 0 ? ' or call cute ' : ''} {props.smashes.current.length} out of {props.list.current.length} characters.</p>
            {
                (() => {
                    switch (props.listType) {
                        case 'default': return (
                            <>
                                <ShameTextDefault smashes={props.smashes} list={props.list} />
                                <br />
                                <p>If you want to add a character or contribute, read the README on GitHub (its at the bottom of the page)</p>
                            </>
                        );
                        case 'custom': return null;
                    }
                })()
            }
            <PonyContainer smashes={props.smashes} />
        </>
    );
}

export default EndScreen;
