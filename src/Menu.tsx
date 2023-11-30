import React from "react";
import { CharListAndNull, List, getJSON } from "./util.ts";
import CharactersPreviewCount from "./CharactersPreviewCount.tsx";
import ListType from "./ListType.tsx";

function Menu(props:
    {
        isLoadingList: boolean,
        listType: List,
        OG_LIST: CharListAndNull,
        filteredOrderedList: CharListAndNull,
        setIsLoadingList: React.Dispatch<React.SetStateAction<boolean>>,
        startButtonClick: (ev: React.MouseEvent<HTMLButtonElement>) => void,
        setOG_LIST: React.Dispatch<React.SetStateAction<CharListAndNull>>,
        setFilteredOrderedList: React.Dispatch<React.SetStateAction<CharListAndNull>>
        setType: React.Dispatch<React.SetStateAction<List>>,
        filterList: (data: CharListAndNull) => void,
        showEqg, setShowEqg,
        showUnderage, setShowUnderage,
        showMales, setShowMales,
        showCommunity, setShowCommunity,
        shouldReloadList, setShouldReloadList,
        customListURL, setCustomListURL
    }) {


    function MenuOptions() {
        if (props.shouldReloadList) {
            props.filterList(props.OG_LIST);
            props.setShouldReloadList(false);
        }

        function MenuOptionChange(ev: React.ChangeEvent<HTMLInputElement>) {
            switch (ev.target.id) {
                case 'show-eqg': {
                    props.setShowEqg(!props.showEqg);
                    break;
                }
                case 'show-underage': {
                    props.setShowUnderage(!props.showUnderage);
                    break;
                }
                case 'show-males': {
                    props.setShowMales(!props.showMales);
                    break;
                }
                case 'show-community': {
                    props.setShowCommunity(!props.showCommunity);
                    break;
                }
            }

            props.setShouldReloadList(true);

        }

        function DefaultOptions() {
            return (<>
                <p className='menu-option'>
                    Show EQG
                    <input type='checkbox' className='menu-checkbox' id='show-eqg' checked={props.showEqg} onChange={MenuOptionChange} />
                </p>
                <p className='menu-option'>
                    Show underage
                    <input type='checkbox' className='menu-checkbox' id='show-underage' checked={props.showUnderage} onChange={MenuOptionChange} />
                </p>
                <p className='menu-option'>
                    Show males
                    <input type='checkbox' className='menu-checkbox' id='show-males' checked={props.showMales} onChange={MenuOptionChange} />
                </p>
                <p className='menu-option'>
                    Show community characters
                    <input type='checkbox' className='menu-checkbox' id='show-community' checked={props.showCommunity} onChange={MenuOptionChange} />
                </p>
            </>)
        };

        function CustomOptions() {
            function loadCustomList(ev: React.MouseEvent<HTMLButtonElement>) {
                props.setIsLoadingList(true);
                if (props.isLoadingList === true) return; // Load the first list first
                getJSON(`https://api.allorigins.win/get?url=${encodeURIComponent(props.customListURL)}`, (err, data) => {
                    if (err !== null) {
                        let errorStr = `CORS Proxy code: ${err}\n`;
                        alert('Something went wrong... \n' + errorStr);
                    } else {
                        try {
                            props.setOG_LIST(JSON.parse(data.contents as string) as CharListAndNull);
                        } catch {
                            alert('Request returned invalid JSON');
                            data = null;
                        }
                    }
                    if (data != null && data.contents != null && props.filteredOrderedList == null) {
                        props.setFilteredOrderedList(JSON.parse(data.contents as string) as CharListAndNull);
                    }
                    props.setIsLoadingList(false);
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
                        props.listType === 'default' ? (<DefaultOptions />) : (<CustomOptions />)
                    }
                </div>
                <br />
            </>
        );
    }

    return (
        <>
            <p className="title">MLP: FiM Smash or Pass</p>
            <p>List:
                <ListType setFilteredOrderedList={props.setFilteredOrderedList} setOG_LIST={props.setOG_LIST} setType={props.setType} listType={props.listType} />
            </p>
            <br />
            <MenuOptions />
            <CharactersPreviewCount isLoadingList={props.isLoadingList} listType={props.listType} OG_LIST={props.OG_LIST} filteredOrderedList={props.filteredOrderedList} />
            <br />
            <br />
            <button id="start" className="start-button" disabled={props.filteredOrderedList == null || props.filteredOrderedList.length === 0} onClick={props.startButtonClick}>Start</button>
        </>
    );
}

export default Menu;