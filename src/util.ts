
export function getJSON(url: string, callback: (err: number | null, data: any) => void) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function () {
        var status = xhr.status;
        if (status === 200) {
            callback(null, xhr.response);
        } else {
            callback(status, xhr.response);
        }
    };
    xhr.send();
};

export type Character = {
    name: string;
    img: string;
    filly?: boolean;
    eqg?: boolean
    gender?: string
    community?: boolean;
};
export type CharListAndNull = Character[] | null;
export type ListType = 'default' | 'custom';
export type GameState = 'menu' | 'ingame' | 'end';
