import React, { useState } from "react";
import { CharListAndNull, getJSON } from "./util.ts";


function loadCustomList(ev: React.MouseEvent<HTMLButtonElement>, props: {
    setOG_LIST: React.Dispatch<React.SetStateAction<CharListAndNull>>,
    filteredOrderedList: CharListAndNull,
    setFilteredOrderedList: React.Dispatch<React.SetStateAction<CharListAndNull>>,
    setIsLoadingList: React.Dispatch<React.SetStateAction<boolean>>
    isLoadingList: boolean,
},
    customListURL,
) {
    console.log(`Loading custom list "${customListURL}"`);
    props.setOG_LIST(null);
    props.setFilteredOrderedList(null);
    if (props.isLoadingList === true) return; // Load the first list first
    getJSON(`https://api.allorigins.win/get?url=${encodeURIComponent(customListURL)}`, (err, data) => {
        if (!err?.toString().startsWith('2')) {
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
    props.setIsLoadingList(true);
}


function CustomOptions(props: {
    setOG_LIST: React.Dispatch<React.SetStateAction<CharListAndNull>>,
    filteredOrderedList: CharListAndNull,
    setFilteredOrderedList: React.Dispatch<React.SetStateAction<CharListAndNull>>,
    setIsLoadingList: React.Dispatch<React.SetStateAction<boolean>>,
    isLoadingList: boolean,
},
) {
    const [customListURL, setCustomListURL] = useState('');

    return (<>
        <input key='input' placeholder="URL to JSON list" id='input' defaultValue={customListURL} onChange={(ev) => setCustomListURL(ev.target.value)} />
        <button onClick={(ev) => loadCustomList(ev, props, customListURL)}>Load</button>
        <br />
        <a href="https://github.com/EXtremeExploit/ponySmash#custom-lists">What is this?</a>
    </>);
};

export default CustomOptions;