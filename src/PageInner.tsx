import React, { useState } from "react";
import EndScreen from "./EndScreen.tsx";
import Game from "./Game.tsx";
import Menu from "./Menu.tsx";
import { Character, GameState, List } from "./util.ts";

function PageInner() {
    const [smashes, setSmashes] = useState<Character[]>([]);

    // Options
    const [showEqg, setShowEqg] = useState(true);
    const [showUnderage, setShowUnderage] = useState(false);
    const [showMales, setShowMales] = useState(true);
    const [showCommunity, setShowCommunity] = useState(true);

    const FilterProps = {
        showEqg: showEqg, setShowEqg: setShowEqg,
        showUnderage: showUnderage, setShowUnderage: setShowUnderage,
        showMales: showMales, setShowMales: setShowMales,
        showCommunity: showCommunity, setShowCommunity: setShowCommunity,
    }

    // Lists
    const [listType, setType] = useState<List>('default');

    const [list, setList] = useState<Character[]>([]);

    const [gameState, setGameState] = useState<GameState>('menu');

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
                        case 'menu': return (<Menu key='menu' setGameState={setGameState} FilterProps={FilterProps} ListProps={ListsProps} />);
                        case 'ingame': return (
                            <>
                                <Game key='game' list={list} setGameState={setGameState} smashes={smashes} setSmashes={setSmashes} />
                            </>
                        )
                        case 'end': return (<EndScreen smashes={smashes} list={list} listType={listType} />)
                    }
                })()
            }
        </div>
    );
}

export default PageInner;