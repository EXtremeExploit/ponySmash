import React from 'react';
import { version } from './constants.tsx';
import { EventDecorations, EventEastersData, EventStarWarsData } from './types.ts';


function GetCredits(props:
    {
        event: EventDecorations,
        eventData: object
    }): JSX.Element {
    let creditsUrl = '';
    switch (props.event) {
        case 'none': break;
        case 'aprilFools': break;
        case 'halloween': creditsUrl = 'https://www.deviantart.com/dsana/art/The-Witch-and-Her-Black-Cat-641718385'; break;
        case 'xmas': creditsUrl = 'https://www.deviantart.com/ohemo/art/Derpy-Christmas-502586923'; break;
        case 'newYear': creditsUrl = 'https://www.deviantart.com/ironm17/art/New-Year-722220054'; break;
        case 'bday': creditsUrl = 'https://derpibooru.org/images/2185632'; break;
        case 'valentines': creditsUrl = 'https://derpibooru.org/images/212580'; break;
        case 'starWars': {
            switch ((props.eventData as EventStarWarsData).imgName) {
                case 'fluttershy': creditsUrl = 'https://derpibooru.org/images/1078924'; break;
                case 'starlight': creditsUrl = 'https://derpibooru.org/images/1017669'; break;
            }
        }
        case 'easters': {
            switch ((props.eventData as EventEastersData).imgNum) {
                case 0: creditsUrl = 'https://www.deviantart.com/up1ter/art/Derpy-Easter-Bunny-294745771'; break;
                case 1: creditsUrl = 'https://www.deviantart.com/ace-play/art/Easter-Ponies-Pinkie-Pie-837591200'; break;
                case 2: creditsUrl = 'https://www.deviantart.com/ace-play/art/Easter-Ponies-Fluttershy-837592150'; break;
                case 3: creditsUrl = 'https://www.deviantart.com/ace-play/art/Easter-Ponies-Applejack-837592195'; break;
                case 4: creditsUrl = 'https://www.deviantart.com/ace-play/art/Easter-Ponies-Rainbow-Dash-837592227'; break;
                case 5: creditsUrl = 'https://www.deviantart.com/ace-play/art/Easter-Ponies-Rarity-837592384'; break;
                case 6: creditsUrl = 'https://www.deviantart.com/ace-play/art/Easter-Ponies-Twilight-Sparkle-837592431'; break;
                case 7: creditsUrl = 'https://derpibooru.org/images/3331498'; break;
            }
            break;
        }
    }

    if (creditsUrl == '')
        return <></>;
    else {
        return <> / <a href={creditsUrl}>Artwork Credits</a></>;
    }
}

export function Footer(props: {
    event: EventDecorations,
    eventData: object
}) {
    return (
        <footer id='footer'>
            <p id='footer-p'>
                <a href="https://github.com/EXtremeExploit/ponySmash/releases">{version}</a> /
                Site by <a href="https://github.com/EXtremeExploit/">EXtremeExploit</a> /
                Give me a star on <a href="https://github.com/EXtremeExploit/ponySmash">GitHub</a> /&nbsp;
                <a href="https://github.com/EXtremeExploit/ponySmash/blob/master/LICENSE">License</a>
                <GetCredits event={props.event} eventData={props.eventData} />
            </p>
        </footer>
    );
}
