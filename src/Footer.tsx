import React from 'react';
import { version } from './constants.tsx';

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <p>
                    <a href="https://github.com/EXtremeExploit/ponySmash/releases">{version}</a> /
                    Site by <a href="https://github.com/EXtremeExploit/">EXtremeExploit</a> /
                    Give me a star on <a href="https://github.com/EXtremeExploit/ponySmash">GitHub</a>
                </p>
            </footer>
        );
    }
}

export default Footer;
