import React, { useState } from "react";
import EndScreen from "./EndScreen.tsx";
import Game from "./Game.tsx";
import Menu from "./Menu.tsx";
import { Character, GameState, List } from "./util.ts";
import './PageInner.css';

function PageInner() {
    const [smashes, setSmashes] = useState<Character[]>([]);
    const [gameState, setGameState] = useState<GameState>('menu');

    // Lists
    const [listType, setType] = useState<List>('default');
    const [list, setList] = useState<Character[]>([]);

    const ListsProps = {
        listType: listType,
        setType: setType,
        setList: setList,
    }


    return (
        <div key='page-inner' className="page-inner" style={gameState === 'end' ? { overflowY: 'scroll', display: 'inline-grid', justifyItems: 'center' } : {}}>
            {
                (() => {
                    switch (gameState) {
                        case 'menu': return (<Menu key='menu' setGameState={setGameState} ListProps={ListsProps} />);
                        case 'ingame': return (<Game key='game' list={list} setGameState={setGameState} smashes={smashes} setSmashes={setSmashes} />)
                        case 'end': return (<EndScreen key='endscreen' smashes={smashes} list={list} listType={listType} />)
                    }
                })()
            }
        </div>
    );
}

export default PageInner;