
export function getJSON(url: string, callback: (err: number | null, data: any) => void) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function () {
        var status = xhr.status;
        callback(status, xhr.response);
    };
    xhr.onerror = (ev) => {
        callback(0, "");
    };
    xhr.send();
};


export function filterList(data: CharListAndNull, setFilteredOrderedList: React.Dispatch<React.SetStateAction<CharListAndNull>>, filterProps: {
    showEqg, setShowEqg,
    showUnderage, setShowUnderage,
    showMales, setShowMales,
    showCommunity, setShowCommunity,
}) {
    if (data == null) return;
    setFilteredOrderedList((data as Character[]).filter((e) => {
        if (e.eqg && !filterProps.showEqg) return false;
        if (e.filly && !filterProps.showUnderage) return false;
        if (e.gender === 'male' && !filterProps.showMales) return false;
        if (e.community && !filterProps.showCommunity) return false;
        return true;
    }));
}

export type Character = {
    name: string;
    img: string;
    filly?: boolean;
    eqg?: boolean
    gender?: string
    community?: boolean;
    smashText?: string;
    passText?: string;
};
export type CharListAndNull = Character[] | null;
export type List = 'default' | 'custom';
export type GameState = 'menu' | 'ingame' | 'end';
