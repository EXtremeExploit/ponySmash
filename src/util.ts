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


export function filterList(data: CharListAndNull, setFilteredOrderedList: React.Dispatch<React.SetStateAction<CharListAndNull>>, filters: Filters, filterFunc: null | ((c: Character, filters: Filters) => boolean)) {
    if (data == null) return;
    setFilteredOrderedList((data as Character[]).filter((e) => filterFunc == null ? true : filterFunc(e, filters)));
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
    filterFunc: null | ((c: Character, filters: Filters) => boolean);
    getShameText: (smashes: Character[], list: Character[]) => string;
}

export interface Filter {
    readonly text: string;
    value: boolean;
}

export type Filters = Record<string, Filter>;

export type ListName = keyof (typeof Lists);
