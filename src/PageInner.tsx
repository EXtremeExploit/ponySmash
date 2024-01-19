import React, { useRef, useState } from 'react';
import EndScreen from './EndScreen.tsx';
import Game from './Game.tsx';
import Menu from './Menu.tsx';
import { Character, GameState, ListName } from './util.ts';
import './css/PageInner.css';

function PageInner() {
    const smashes = useRef<Character[]>([]);
    const [gameState, setGameState] = useState<GameState>('menu');

    // Lists
    const [listType, setType] = useState<ListName>('default');
    const list = useRef<Character[]>([]);

    const ListsProps = {
        listType: listType,
        setType: setType,
        list
    };

    return (
        <div key='page-inner' className="page-inner" style={gameState === 'end' ? { overflowY: 'scroll', display: 'inline-grid', justifyItems: 'center' } : {}}>
            {
                (() => {
                    switch (gameState) {
                        case 'menu': return (<Menu key='menu' setGameState={setGameState} ListProps={ListsProps} />);
                        case 'ingame': return (<Game key='game' list={list} setGameState={setGameState} smashes={smashes} />);
                        case 'end': return (<EndScreen key='endscreen' smashes={smashes} list={list} listType={listType} />);
                    }
                })()
            }
        </div>
    );
}

export default PageInner;
