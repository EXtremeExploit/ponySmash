import React from "react";
import { Character } from "./util.ts";

function PonyContainer(props: { smashes: Character[] }) {
    return (<div className='pony-container'>{
        props.smashes.map((c) => (
            <img className='pony-list-img' key={c.name} src={c.img} alt={c.name} title={c.name}></img>
        ))
    }</div>)
}

export default PonyContainer;
