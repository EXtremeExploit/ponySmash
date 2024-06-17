import React, { useState } from 'react';
import { Character, GameState, StateSet } from './types.ts';
import ButtonsHolder from './ButtonsHolder.tsx';
import './css/Game.css';

function Game(props: {
    list: React.MutableRefObject<Character[]>,
    setGameState: StateSet<GameState>,
    smashes: React.MutableRefObject<Character[]>
}) {
    const [i, setI] = useState(0);
    const IMG_CACHE_SIZE = 20;

    // Return true if there is no next character
    function endingHandler(): boolean {
        if (i === props.list.current.length - 1) {
            props.setGameState('end');
            return true;
        }
        return false;
    }

    function smashClick(_ev?: React.MouseEvent<HTMLElement>): boolean {
        props.smashes.current.push(props.list.current[i]);

        if (endingHandler()) return false;
        setI(i + 1);
        return true;
    }

    function passClick(_ev?: React.MouseEvent<HTMLElement>) {
        if (endingHandler()) return false;
        setI(i + 1);
        return true;
    }

    return (<>
        <ButtonsHolder character={props.list.current[i]} smashClick={smashClick} passClick={passClick} />
        <br></br>
        <div className='progress-display'>{i + 1}/{props.list.current.length}</div>
        <p className='pony-name'>{props.list.current[i].name}</p>
        <img className='game-img' alt={props.list.current[i].name} src={props.list.current[i].img} fetchPriority='high'></img>
        {
            props.list.current.slice(i + 1, i + 1 + IMG_CACHE_SIZE).map((c, ci) => (
                <img key={c.name} src={c.img} alt='' className='cached-img' fetchPriority={ci == 0 ? 'high' : 'low'} ></img>
            ))
        }
    </>);
}

export default Game;
