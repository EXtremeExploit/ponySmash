import React, { useState } from "react";
import { CharListAndNull, getJSON } from "./util.ts";


function loadCustomList(props: {
    OG_LIST: React.MutableRefObject<CharListAndNull>,
    filteredOrderedList: CharListAndNull,
    setFilteredOrderedList: React.Dispatch<React.SetStateAction<CharListAndNull>>,
    setIsLoadingList: React.Dispatch<React.SetStateAction<boolean>>
    isLoadingList: boolean,
},
    customListURL: string,
    useCORSProxy: boolean
) {
    props.OG_LIST.current = null;
    props.setFilteredOrderedList(null);
    if (props.isLoadingList === true) return; // Load the first list first
    if (useCORSProxy) {
        console.log(`Loading custom list "${customListURL}" with CORS proxy`);
        getJSON(`https://api.allorigins.win/get?url=${encodeURIComponent(customListURL)}`, (err, data) => {
            if (!err?.toString().startsWith('2')) {
                let errorStr = `CORS Proxy code: ${err}\n`;
                alert('Something went wrong... \n' + errorStr);
            } else {
                try {
                    props.OG_LIST.current = JSON.parse(data.contents as string) as CharListAndNull;
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
        console.log(`Loading custom list "${customListURL}" without CORS proxy`);
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
                props.OG_LIST.current = data as CharListAndNull;
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
    OG_LIST: React.MutableRefObject<CharListAndNull>,
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
        <p title="CORS Proxy is needed for sites that dont allow other sites accessing their data (eg: pastebin). However it comes at the cost of relying on the proxy of actually working">
            <u>Use CORS Proxy?</u>
            <input key='use-cors' checked={useCORSProxy} type="checkbox" onChange={(ev) => setUseCORSProxy(ev.target.checked)}></input>
        </p>
        <br />
        <a href="https://github.com/EXtremeExploit/ponySmash#custom-lists">What is this?</a>
    </>);
};

export default CustomOptions;
