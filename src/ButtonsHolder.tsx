import React, { useEffect, useState, useRef } from 'react';
import { Character } from './types.ts';
import './css/ButtonsHolder.css';

function ButtonsHolder(props: {
    Character: Character,
    smashClick: (ev?: React.MouseEvent<HTMLElement>) => boolean,
    passClick: (ev?: React.MouseEvent<HTMLElement>) => boolean
}) {
    const [smashButtonAnimated, setSmashButtonAnimated] = useState(false);
    const [passButtonAnimated, setPassButtonAnimated] = useState(false);

    const smashStreak = useRef(0);
    const passStreak = useRef(0);

    function smashClick(ev?: React.MouseEvent<HTMLElement>) {
        if (props.smashClick(ev)) {
            setSmashButtonAnimated(false);
            setTimeout(() => {
                setSmashButtonAnimated(true);
            }, 0);
            smashStreak.current++;
            passStreak.current = 0;
        }
    }

    function passClick(ev?: React.MouseEvent<HTMLElement>) {
        if (props.passClick(ev)) {
            setPassButtonAnimated(false);
            setTimeout(() => {
                setPassButtonAnimated(true);
            }, 0);
            passStreak.current++;
            smashStreak.current = 0;
        }
    }

    useEffect(() => {
        function handleKeyDown(e: KeyboardEvent) {
            if (e.repeat)
                return;

            switch (e.key) {
                case 'ArrowLeft': smashClick(); break;
                case 'ArrowRight': passClick(); break;
            }
        }

        document.addEventListener('keydown', handleKeyDown);

        // Don't forget to clean up
        return function cleanup() {
            document.removeEventListener('keydown', handleKeyDown);
        };
    });

    return (
        <div id="buttons-holder">
            <div className={'button smash-button ' + (smashButtonAnimated ? 'smash-button-anim' : '')} onClick={smashClick}>
                {props.Character.smashText ?? (props.Character.filly ? 'Cute!' : 'SMASH!')} (←)
                <div className='button-combo'>{smashStreak.current}x</div>
            </div>
            <div className={'button pass-button ' + (passButtonAnimated ? 'pass-button-anim' : '')} onClick={passClick}>
                {props.Character.passText ?? (props.Character.filly ? 'Not cute' : 'Pass')} (→)
                <div className='button-combo'>{passStreak.current}x</div>
            </div>
        </div>
    );
}

export default ButtonsHolder;
