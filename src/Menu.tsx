import React, { useState } from "react";
import { CharListAndNull, Character, GameState, List, filterList } from "./util.ts";
import CharactersPreviewCount from "./CharactersPreviewCount.tsx";
import ListType from "./ListType.tsx";
import MenuOptions from "./MenuOptions.tsx";
import DefaultList from './lists/default.json';

function Menu(props:
    {
        ListProps: {
            listType: List,
            setType: React.Dispatch<React.SetStateAction<List>>,
            setList: React.Dispatch<React.SetStateAction<Character[]>>,
        },
        FilterProps: {
            showEqg, setShowEqg,
            showUnderage, setShowUnderage,
            showMales, setShowMales,
            showCommunity, setShowCommunity,
        }
        setGameState: React.Dispatch<React.SetStateAction<GameState>>,
    }) {
    const [isLoadingList, setIsLoadingList] = useState(false);
    const [OG_LIST, setOG_LIST] = useState<CharListAndNull>(null);
    const [filteredOrderedList, setFilteredOrderedList] = useState<CharListAndNull>(null);

    function startButtonClick(ev: React.MouseEvent<HTMLButtonElement>) {
        if (filteredOrderedList != null) {
            props.ListProps.setList(filteredOrderedList.sort((a, b) => 0.5 - Math.random()));
            props.setGameState('ingame');
        }
    }

    switch (props.ListProps.listType) {
        case 'default': {
            if (OG_LIST !== null && filteredOrderedList !== null) break; // List is already loaded
            if (OG_LIST == null) {
                setOG_LIST(DefaultList);
            }
            filterList(DefaultList, setFilteredOrderedList, props.FilterProps);
            break;
        }
        // If more lists get added, this is where they should go
        case 'custom': {
            break;
        }
    }

    return (
        <>
            <p className="title">MLP: FiM Smash or Pass</p>

            <ListType key='listType' setFilteredOrderedList={setFilteredOrderedList} setOG_LIST={setOG_LIST} setType={props.ListProps.setType} listType={props.ListProps.listType} />
            <MenuOptions ListProps={props.ListProps} FilterProps={props.FilterProps} isLoadingList={isLoadingList} setIsLoadingList={setIsLoadingList} OG_LIST={OG_LIST} filteredOrderedList={filteredOrderedList} setFilteredOrderedList={setFilteredOrderedList} setOG_LIST={setOG_LIST} />
            <CharactersPreviewCount isLoadingList={isLoadingList} listType={props.ListProps.listType} OG_LIST={OG_LIST} filteredOrderedList={filteredOrderedList} />
            <br />
            <button id="start" className="start-button" disabled={filteredOrderedList == null || filteredOrderedList.length === 0} onClick={startButtonClick}>Start</button>
        </>
    );
}

export default Menu;
