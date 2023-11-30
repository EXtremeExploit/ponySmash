import React from "react";
import { CharListAndNull, List } from "./util";

function ListType(props: {
    setOG_LIST: React.Dispatch<React.SetStateAction<CharListAndNull>>,
    setFilteredOrderedList: React.Dispatch<React.SetStateAction<CharListAndNull>>
    setType: React.Dispatch<React.SetStateAction<List>>
    listType: List,
}) {
    function changedList(ev: React.ChangeEvent<HTMLSelectElement>,) {
        props.setOG_LIST(null);
        props.setFilteredOrderedList(null);
        props.setType(ev.target.value as List);
    }

    return (
        <>
            <select id="list-type" onChange={changedList} value={props.listType}>
                <option value="default">Default</option>
                <option value="custom">Custom...</option>
            </select>
        </>)
}

export default ListType;
