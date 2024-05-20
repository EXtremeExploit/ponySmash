import React from 'react';
import { CharListAndNull, Filters, StateSet } from './types.ts';
import { filterList } from './util.ts';

function DynamicOptions(props: {
    filters: React.MutableRefObject<Filters>,
    OG_LIST: React.MutableRefObject<CharListAndNull>,
    setFilteredList: StateSet<CharListAndNull>
}) {
    return (<>
        {
            Object.entries(props.filters.current).map((f) => (
                <p key={f[0] + '-p'} className='menu-option'>
                    {f[1].text}
                    <input key={f[0] + '-input'} type='checkbox' className='menu-checkbox' id={f[0]} checked={f[1].value} onChange={(ev) => {
                        props.filters.current[ev.target.id].value = !props.filters.current[ev.target.id].value;
                        filterList(props.OG_LIST.current, props.setFilteredList, props.filters.current);
                    }} />
                </p>
            ))
        }
    </>);
}


export default DynamicOptions;
