import React, { useState } from "react";
import { List, filterList } from "./util.ts";
import DefaultOptions from "./DefaultOptions.tsx";
import CustomOptions from "./CustomOptions.tsx";
import './MenuOptions.css';

function MenuOptions(props: {
    FilterProps: {
        showEqg, setShowEqg,
        showUnderage, setShowUnderage,
        showMales, setShowMales,
        showCommunity, setShowCommunity,
    },
    listType: List,
    isLoadingList: boolean,
    setIsLoadingList: React.Dispatch<React.SetStateAction<boolean>>,
    OG_LIST, setOG_LIST,
    filteredOrderedList,
    setFilteredOrderedList
}) {
    const [shouldReloadList, setShouldReloadList] = useState(false);

    if (shouldReloadList) {
        filterList(props.OG_LIST, props.setFilteredOrderedList, props.FilterProps);
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
