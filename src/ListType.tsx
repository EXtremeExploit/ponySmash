import React from 'react';
import { CharListAndNull, Filters, ListName, Ref, StateSet } from './types.ts';
import Lists from './Lists.ts';
import { filterList } from './util.ts';

function ListType(props: {
    OG_LIST: React.MutableRefObject<CharListAndNull>,
    setFilteredOrderedList: StateSet<CharListAndNull>,
    filters: React.MutableRefObject<Filters>,
    listType: Ref<ListName>
}) {
    function changedList(ev: React.ChangeEvent<HTMLSelectElement>) {
        props.listType.current = ev.target.value as ListName;
        props.OG_LIST.current = Lists[ev.target.value as ListName].list;
        props.filters.current = Lists[ev.target.value as ListName].filters ?? {};
        filterList(props.OG_LIST.current, props.setFilteredOrderedList, props.filters.current);
    }

    return (
        <>
            <p>List: <select id="list-type" onChange={changedList} value={props.listType.current}>
                {
                    Object.entries(Lists).map((l) => <option key={l[0] + 'list-type'} value={l[0]}>{l[1].name}</option>)
                }
            </select>
            </p>
            <br />
        </>);
}

export default ListType;
