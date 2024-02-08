import React from 'react';
import { Character, ListName } from './types.ts';
import PonyContainer from './PonyContainer.tsx';
import Lists from './Lists.ts';

function EndScreen(props: { smashes: React.MutableRefObject<Character[]>, list: React.MutableRefObject<Character[]>, listType: ListName }) {
    const shameText = Lists[props.listType].getShameText(props.smashes.current, props.list.current);

    return (
        <>
            <p className='pony-name'>Its over!, You would smash{props.smashes.current.filter((e) => e.filly === true).length > 0 ? ' or call cute ' : ''} {props.smashes.current.length} out of {props.list.current.length} characters.</p>
            {
                (() => {
                    switch (props.listType) {
                        case 'custom': return null;
                        default: {
                            return (<>
                                {
                                    shameText !== '' ? (<>
                                        <p className='pony-name'>{shameText}</p>
                                        <br /></>) : null}
                                <p>If you want to add a character or contribute, read the README on GitHub (its at the bottom of the page)</p>
                            </>);
                        }
                    }
                })()
            }
            <PonyContainer smashes={props.smashes} />
        </>
    );
}

export default EndScreen;
