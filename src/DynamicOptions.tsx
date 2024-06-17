import React from 'react';
import { CharListAndNull, ListProps, StateSet } from './types.ts';
import { filterList } from './util.ts';

function DynamicOptions(props: {
    listProps: React.MutableRefObject<ListProps>,
    OG_LIST: React.MutableRefObject<CharListAndNull>,
    setFilteredList: StateSet<CharListAndNull>
}) {
    return (<>
        {
            Object.entries(props.listProps.current.filters).map((f) => (
                <p key={f[0] + '-p'} className='menu-option'>
                    {f[1].text}
                    <input key={f[0] + '-input'} type='checkbox' className='menu-checkbox' id={f[0]} checked={f[1].value} onChange={(ev) => {
                        props.listProps.current.filters[ev.target.id].value = !props.listProps.current.filters[ev.target.id].value;
                        filterList(props.OG_LIST.current, props.setFilteredList, props.listProps.current);
                    }} />
                </p>
            ))
        }
    </>);
}


export default DynamicOptions;
