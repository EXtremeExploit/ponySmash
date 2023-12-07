import React from "react";

function MenuOptionChange(ev: React.ChangeEvent<HTMLInputElement>, props: {
    FilterProps: {
        showEqg: boolean, setShowEqg: React.Dispatch<React.SetStateAction<boolean>>,
        showUnderage: boolean, setShowUnderage: React.Dispatch<React.SetStateAction<boolean>>,
        showFemales: boolean, setShowFemales: React.Dispatch<React.SetStateAction<boolean>>,
        showMales: boolean, setShowMales: React.Dispatch<React.SetStateAction<boolean>>,
        showCommunity: boolean, setShowCommunity: React.Dispatch<React.SetStateAction<boolean>>,
    },
    setShouldReloadList: React.Dispatch<React.SetStateAction<boolean>>
}) {
    switch (ev.target.id) {
        case 'show-eqg': {
            props.FilterProps.setShowEqg(!props.FilterProps.showEqg);
            break;
        }
        case 'show-underage': {
            props.FilterProps.setShowUnderage(!props.FilterProps.showUnderage);
            break;
        }
        case 'show-females': {
            props.FilterProps.setShowFemales(!props.FilterProps.showFemales);
            break;
        }
        case 'show-males': {
            props.FilterProps.setShowMales(!props.FilterProps.showMales);
            break;
        }
        case 'show-community': {
            props.FilterProps.setShowCommunity(!props.FilterProps.showCommunity);
            break;
        }
    }
    props.setShouldReloadList(true);
}

function DefaultOptions(props: {
    FilterProps: {
        showEqg: boolean, setShowEqg: React.Dispatch<React.SetStateAction<boolean>>,
        showUnderage: boolean, setShowUnderage: React.Dispatch<React.SetStateAction<boolean>>,
        showFemales: boolean, setShowFemales: React.Dispatch<React.SetStateAction<boolean>>,
        showMales: boolean, setShowMales: React.Dispatch<React.SetStateAction<boolean>>,
        showCommunity: boolean, setShowCommunity: React.Dispatch<React.SetStateAction<boolean>>,
    },
    setShouldReloadList: React.Dispatch<React.SetStateAction<boolean>>
}) {
    return (<>
        <p className='menu-option'>
            Show EQG
            <input type='checkbox' className='menu-checkbox' id='show-eqg' checked={props.FilterProps.showEqg} onChange={(ev) => MenuOptionChange(ev, props)} />
        </p>
        <p className='menu-option'>
            Show underage
            <input type='checkbox' className='menu-checkbox' id='show-underage' checked={props.FilterProps.showUnderage} onChange={(ev) => MenuOptionChange(ev, props)} />
        </p>
        <p className='menu-option'>
            Show females
            <input type='checkbox' className='menu-checkbox' id='show-females' checked={props.FilterProps.showFemales} onChange={(ev) => MenuOptionChange(ev, props)} />
        </p>
        <p className='menu-option'>
            Show males
            <input type='checkbox' className='menu-checkbox' id='show-males' checked={props.FilterProps.showMales} onChange={(ev) => MenuOptionChange(ev, props)} />
        </p>
        <p className='menu-option'>
            Show community characters
            <input type='checkbox' className='menu-checkbox' id='show-community' checked={props.FilterProps.showCommunity} onChange={(ev) => MenuOptionChange(ev, props)} />
        </p>
    </>)
};


export default DefaultOptions;