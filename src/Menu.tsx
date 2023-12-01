import React from "react";
import { CharListAndNull, Character, GameState, List, getJSON } from "./util.ts";
import CharactersPreviewCount from "./CharactersPreviewCount.tsx";
import ListType from "./ListType.tsx";

function Menu(props:
    {
        ListProps: {
            isLoadingList: boolean,
            setIsLoadingList: React.Dispatch<React.SetStateAction<boolean>>,
            listType: List,
            setType: React.Dispatch<React.SetStateAction<List>>,
            OG_LIST: CharListAndNull,
            setOG_LIST: React.Dispatch<React.SetStateAction<CharListAndNull>>,
            filteredOrderedList: CharListAndNull,
            setFilteredOrderedList: React.Dispatch<React.SetStateAction<CharListAndNull>>,
            setList: React.Dispatch<React.SetStateAction<Character[]>>,
            shouldReloadList, setShouldReloadList,
            filterList: (data: CharListAndNull) => void,
        },
        FilterProps: {
            showEqg, setShowEqg,
            showUnderage, setShowUnderage,
            showMales, setShowMales,
            showCommunity, setShowCommunity,
        }
        setGameState: React.Dispatch<React.SetStateAction<GameState>>,
        customListURL, setCustomListURL
    }) {


    function startButtonClick(ev: React.MouseEvent<HTMLButtonElement>) {
        if (props.ListProps.filteredOrderedList != null) {
            props.ListProps.setList(props.ListProps.filteredOrderedList.sort((a, b) => 0.5 - Math.random()));
            props.setGameState('ingame');
        }
    }

    function MenuOptions() {
        if (props.ListProps.shouldReloadList) {
            props.ListProps.filterList(props.ListProps.OG_LIST);
            props.ListProps.setShouldReloadList(false);
        }

        function MenuOptionChange(ev: React.ChangeEvent<HTMLInputElement>) {
            switch (ev.target.id) {
                case 'show-eqg': {
                    props.FilterProps.setShowEqg(!props.FilterProps.showEqg);
                    break;
                }
                case 'show-underage': {
                    props.FilterProps.setShowUnderage(!props.FilterProps.showUnderage);
                    break;
                }
                case 'show-males': {
                    props.FilterProps.setShowMales(!props.FilterProps.showMales);
                    break;
                }
                case 'show-community': {
                    props.FilterProps.setShowCommunity(!props.FilterProps.showCommunity);
                    break;
                }
            }
            props.ListProps.setShouldReloadList(true);
        }

        function DefaultOptions() {
            return (<>
                <p className='menu-option'>
                    Show EQG
                    <input type='checkbox' className='menu-checkbox' id='show-eqg' checked={props.FilterProps.showEqg} onChange={MenuOptionChange} />
                </p>
                <p className='menu-option'>
                    Show underage
                    <input type='checkbox' className='menu-checkbox' id='show-underage' checked={props.FilterProps.showUnderage} onChange={MenuOptionChange} />
                </p>
                <p className='menu-option'>
                    Show males
                    <input type='checkbox' className='menu-checkbox' id='show-males' checked={props.FilterProps.showMales} onChange={MenuOptionChange} />
                </p>
                <p className='menu-option'>
                    Show community characters
                    <input type='checkbox' className='menu-checkbox' id='show-community' checked={props.FilterProps.showCommunity} onChange={MenuOptionChange} />
                </p>
            </>)
        };

        function CustomOptions() {
            function loadCustomList(ev: React.MouseEvent<HTMLButtonElement>) {
                props.ListProps.setIsLoadingList(true);
                if (props.ListProps.isLoadingList === true) return; // Load the first list first
                getJSON(`https://api.allorigins.win/get?url=${encodeURIComponent(props.customListURL)}`, (err, data) => {
                    if (err !== null) {
                        let errorStr = `CORS Proxy code: ${err}\n`;
                        alert('Something went wrong... \n' + errorStr);
                    } else {
                        try {
                            props.ListProps.setOG_LIST(JSON.parse(data.contents as string) as CharListAndNull);
                        } catch {
                            alert('Request returned invalid JSON');
                            data = null;
                        }
                    }
                    if (data != null && data.contents != null && props.ListProps.filteredOrderedList == null) {
                        props.ListProps.setFilteredOrderedList(JSON.parse(data.contents as string) as CharListAndNull);
                    }
                    props.ListProps.setIsLoadingList(false);
                });
            }

            const customUrlChangeHandler = (ev: React.ChangeEvent<HTMLInputElement>) => {
                props.setCustomListURL(ev.target.value)
            }

            return (<>
                <input placeholder="URL to JSON list" id='input' value={props.customListURL} onChange={customUrlChangeHandler} />
                <button onClick={loadCustomList}>Load</button>
                <br />
                <a href="https://github.com/EXtremeExploit/ponySmash#custom-lists">What is this?</a>
            </>);
        };

        return (
            <>
                <div id="menu-options">
                    {
                        props.ListProps.listType === 'default' ? (<DefaultOptions />) : (<CustomOptions />)
                    }
                </div>
                <br />
            </>
        );
    }

    return (
        <>
            <p className="title">MLP: FiM Smash or Pass</p>

            <ListType setFilteredOrderedList={props.ListProps.setFilteredOrderedList} setOG_LIST={props.ListProps.setOG_LIST} setType={props.ListProps.setType} listType={props.ListProps.listType} />
            <MenuOptions />
            <CharactersPreviewCount isLoadingList={props.ListProps.isLoadingList} listType={props.ListProps.listType} OG_LIST={props.ListProps.OG_LIST} filteredOrderedList={props.ListProps.filteredOrderedList} />
            <br />
            <br />
            <button id="start" className="start-button" disabled={props.ListProps.filteredOrderedList == null || props.ListProps.filteredOrderedList.length === 0} onClick={startButtonClick}>Start</button>
        </>
    );
}

export default Menu;