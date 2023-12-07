import React, { useState } from "react";
import { Character, GameState } from "./util.ts";
import ButtonsHolder from "./ButtonsHolder.tsx";
import './Game.css';

function Game(props: {
    list: Character[],
    setGameState: React.Dispatch<React.SetStateAction<GameState>>,
    smashes: Character[],
    setSmashes: React.Dispatch<React.SetStateAction<Character[]>>
}) {
    const [i, setI] = useState(0);

    // Return true if there is no next character
    function endingHandler(): boolean {
        if (i === props.list.length - 1) {
            props.setGameState('end');
            return true;
        }
        return false;
    }

    function smashClick(ev?: React.MouseEvent<HTMLElement>): boolean {
        props.smashes.push(props.list[i]);
        props.setSmashes(props.smashes);

        if (endingHandler()) return false;
        setI(i + 1);
        return true;
    }

    function passClick(ev?: React.MouseEvent<HTMLElement>) {
        if (endingHandler()) return false;
        setI(i + 1);
        return true;
    }

    return (<>
        <ButtonsHolder Character={props.list[i]} smashClick={smashClick} passClick={passClick} />

        <p className='pony-name'>{props.list[i].name}</p>
        <img className='game-img' alt={props.list[i].name} src={props.list[i].img}></img>
        {
            props.list.slice(i, i + 20).map((c) => (
                <img key={c.name} src={c.img} alt="" style={
                    { visibility: 'hidden', display: 'flex', width: '1px', height: '1px' }
                }></img>
            ))
        }
    </>);
}

export default Game;
