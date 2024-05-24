import React from 'react';
import { CORSProxyResponse, CharListAndNull, Character, Filters, List, StateSet, ListName } from './types';
import Lists from './Lists.ts';
import { LIST_LATEST_VERSION } from './constants.tsx';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getJSON(url: string, callback: (status: number | null, data: CORSProxyResponse | any) => void) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = () => {
        const status = xhr.status;
        callback(status, xhr.response);
    };
    xhr.onerror = () => {
        callback(0, '');
    };
    xhr.send();
}


export function filterList(data: CharListAndNull, setFilteredList: StateSet<CharListAndNull> | null, filters: Filters) {
    if (data == null) return null;

    const filteredList = data.filter((character) => {
        for (const filterId in filters) {
            let retVal = true;
            const { logic, value } = filters[filterId];
            const charProp = character[logic.charProp];

            if (value) continue; // Filter is enabled. Dont check for negative matches
            if (typeof charProp == 'undefined') continue; // The prop is undefined. Ignore this pass

            switch (logic.type) {
                case 'equals': retVal = charProp == logic.against; break;
                case 'notEquals': retVal = charProp != logic.against; break;
                case 'startsWith': retVal = (charProp == null) ? true : (charProp.toString().startsWith(logic.arg) == logic.against); break;
                case 'endsWith': retVal = (charProp == null) ? true : (charProp.toString().endsWith(logic.arg) == logic.against); break;
                case 'includes': retVal = (charProp == null) ? true : (charProp.toString().includes(logic.arg) == logic.against); break;
                case 'inList': {
                    if (!Object.keys(Lists).includes(logic.against)) {
                        const msg = `List "${logic.against}" not found in filter "${filterId}". Ignoring filter`;
                        alert(msg);
                        console.warn(msg);
                        // Mark the filter as "enabled" so it gets ignored
                        filters[filterId].value = true;
                        return true;
                    }
                    const i = Lists[logic.against as ListName].list.findIndex((bc) => bc[logic.charProp] === charProp);

                    const isInList = i >= 0;
                    retVal = isInList;
                }
            }

            retVal = !retVal;

            if (retVal == false) return false;
        }
        return true;
    });

    if (setFilteredList)
        setFilteredList(filteredList);
    return filteredList;
}

/**
 * Loads a list object/array and filters if filters apply
 * @param list List object or character array
 * @param OG_LIST OG_LIST ref
 * @param setFilteredList filtered list setter
 * @param filters Filters REF
 * @param listType List key type
 */
export function loadList(list: Character[] | List, OG_LIST: React.MutableRefObject<CharListAndNull>, setFilteredList: StateSet<CharListAndNull>, filters: React.MutableRefObject<Filters>, listType?: ListName) {
    if (Array.isArray(list)) {
        console.log(`Loading legacy custom list with ${list.length} characters`);
        OG_LIST.current = list;
        setFilteredList(list);
        return;
    }

    if (listType != 'custom' && !list.version)
        list.version = LIST_LATEST_VERSION; // Assume builtin lists are latest version
    console.log(`Loading list "${listType}" with version ${list.version ?? 1}`);
    switch (list.version ?? 1) {
        case 1: {
            OG_LIST.current = list.list;
            filters.current = list.filters ?? {};
            filterList(OG_LIST.current, setFilteredList, filters.current);
            break;
        }
        default: {
            console.warn(`Invalid version "${list.version}" for list "${listType}"`);
            alert(`Invalid list version: ${list.version}`);
            OG_LIST.current = [];
            filters.current = {};
            filterList(OG_LIST.current, setFilteredList, filters.current);
        }
    }
}

// https://stackoverflow.com/a/1284335/9421414
export function EasterDate(Y) {
    const C = Math.floor(Y / 100);
    const N = Y - 19 * Math.floor(Y / 19);
    const K = Math.floor((C - 17) / 25);
    let I = C - Math.floor(C / 4) - Math.floor((C - K) / 3) + 19 * N + 15;
    I = I - 30 * Math.floor((I / 30));
    I = I - Math.floor(I / 28) * (1 - Math.floor(I / 28) * Math.floor(29 / (I + 1)) * Math.floor((21 - N) / 11));
    let J = Y + Math.floor(Y / 4) + I + 2 - C + Math.floor(C / 4);
    J = J - 7 * Math.floor(J / 7);
    const L = I - J;
    const M = 3 + Math.floor((L + 40) / 44);
    const D = L + 28 - 31 * Math.floor(M / 4);

    return { month: M, day: D };
}
