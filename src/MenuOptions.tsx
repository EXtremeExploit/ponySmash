import React, { useState } from 'react';
import { CharListAndNull, List, filterList } from './util.ts';
import DefaultOptions from './DefaultOptions.tsx';
import CustomOptions from './CustomOptions.tsx';
import './css/MenuOptions.css';

function MenuOptions(props: {
    FilterProps: {
        showEqg: boolean, setShowEqg: React.Dispatch<React.SetStateAction<boolean>>,
        showUnderage: boolean, setShowUnderage: React.Dispatch<React.SetStateAction<boolean>>,
        showFemales: boolean, setShowFemales: React.Dispatch<React.SetStateAction<boolean>>,
        showMales: boolean, setShowMales: React.Dispatch<React.SetStateAction<boolean>>,
        showCommunity: boolean, setShowCommunity: React.Dispatch<React.SetStateAction<boolean>>
    },
    listType: List,
    isLoadingList: boolean,
    setIsLoadingList: React.Dispatch<React.SetStateAction<boolean>>,
    OG_LIST: React.MutableRefObject<CharListAndNull>,
    filteredOrderedList,
    setFilteredOrderedList
}) {
    const [shouldReloadList, setShouldReloadList] = useState(false);

    if (shouldReloadList) {
        filterList(props.OG_LIST.current, props.setFilteredOrderedList, props.FilterProps);
        setShouldReloadList(false);
    }

    return (
        <>
            <div id="menu-options">
                {
                    (() => {
                        switch (props.listType) {
                            case 'default': return (<DefaultOptions FilterProps={props.FilterProps} setShouldReloadList={setShouldReloadList} />);
                            case 'custom': return (<CustomOptions key='customOptions' {...props} />);
                        }
                    })()
                }
            </div>
            <br />
        </>
    );
}

export default MenuOptions;
