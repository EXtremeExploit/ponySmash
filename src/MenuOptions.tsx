import React, { useState } from 'react';
import { CharListAndNull, Filters, ListName } from './types.ts';
import { filterList } from './util.ts';
import DynamicOptions from './DynamicOptions.tsx';
import CustomOptions from './CustomOptions.tsx';
import './css/MenuOptions.css';

function MenuOptions(props: {
    filters: Filters,
    setFilters: React.Dispatch<React.SetStateAction<Filters>>,
    listType: ListName,
    isLoadingList: boolean,
    setIsLoadingList: React.Dispatch<React.SetStateAction<boolean>>,
    OG_LIST: React.MutableRefObject<CharListAndNull>,
    filteredOrderedList,
    setFilteredOrderedList
}) {
    const [shouldReloadList, setShouldReloadList] = useState(false);

    if (shouldReloadList) {
        filterList(props.OG_LIST.current, props.setFilteredOrderedList, props.filters);
        setShouldReloadList(false);
    }

    return (
        <>
            <div id="menu-options">
                {
                    props.listType == 'custom' ? (<CustomOptions key='customOptions' {...props} />) : null
                }
                <DynamicOptions key='dynamicOptions' filters={props.filters} setFilters={props.setFilters} setShouldReloadList={setShouldReloadList} />
            </div>
            <br />
        </>
    );
}

export default MenuOptions;
