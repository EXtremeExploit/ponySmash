import React from 'react';
import { CharListAndNull, List } from './util.ts';

function ListType(props: {
    OG_LIST: React.MutableRefObject<CharListAndNull>,
    setFilteredOrderedList: React.Dispatch<React.SetStateAction<CharListAndNull>>,
    setType: React.Dispatch<React.SetStateAction<List>>,
    listType: List
}) {
    function changedList(ev: React.ChangeEvent<HTMLSelectElement>) {
        props.OG_LIST.current = null;
        props.setFilteredOrderedList(null);
        props.setType(ev.target.value as List);
    }

    return (
        <>
            <p>List: <select id="list-type" onChange={changedList} value={props.listType}>
                <option value="default">Default</option>
                <option value="custom">Custom...</option>
            </select>
            </p>
            <br />
        </>);
}

export default ListType;
