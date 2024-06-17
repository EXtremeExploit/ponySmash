import React from 'react';
import { CharListAndNull, ListName, ListProps, Ref, StateSet } from './types.ts';
import DynamicOptions from './DynamicOptions.tsx';
import CustomOptions from './CustomOptions.tsx';
import './css/MenuOptions.css';

function MenuOptions(props: {
    listProps: React.MutableRefObject<ListProps>,
    listType: Ref<ListName>,
    isLoadingList: boolean,
    setIsLoadingList: StateSet<boolean>,
    OG_LIST: React.MutableRefObject<CharListAndNull>,
    filteredList: CharListAndNull,
    setFilteredList: StateSet<CharListAndNull>
}) {
    return (
        <>
            <div id="menu-options">
                {
                    props.listType.current == 'custom' ? (<CustomOptions key='customOptions' {...props} />) : null
                }
                <DynamicOptions key='dynamicOptions' {...props} />
            </div>
            <br />
        </>
    );
}

export default MenuOptions;
