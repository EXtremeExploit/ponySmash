import React, { useState } from 'react';

import Footer from './Footer.tsx';
import { CharListAndNull, Character, GameState, List, getJSON } from './util.ts';

import Game from './Game.tsx';
import Menu from './Menu.tsx';
import ButtonsHolder from './ButtonsHolder.tsx';
import EndScreen from './EndScreen.tsx';

function App() {
    const [i, setI] = useState(0);
    const [filteredOrderedList, setFilteredOrderedList] = useState<CharListAndNull>(null);
    const [list, setList] = useState<Character[]>([]);
    const [gameState, setGameState] = useState<GameState>('menu');
    const [smashes, setSmashes] = useState<Character[]>([]);

    // Options
    const [showEqg, setShowEqg] = useState(true);
    const [showUnderage, setShowUnderage] = useState(false);
    const [showMales, setShowMales] = useState(true);
    const [showCommunity, setShowCommunity] = useState(true);
    const [shouldReloadList, setShouldReloadList] = useState(false);


    const [listType, setType] = useState<List>('default');
    const [OG_LIST, setOG_LIST] = useState<CharListAndNull>(null);
    const [isLoadingList, setIsLoadingList] = useState(true);

    const [customListURL, setCustomListURL] = useState('');


    function filterList(data: CharListAndNull) {
        if (data == null) return;
        setFilteredOrderedList((data as Character[]).filter((e) => {
            if (e.eqg && !showEqg) return false;
            if (e.filly && !showUnderage) return false;
            if (e.gender === 'male' && !showMales) return false;
            if (e.community && !showCommunity) return false;
            return true;
        }));
    }

    if (shouldReloadList) {
        filterList(OG_LIST);
        setShouldReloadList(false);
    }

    // Return true if there is no next character
    function endingHandler(): boolean {
        if (i === list.length - 1) {
            setGameState('end');
            return true;
        }
        return false;
    }

    function smashClick(ev?: React.MouseEvent<HTMLElement>): boolean {
        smashes.push(list[i]);
        setSmashes(smashes);

        if (endingHandler()) return false;
        setI(i + 1);
        return true;
    }

    function passClick(ev?: React.MouseEvent<HTMLElement>) {
        if (endingHandler()) return false;
        setI(i + 1);
        return true;
    }

    function PageInner() {
        switch (listType) {
            case 'default': {
                if (OG_LIST !== null && filteredOrderedList !== null) break; // List is already loaded
                if (OG_LIST == null) {
                    setIsLoadingList(true);
                    getJSON('/lists/default.json', (err, data) => {
                        if (err !== null) {
                            alert('Something went wrong: ' + err);
                        } else {
                            setOG_LIST(data as CharListAndNull);
                        }
                        if (data != null && filteredOrderedList == null) {
                            filterList(data as CharListAndNull);
                        }
                        setIsLoadingList(false);
                    });
                }
                break;
            }
            // If more lists get added, this is where they should go
            case 'custom': {
                break;
            }
        }

        const MenuProps = {
            customListURL, setCustomListURL,
            setGameState,
        }

        const ListsProps = {
            isLoadingList,
            setIsLoadingList,
            listType,
            setType,
            OG_LIST,
            setOG_LIST,
            filteredOrderedList,
            setFilteredOrderedList,
            setList,
            shouldReloadList, setShouldReloadList,
            filterList,
        }

        const FilterProps = {
            showEqg, setShowEqg,
            showUnderage, setShowUnderage,
            showMales, setShowMales,
            showCommunity, setShowCommunity,
        }

        return (
            <div className="page-inner" style={gameState === 'end' ? { overflowY: 'scroll', display: 'inline-grid', justifyItems: 'center' } : {}}>
                {
                    (() => {
                        switch (gameState) {
                            case 'menu': return (<Menu {...MenuProps} ListProps={ListsProps} FilterProps={FilterProps} />);
                            case 'ingame': return (<Game i={i} list={list} />)
                            case 'end': return (<EndScreen smashes={smashes} list={list} listType={listType} />)
                        }
                    })()
                }
            </div>
        );
    }

    return (
        <>
            {gameState === 'ingame' ? <ButtonsHolder isFilly={list[i].filly} smashClick={smashClick} passClick={passClick} /> : null}
            <PageInner />
            <Footer />
        </>
    );
}


export default App;
