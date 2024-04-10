import Lists from './Lists.ts';

import { AriaAttributes, DOMAttributes } from 'react';

declare module 'react' {
    interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
        fetchPriority?: 'high' | 'low' | 'auto';
    }
}

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

export type StateSet<T> = React.Dispatch<React.SetStateAction<T>>;

export type CharListAndNull = Character[] | null;
export type GameState = 'menu' | 'ingame' | 'end';

export interface List {
    readonly name: string;
    readonly list: Character[];
    readonly filters: Filters;
    getShameText: (smashes: Character[], list: Character[]) => string;
    version?: number;
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
