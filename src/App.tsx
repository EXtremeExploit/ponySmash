import React, { useEffect, useState } from 'react';

import Footer from './Footer.tsx';


function getJSON(url: string, callback: (err: number | null, data: any) => void) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function () {
        var status = xhr.status;
        if (status === 200) {
            callback(null, xhr.response);
        } else {
            callback(status, xhr.response);
        }
    };
    xhr.send();
};

type Character = {
    name: string;
    img: string;
    filly?: boolean;
    eqg?: boolean
    gender?: string
    community?: boolean;
};
type CharListAndNull = Character[] | null;
type ListType = 'default' | 'custom';
type GameState = 'menu' | 'ingame' | 'end';

function App() {
    const [i, setI] = useState(0);
    const [listType, setType] = useState<ListType>('default');
    const [OG_LIST, setOG_LIST] = useState<CharListAndNull>(null);
    const [filteredOrderedList, setFilteredOrderedList] = useState<CharListAndNull>(null);
    const [list, setList] = useState<Character[]>([]);
    const [gameState, setGameState] = useState<GameState>('menu');
    const [isLoadingList, setIsLoadingList] = useState(true);

    const [smashes, setSmashes] = useState<Character[]>([]);

    const [customListURL, setCustomListURL] = useState('');

    const [smashButtonAnimated, setSmashButtonAnimated] = useState(false);
    const [passButtonAnimated, setPassButtonAnimated] = useState(false);

    // Options
    const [showEqg, setShowEqg] = useState(true);
    const [showUnderage, setShowUnderage] = useState(false);
    const [showMales, setShowMales] = useState(true);
    const [showCommunity, setShowCommunity] = useState(true);

    // These are needed for using the states in the current render
    let currentFilterShowEqg = showEqg;
    let currentFilterShowUnderage = showUnderage;
    let currentFilterShowMales = showMales;
    let currentFilterShowCommunity = showCommunity;

    useEffect(() => {
        function handleKeyDown(e) {
            if (e.repeat)
                return;

            if (gameState === 'ingame') {
                switch (e.key) {
                    case 'ArrowLeft': smashClick(); break;
                    case 'ArrowRight': passClick(); break;
                }
            }

            if (i >= list.length)
                document.removeEventListener('keydown', handleKeyDown);
        }

        document.addEventListener('keydown', handleKeyDown);

        // Don't forget to clean up
        return function cleanup() {
            document.removeEventListener('keydown', handleKeyDown);
        }
    });

    function filterList(data: CharListAndNull) {
        if (data == null) return;
        setFilteredOrderedList((data as Character[]).filter((e) => {
            if (e.eqg && !currentFilterShowEqg) return false;
            if (e.filly && !currentFilterShowUnderage) return false;
            if (e.gender === 'male' && !currentFilterShowMales) return false;
            if (e.community && !currentFilterShowCommunity) return false;
            return true;
        }));
    }

    // Return true if there is no next character
    function endingHandler(): boolean {
        if (i === list.length - 1) {
            setGameState('end');
            return true;
        }
        return false;
    }

    function smashClick(ev?: React.MouseEvent<HTMLElement>) {

        smashes.push(list[i]);
        setSmashes(smashes);

        if (endingHandler()) return;
        setSmashButtonAnimated(false);
        setSmashButtonAnimated(true);
        setPassButtonAnimated(false);
        setI(i + 1);
    }

    function passClick(ev?: React.MouseEvent<HTMLElement>) {
        if (endingHandler()) return;
        setPassButtonAnimated(false);
        setPassButtonAnimated(true);
        setSmashButtonAnimated(false);
        setI(i + 1);
    }


    function ButtonsHolder() {
        return (
            <div id="buttons-holder">
                <div className={'button smash-button ' + (smashButtonAnimated ? 'smash-button-anim' : '')} onClick={smashClick}>
                    {list[i].filly ? 'Cute!' : 'SMASH!'} (←)
                </div>
                <div className={'button pass-button ' + (passButtonAnimated ? 'pass-button-anim' : '')} onClick={passClick}>
                    {list[i].filly ? 'Not cute' : 'Pass'} (→)
                </div>
            </div>
        );
    }


    function PageInner() {
        switch (listType) {
            case 'default': {
                if (OG_LIST !== null && filteredOrderedList !== null) break; // List is already loaded
                if (OG_LIST == null) {
                    getJSON('/lists/default.json', (err, data) => {
                        if (err !== null) {
                            alert('Something went wrong: ' + err);
                        } else {
                            setOG_LIST(data as CharListAndNull);
                        }
                        if (data != null && filteredOrderedList == null) {
                            filterList(data as CharListAndNull);
                        }
                        setIsLoadingList(false);
                    });
                }


                break;
            }
            // If more lists get added, this is where they should go
            case 'custom': {
                break;
            }
        }


        function ListType() {
            function changedList(ev: React.ChangeEvent<HTMLSelectElement>) {
                setOG_LIST(null);
                setFilteredOrderedList(null);
                setType(ev.target.value as ListType);
                ev.target.value = listType;
            }

            return (
                <>
                    <select id="list-type" onChange={changedList} value={listType}>
                        <option value="default">Default</option>
                        <option value="custom">Custom...</option>
                    </select>
                </>)
        }

        function MenuOptions() {
            function MenuOptionChange(ev: React.ChangeEvent<HTMLInputElement>) {
                switch (ev.target.id) {
                    case 'show-eqg': {
                        setShowEqg(!showEqg);
                        currentFilterShowEqg = !currentFilterShowEqg;
                        break;
                    }
                    case 'show-underage': {
                        setShowUnderage(!showUnderage);
                        currentFilterShowUnderage = !currentFilterShowUnderage;
                        break;
                    }
                    case 'show-males': {
                        setShowMales(!showMales);
                        currentFilterShowMales = !currentFilterShowMales;
                        break;
                    }
                    case 'show-community': {
                        setShowCommunity(!showCommunity);
                        currentFilterShowCommunity = !currentFilterShowCommunity;
                        break;
                    }
                }
                filterList(OG_LIST);

            }

            function defaultOptions() {
                return (<>
                    <p className='menu-option'>
                        Show EQG
                        <input type='checkbox' className='menu-checkbox' id='show-eqg' checked={showEqg} onChange={MenuOptionChange} />
                    </p>
                    <p className='menu-option'>
                        Show underage
                        <input type='checkbox' className='menu-checkbox' id='show-underage' checked={showUnderage} onChange={MenuOptionChange} />
                    </p>
                    <p className='menu-option'>
                        Show males
                        <input type='checkbox' className='menu-checkbox' id='show-males' checked={showMales} onChange={MenuOptionChange} />
                    </p>
                    <p className='menu-option'>
                        Show community characters
                        <input type='checkbox' className='menu-checkbox' id='show-community' checked={showCommunity} onChange={MenuOptionChange} />
                    </p>
                </>)
            };
            function customOptions() {
                function loadCustomList(ev: React.MouseEvent<HTMLButtonElement>) {
                    setIsLoadingList(true);
                    if (isLoadingList === true) return; // Load the first list first
                    getJSON(`https://api.allorigins.win/get?url=${encodeURIComponent(customListURL)}`, (err, data) => {
                        if (err !== null) {
                            alert('Something went wrong: ' + err);
                        } else {
                            console.log(data);
                            setOG_LIST(JSON.parse(data.contents as string) as CharListAndNull);
                        }
                        if (data.contents != null && filteredOrderedList == null) {
                            console.log(data);
                            filterList(JSON.parse(data.contents as string) as CharListAndNull);
                        }
                        setIsLoadingList(false);
                    });
                }

                const customUrlChangeHandler = (ev: React.ChangeEvent<HTMLInputElement>) => {
                    setCustomListURL(ev.target.value)
                }

                return (<>
                    <input placeholder="URL to JSON list" id='input' value={customListURL} onChange={customUrlChangeHandler} />
                    <button onClick={loadCustomList}>Load</button>
                    <br></br>
                    <a href="https://github.com/EXtremeExploit/ponySmash#custom-lists">What is this?</a>
                </>);
            };

            return (
                <>
                    <div id="menu-options">
                        {
                            listType === 'default' ? defaultOptions() : customOptions()
                        }
                    </div>
                    <br></br>
                </>
            );
        }

        function CharactersPreviewCount() {
            function getCharsCount() {
                if (isLoadingList) return 'Loading...';
                switch (listType) {
                    case 'default': {
                        if (OG_LIST == null) return '???/???';
                        if (filteredOrderedList == null) return '???/???';
                        return `${filteredOrderedList.length}/${OG_LIST.length}`;
                    }
                    case 'custom': {
                        if (OG_LIST == null || OG_LIST.length === 0)
                            return 'Not loaded/0';

                        return `${OG_LIST.length}`;
                    }
                }
            }
            return (<p id="characters-preview-count">Characters: {getCharsCount()}</p>)
        }

        function startButtonClick(ev: React.MouseEvent<HTMLButtonElement>) {
            if (filteredOrderedList == null) {
                alert('wat');
                return;
            }

            setList(filteredOrderedList.sort((a, b) => 0.5 - Math.random()));
            setGameState('ingame');
        }

        function ShameText() {

            function getShameText() {
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
            const [actualText] = useState(getShameText());

            return (<p className='pony-name'>
                {actualText}
            </p>)

        }

        return (
            <div className="page-inner" style={gameState === 'end' ? { overflowY: 'scroll', display: 'inline-grid', justifyItems: 'center' } : {}}>
                {
                    gameState === 'menu' ? (
                        <>
                            <p className="title">MLP: FiM Smash or Pass</p>
                            <p>List:
                                <ListType />
                            </p>
                            <br></br>
                            <MenuOptions />
                            <CharactersPreviewCount />
                            <br></br>
                            <br></br>
                            <button id="start" className="start-button" onClick={startButtonClick}>Start</button>
                        </>
                    ) : (
                        gameState === 'ingame' ? (
                            <>
                                <p className='pony-name'>{list[i].name}</p>
                                <img className='game-img' alt={list[i].name} src={list[i].img}></img>
                            </>
                        ) : (
                            // TODO
                            <>
                                <p className='pony-name'>Its over!, You would smash{smashes.filter((e) => e.filly === true).length > 0 ? ' or call cute' : ''} {smashes.length} out of {list.length} characters.</p>
                                {listType === 'default' ?
                                    <>
                                        <ShameText />
                                        <br></br>
                                        <p>If you want to add a character or contribute, read the README on GitHub (its at the bottom of the page)</p>
                                    </> : null}
                                <div className='pony-container'>{
                                    smashes.map((c) => (
                                        <img className='pony-list-img' src={c.img} alt={c.name} title={c.name}></img>
                                    ))
                                }</div>
                            </>
                        )
                    )
                }
            </div>
        );
    }

    return (
        <>
            {gameState === 'ingame' ? <ButtonsHolder /> : null}
            <PageInner />
            <Footer />
        </>
    );
}


export default App;
