import React from 'react';
import { CharListAndNull, Filters, ListName } from './util.ts';
import Lists from './Lists.ts';

function ListType(props: {
    OG_LIST: React.MutableRefObject<CharListAndNull>,
    setFilteredOrderedList: React.Dispatch<React.SetStateAction<CharListAndNull>>,
    setType: React.Dispatch<React.SetStateAction<ListName>>,
    setFilters: React.Dispatch<React.SetStateAction<Filters>>,
    listType: ListName
}) {
    function changedList(ev: React.ChangeEvent<HTMLSelectElement>) {
        props.OG_LIST.current = null;
        props.setFilteredOrderedList(null);
        props.setType(ev.target.value as ListName);
        props.setFilters(Lists[ev.target.value as ListName].filters);
    }

    return (
        <>
            <p>List: <select id="list-type" onChange={changedList} value={props.listType}>
                {
                    Object.entries(Lists).map((l) => <option key={l[0] + 'list-type'} value={l[0]}>{l[1].name}</option>)
                }
            </select>
            </p>
            <br />
        </>);
}

export default ListType;
