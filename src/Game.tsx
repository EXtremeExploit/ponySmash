import React, { useState } from 'react';
import { Character, GameState } from './types.ts';
import ButtonsHolder from './ButtonsHolder.tsx';
import './css/Game.css';

function Game(props: {
    list: React.MutableRefObject<Character[]>,
    setGameState: React.Dispatch<React.SetStateAction<GameState>>,
    smashes: React.MutableRefObject<Character[]>
}) {
    const [i, setI] = useState(0);

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
        <ButtonsHolder Character={props.list.current[i]} smashClick={smashClick} passClick={passClick} />

        <p className='pony-name'>{props.list.current[i].name}</p>
        <img className='game-img' alt={props.list.current[i].name} src={props.list.current[i].img}></img>
        {
            props.list.current.slice(i, i + 20).map((c) => (
                <img key={c.name} src={c.img} alt="" style={
                    { visibility: 'hidden', display: 'flex', width: '1px', height: '1px' }
                }></img>
            ))
        }
    </>);
}

export default Game;
