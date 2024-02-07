import React from 'react';
import Lists from './Lists.ts';

export interface CORSProxyResponse {
    contents: string | null;
    status: {
        url: string,
        content_type: string,
        http_code: number,
        response_time: number,
        content_length: number
    };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getJSON(url: string, callback: (err: number | null, data: CORSProxyResponse | any) => void) {
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


export interface Character {
    name: string;
    img: string;
    filly?: boolean;
    eqg?: boolean;
    gender?: 'female' | 'male' | null;
    community?: boolean;
    smashText?: string;
    passText?: string;
}

export type CharListAndNull = Character[] | null;
export type GameState = 'menu' | 'ingame' | 'end';

export interface List {
    readonly name: string;
    readonly list: Character[];
    readonly filters: Filters;
    getShameText: (smashes: Character[], list: Character[]) => string;
}

export type FilterLogicTypeNoArg = 'equals' | 'notEquals';
export type FilterLogicTypeWithArg = 'startsWith' | 'endsWith' | 'includes';

export interface FilterLogicNoArg {
    charProp: keyof Character;
    type: FilterLogicTypeNoArg;
    against: boolean | string | number | null;
}


export interface FilterLogicWithArg {
    charProp: keyof Character;
    type: FilterLogicTypeWithArg;
    arg: string;
    against: boolean | string | number | null;
}


export interface Filter {
    readonly text: string;
    readonly logic: FilterLogicNoArg | FilterLogicWithArg;
    value: boolean;
}

export type ListName = keyof (typeof Lists);
export type Filters = Record<string, Filter>;

export function filterList(data: CharListAndNull, setFilteredOrderedList: React.Dispatch<React.SetStateAction<CharListAndNull>>, filters: Filters) {
    if (data == null) return;
    setFilteredOrderedList((data as Character[]).filter((character) => {
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
            }

            retVal = !retVal;

            if (retVal == false) return false;
        }
        return true;
    }));
}
