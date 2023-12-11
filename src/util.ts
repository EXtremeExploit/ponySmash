import React from 'react';


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


export function filterList(data: CharListAndNull, setFilteredOrderedList: React.Dispatch<React.SetStateAction<CharListAndNull>>, filterProps: {
    showEqg: boolean, setShowEqg: React.Dispatch<React.SetStateAction<boolean>>,
    showUnderage: boolean, setShowUnderage: React.Dispatch<React.SetStateAction<boolean>>,
    showFemales: boolean, setShowFemales: React.Dispatch<React.SetStateAction<boolean>>,
    showMales: boolean, setShowMales: React.Dispatch<React.SetStateAction<boolean>>,
    showCommunity: boolean, setShowCommunity: React.Dispatch<React.SetStateAction<boolean>>
}) {
    if (data == null) return;
    setFilteredOrderedList((data as Character[]).filter((e) => {
        if (e.eqg && !filterProps.showEqg) return false;
        if (e.filly && !filterProps.showUnderage) return false;
        if (e.gender === 'female' && !filterProps.showFemales) return false;
        if (e.gender === 'male' && !filterProps.showMales) return false;
        if (e.community && !filterProps.showCommunity) return false;
        return true;
    }));
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
export type List = 'default' | 'custom';
export type GameState = 'menu' | 'ingame' | 'end';
