import React from 'react';
import { CharListAndNull, ListName } from './types.ts';
import './css/CharactersPreviewCount.css';

function getCharsCount(isLoadingList: boolean, listType: ListName, OG_LIST: CharListAndNull, filteredOrderedList: CharListAndNull) {
    if (isLoadingList) return 'Loading...';
    switch (listType) {
        case 'custom': {
            if (OG_LIST == null || OG_LIST.length === 0 || filteredOrderedList == null || filteredOrderedList.length === 0)
                return 'Not loaded/0';

            return `${filteredOrderedList.length}/${OG_LIST.length}`;
        }
        default: {
            if (OG_LIST == null) return '???/???';
            if (filteredOrderedList == null) return '???/???';
            return `${filteredOrderedList.length}/${OG_LIST.length}`;
        }
    }
}

export function CharactersPreviewCount(props: { isLoadingList: boolean, listType: ListName, OG_LIST: CharListAndNull, filteredOrderedList: CharListAndNull }) {
    return (
        <>
            <p id="characters-preview-count">Characters: {getCharsCount(props.isLoadingList, props.listType, props.OG_LIST, props.filteredOrderedList)}</p>
            <br />
        </>
    );
}
export default CharactersPreviewCount;
