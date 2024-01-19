import React, { useState } from 'react';
import { CharListAndNull, Filters, ListName, filterList } from './util.ts';
import DynamicOptions from './DynamicOptions.tsx';
import CustomOptions from './CustomOptions.tsx';
import './css/MenuOptions.css';
import Lists from './Lists.ts';

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
        filterList(props.OG_LIST.current, props.setFilteredOrderedList, props.filters, Lists[props.listType].filterFunc);
        setShouldReloadList(false);
    }

    return (
        <>
            <div id="menu-options">
                {
                    (() => {
                        switch (props.listType) {
                            case 'custom': return (<CustomOptions key='customOptions' {...props} />);
                            default: return (<DynamicOptions key='dynamicOptions' filters={props.filters} setFilters={props.setFilters} setShouldReloadList={setShouldReloadList} />);
                        }
                    })()
                }
            </div>
            <br />
        </>
    );
}

export default MenuOptions;
