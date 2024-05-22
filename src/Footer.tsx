import React from 'react';
import { version } from './constants.tsx';
import { EventDecorations } from './types.ts';


function GetCredits(props: { event: EventDecorations }): JSX.Element {
    let creditsUrl = '';
    switch (props.event) {
        case 'none': creditsUrl = ''; break;
        case 'halloween': creditsUrl = 'https://www.deviantart.com/dsana/art/The-Witch-and-Her-Black-Cat-641718385'; break;
        case 'xmas': creditsUrl = 'https://www.deviantart.com/ohemo/art/Derpy-Christmas-502586923'; break;
        case 'newYear': creditsUrl = 'https://www.deviantart.com/ironm17/art/New-Year-722220054'; break;
    }

    if (creditsUrl == '')
        return <></>;
    else {
        return <a href={creditsUrl}>Artwork Credits</a>;
    }
}

export function Footer(props: {
    event: EventDecorations
}) {
    return (
        <footer id='footer'>
            <p id='footer-p'>
                <a href="https://github.com/EXtremeExploit/ponySmash/releases">{version}</a> /
                Site by <a href="https://github.com/EXtremeExploit/">EXtremeExploit</a> /
                Give me a star on <a href="https://github.com/EXtremeExploit/ponySmash">GitHub</a> /&nbsp;
                <a href="https://github.com/EXtremeExploit/ponySmash/blob/master/LICENSE">License</a> /&nbsp;
                <GetCredits event={props.event} />
            </p>
        </footer>
    );
}
