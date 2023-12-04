import React from "react";
import { Character, List } from "./util.ts";
import PonyContainer from "./SmashesContainer.tsx";
import ShameText from "./ShameText.tsx";

function EndScreen(props: { smashes: Character[], list: Character[], listType: List }) {
    return (
        <>
            <p className='pony-name'>Its over!, You would smash{props.smashes.filter((e) => e.filly === true).length > 0 ? ' or call cute ' : ''} {props.smashes.length} out of {props.list.length} characters.</p>
            {
                props.listType === 'default' ?
                    <>
                        <ShameText smashes={props.smashes} list={props.list} />
                        <br />
                        <p>If you want to add a character or contribute, read the README on GitHub (its at the bottom of the page)</p>
                    </> : null
            }
            <PonyContainer smashes={props.smashes} />
        </>
    )
}

export default EndScreen;
