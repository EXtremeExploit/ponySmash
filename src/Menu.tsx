import React, { useRef, useState } from 'react';
import { CharListAndNull, Character, GameState, ListName, ListProps, Ref, StateSet } from './types.ts';
import { loadList } from './util.ts';
import CharactersPreviewCount from './CharactersPreviewCount.tsx';
import ListType from './ListType.tsx';
import MenuOptions from './MenuOptions.tsx';
import Lists from './Lists.ts';
import './css/Menu.css';

function Menu(props:
    {
        ListProps: {
            listType: Ref<ListName>,
            list: React.MutableRefObject<Character[]>
        },
        setGameState: StateSet<GameState>
    }) {
    const [isLoadingList, setIsLoadingList] = useState(false);
    const OG_LIST = useRef<CharListAndNull>(Lists[props.ListProps.listType.current].list);

    const listProps = useRef<ListProps>({
        filters: Lists[props.ListProps.listType.current].filters,
        extensions: Lists[props.ListProps.listType.current].extensions
    });

    const [filteredList, setFilteredList] = useState<CharListAndNull>(loadList(Lists[props.ListProps.listType.current], OG_LIST, null, listProps, props.ListProps.listType.current));

    function startButtonClick(_ev: React.MouseEvent<HTMLButtonElement>) {
        if (filteredList != null) {
            props.ListProps.list.current = filteredList.sort((_a, _b) => 0.5 - Math.random());
            props.setGameState('ingame');
        }
    }

    const MenuOptionsProps = {
        listType: props.ListProps.listType,
        isLoadingList: isLoadingList,
        setIsLoadingList: setIsLoadingList,
        OG_LIST: OG_LIST,
        filteredList: filteredList,
        setFilteredList: setFilteredList
    };

    return (
        <>
            <p className="title">MLP: FiM Smash or Pass</p>

            <ListType key='listType' setFilteredList={setFilteredList} listType={props.ListProps.listType} OG_LIST={OG_LIST} listProps={listProps} />
            <MenuOptions key='menu-options' listProps={listProps} {...MenuOptionsProps} />
            <CharactersPreviewCount isLoadingList={isLoadingList} listType={props.ListProps.listType.current} OG_LIST={OG_LIST.current} filteredList={filteredList} />
            <br />
            <button id="start" className="start-button" disabled={filteredList == null || filteredList.length === 0} onClick={startButtonClick}>Start</button>
        </>
    );
}

export default Menu;
