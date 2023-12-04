import React, { useState } from "react";
import { CharListAndNull, getJSON } from "./util.ts";


function loadCustomList(props: {
    setOG_LIST: React.Dispatch<React.SetStateAction<CharListAndNull>>,
    filteredOrderedList: CharListAndNull,
    setFilteredOrderedList: React.Dispatch<React.SetStateAction<CharListAndNull>>,
    setIsLoadingList: React.Dispatch<React.SetStateAction<boolean>>
    isLoadingList: boolean,
},
    customListURL: string,
    useCORSProxy: boolean
) {
    console.log(`Loading custom list "${customListURL}"`);
    props.setOG_LIST(null);
    props.setFilteredOrderedList(null);
    if (props.isLoadingList === true) return; // Load the first list first
    if (useCORSProxy) {
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
    } else {
        getJSON(customListURL, (err, data) => {
            if (err === 0 && data === '') {
                alert('Request failed (probably blocked by CORS)\nEnable CORS Proxy just in case');
                props.setIsLoadingList(false);
                return;
            }
            if (!err?.toString().startsWith('2')) {
                let errorStr = `HTTP status code: ${err}\n`;
                alert('Something went wrong... \n' + errorStr);
            } else {
                props.setOG_LIST(data as CharListAndNull);
            }
            if (data != null && props.filteredOrderedList == null) {
                props.setFilteredOrderedList(data as CharListAndNull);
            }
            props.setIsLoadingList(false);
        });
    }
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
    const [useCORSProxy, setUseCORSProxy] = useState(true);

    function customListURLKeyUp(ev: React.KeyboardEvent<HTMLInputElement>) {
        if (ev.repeat)
            return;
        if (ev.key === 'Enter')
            loadCustomList(props, customListURL, useCORSProxy);
    }

    return (<>
        <input key='input' placeholder="URL to JSON list" id='input' defaultValue={customListURL} onChange={(ev) => setCustomListURL(ev.target.value)} onKeyUp={customListURLKeyUp} />
        <button onClick={(ev) => loadCustomList(props, customListURL, useCORSProxy)}>Load</button>
        <br />
        <p>Use CORS Proxy?
            <input key='use-cors' checked={useCORSProxy} type="checkbox" onChange={(ev) => setUseCORSProxy(ev.target.checked)}></input>
        </p>
        <br />
        <a href="https://github.com/EXtremeExploit/ponySmash#custom-lists">What is this?</a>
    </>);
};

export default CustomOptions;