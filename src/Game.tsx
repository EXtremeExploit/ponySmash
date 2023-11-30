import React, { useEffect } from "react";
import { Character } from "./util";

function Game(props: { i: number, list: Character[] }) {
    useEffect(() => {
        let cachedImgIndex = 0;
        let cachedImg = new Image();
        cachedImg.addEventListener('load', () => {
            if (cachedImgIndex === props.list.length - 1) return;
            cachedImg.src = props.list[++cachedImgIndex].img;
        });
        cachedImg.src = props.list[cachedImgIndex].img;
    }, [props.list]);

    return (<>
        <p className='pony-name'>{props.list[props.i].name}</p>
        <img className='game-img' alt={props.list[props.i].name} src={props.list[props.i].img}></img>
    </>);
}
export default Game;