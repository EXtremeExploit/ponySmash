import React, { useState } from "react";
import { CharListAndNull, Character, GameState, List, filterList } from "./util.ts";
import CharactersPreviewCount from "./CharactersPreviewCount.tsx";
import ListType from "./ListType.tsx";
import MenuOptions from "./MenuOptions.tsx";
import DefaultList from './lists/default.json';
import './Menu.css';

function Menu(props:
    {
        ListProps: {
            listType: List,
            setType: React.Dispatch<React.SetStateAction<List>>,
            setList: React.Dispatch<React.SetStateAction<Character[]>>,
        },
        setGameState: React.Dispatch<React.SetStateAction<GameState>>,
    }) {
    const [isLoadingList, setIsLoadingList] = useState(false);
    const [OG_LIST, setOG_LIST] = useState<CharListAndNull>(null);
    const [filteredOrderedList, setFilteredOrderedList] = useState<CharListAndNull>(null);


    // Options
    const [showEqg, setShowEqg] = useState(true);
    const [showUnderage, setShowUnderage] = useState(false);
    const [showFemales, setShowFemales] = useState(true);
    const [showMales, setShowMales] = useState(true);
    const [showCommunity, setShowCommunity] = useState(true);

    const FilterProps = {
        showEqg: showEqg, setShowEqg: setShowEqg,
        showUnderage: showUnderage, setShowUnderage: setShowUnderage,
        showFemales: showFemales, setShowFemales: setShowFemales,
        showMales: showMales, setShowMales: setShowMales,
        showCommunity: showCommunity, setShowCommunity: setShowCommunity,
    }


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
                setOG_LIST(DefaultList as Character[]);
            }
            filterList(DefaultList as Character[], setFilteredOrderedList, FilterProps);
            break;
        }
        // If more lists get added, this is where they should go
        case 'custom': {
            break;
        }
    }

    const MenuOptionsProps = {
        listType: props.ListProps.listType,
        isLoadingList: isLoadingList,
        setIsLoadingList: setIsLoadingList,
        OG_LIST: OG_LIST,
        setOG_LIST: setOG_LIST,
        filteredOrderedList: filteredOrderedList,
        setFilteredOrderedList: setFilteredOrderedList,
    }

    return (
        <>
            <p className="title">MLP: FiM Smash or Pass</p>

            <ListType key='listType' setFilteredOrderedList={setFilteredOrderedList} setOG_LIST={setOG_LIST} setType={props.ListProps.setType} listType={props.ListProps.listType} />
            <MenuOptions key='menu-options' FilterProps={FilterProps} {...MenuOptionsProps} />
            <CharactersPreviewCount isLoadingList={isLoadingList} listType={props.ListProps.listType} OG_LIST={OG_LIST} filteredOrderedList={filteredOrderedList} />
            <br />
            <button id="start" className="start-button" disabled={filteredOrderedList == null || filteredOrderedList.length === 0} onClick={startButtonClick}>Start</button>
        </>
    );
}

export default Menu;
