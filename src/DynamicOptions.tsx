import React from 'react';
import { Filters } from './util.ts';

function DynamicOptions(props: {
    filters: Filters,
    setFilters: React.Dispatch<React.SetStateAction<Filters>>,
    setShouldReloadList: React.Dispatch<React.SetStateAction<boolean>>
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
