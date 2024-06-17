import React from 'react';
import { CharListAndNull, ListName, ListProps, Ref, StateSet } from './types.ts';
import Lists from './Lists.ts';
import { loadList } from './util.ts';

function ListType(props: {
    OG_LIST: React.MutableRefObject<CharListAndNull>,
    setFilteredList: StateSet<CharListAndNull>,
    listProps: React.MutableRefObject<ListProps>,
    listType: Ref<ListName>
}) {
    function changedList(ev: React.ChangeEvent<HTMLSelectElement>) {
        props.listType.current = ev.target.value as ListName;
        loadList(Lists[ev.target.value as ListName], props.OG_LIST, props.setFilteredList, props.listProps);
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
