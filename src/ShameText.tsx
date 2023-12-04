import React, { useState } from "react";
import { Character } from "./util.ts";


function getShameText(smashes: Character[], list: Character[]) {
    if (smashes.length === 0) return 'Damn, not a single one.';

    if (smashes.length === 1 && (smashes[0].name === 'Tom' || smashes[0].name === 'Boulder')) return 'A ROCK. A FUCKING ROCK. HOW?!?!';

    if (smashes.length === 1) return `You are loyal to ${smashes[0].name}... I like it.`;
    if (smashes.length === 2 && smashes.filter((e) => e.filly === true).length === 0) return `So you want a threesome?`;
    if (smashes.length === 69) return `Nice.`;

    const percentage = Math.floor((smashes.length / list.length) * 100);

    if (percentage < 10) return 'Thats very few ponies, you have super high standards.';
    if (percentage < 33) return 'Not even one third, quality taste.';
    if (percentage < 50) return 'Thats decent. I guess...';
    if (percentage < 60) return 'Mares. Am I right?.';
    if (percentage < 75) return 'Thats a lot of smashing.';
    if (percentage < 90) return 'I\'m pretty sure you would be at it for days with this many smashes.';
    if (percentage < 100) return 'You are incredibly desperate for some smashing. You have absolutely no shame...';
    if (percentage === 100) return 'You are a true smasher. You would smash everything, including two rocks and a tree. I can\'t even begin to comprehend how mentally insane you are. You are definitely desperate for some smashing. Seek help';

    return '';
}

function ShameText(props: { smashes: Character[], list: Character[] }) {
    const [actualText] = useState(getShameText(props.smashes, props.list));

    return (<p className='pony-name'>
        {actualText}
    </p>)
}

export default ShameText;
