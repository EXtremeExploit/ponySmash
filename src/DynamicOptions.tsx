import React from 'react';
import { Filters, StateSet } from './types.ts';

function DynamicOptions(props: {
    filters: Filters,
    setFilters: StateSet<Filters>,
    setShouldReloadList: StateSet<boolean>
}) {
    return (<>
        {
            Object.entries(props.filters).map((f) => (
                <p key={f[0] + '-p'} className='menu-option'>
                    {f[1].text}
                    <input key={f[0] + '-input'} type='checkbox' className='menu-checkbox' id={f[0]} checked={f[1].value} onChange={(ev) => {
                        props.filters[ev.target.id].value = !props.filters[ev.target.id].value;
                        props.setFilters(props.filters);
                        props.setShouldReloadList(true);
                    }} />
                </p>
            ))
        }
    </>);
}


export default DynamicOptions;
