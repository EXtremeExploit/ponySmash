import React, { useEffect, useState } from "react";

function ButtonsHolder(props: { isFilly: boolean | undefined, smashClick: (ev?: React.MouseEvent<HTMLElement>) => boolean, passClick: (ev?: React.MouseEvent<HTMLElement>) => boolean }) {
    const [smashButtonAnimated, setSmashButtonAnimated] = useState(false);
    const [passButtonAnimated, setPassButtonAnimated] = useState(false);


    function smashClick(ev?: React.MouseEvent<HTMLElement>) {
        if (props.smashClick(ev)) {
            setSmashButtonAnimated(false);
            setTimeout(() => {
                setSmashButtonAnimated(true);
            }, 0);
        }
    }

    function passClick(ev?: React.MouseEvent<HTMLElement>) {
        if (props.passClick(ev)) {
            setPassButtonAnimated(false);
            setTimeout(() => {
                setPassButtonAnimated(true);
            }, 0);
        }
    }


    useEffect(() => {
        function handleKeyDown(e) {
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
        }
    });


    return (
        <div id="buttons-holder">
            <div className={'button smash-button ' + (smashButtonAnimated ? 'smash-button-anim' : '')} onClick={smashClick}>
                {props.isFilly ? 'Cute!' : 'SMASH!'} (←)
            </div>
            <div className={'button pass-button ' + (passButtonAnimated ? 'pass-button-anim' : '')} onClick={passClick}>
                {props.isFilly ? 'Not cute' : 'Pass'} (→)
            </div>
        </div>
    );
}

export default ButtonsHolder;
