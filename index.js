window.addEventListener('load', function () {
    new FastClick(document.body);
}, false);

function getJSON(url, callback) {
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

let OG_LIST;

let listType;
let filteredOrderedList;

let list;

let i = 0;

let smashes = [];

let lastSmashName = '';

function getShameText() {
    if (smashes.length == 0) return 'Damn, not a single one.';

    if (smashes.length == 1 && (lastSmashName == 'Tom' || lastSmashName == 'Boulder')) return 'A ROCK. A FUCKING ROCK. HOW?!?!';

    if (smashes.length == 1) return `You are loyal to ${lastSmashName}... I like it.`;
    if (smashes.length == 2 && smashes.filter((e) => e.filly == true).length == 0) return `So you want a threesome?`;
    if (smashes.length == 69) return `Nice.`;

    const percentage = Math.floor((smashes.length / list.length) * 100);

    if (percentage < 10) return 'Thats very few ponies, you have super high standards.';
    if (percentage < 33) return 'Not even one third, quality taste.';
    if (percentage < 50) return 'Thats decent. I guess...';
    if (percentage < 60) return 'Mares. Am I right?.';
    if (percentage < 75) return 'Thats a lot of smashing.';
    if (percentage < 90) return 'I\'m pretty sure you would be at it for days with this many smashes.';
    if (percentage < 100) return 'You are incredibly desperate for some smashing. You have absolutely no shame...';
    if (percentage == 100) return 'You are a true smasher. You would smash everything, including two rocks and a tree. I can\'t even begin to comprehend how mentally insane you are. You are definitely desperate for some smashing. Seek help';

    return '';
}

function setCharacter(number) {
    let img = document.getElementById('pony-img');
    let name = document.getElementById('pony-name');
    if (number >= list.length) {
        img.remove();
        name.remove();
        let buttonsHolder = document.getElementById('buttons-holder');
        buttonsHolder.remove();

        let filliesOptText = smashes.filter((e) => e.filly == true).length > 0 ? ' or call cute' : '';

        let finishedText = `Its over!, You would smash${filliesOptText} ${smashes.length} out of ${list.length} characters.`;
        let shameText = getShameText();

        let finishedParagrah = document.createElement('p');
        let shameParagraph = document.createElement('p');
        let githubParagraph = document.createElement('p');
        finishedParagrah.textContent = finishedText;

        shameParagraph.textContent = shameText;
        githubParagraph.textContent = `If you want to add a character or contribute, read the README on GitHub (its at the bottom of the page)`;
        finishedParagrah.classList.add('pony-name');
        shameParagraph.classList.add('pony-name');
        githubParagraph.classList.add('pony-name');
        let e = document.getElementsByClassName('page-inner')[0];
        e.style.overflowY = 'scroll';
        e.style.display = 'inline-grid';
        e.style.justifyItems = 'center';
        e.appendChild(finishedParagrah);
        if (listType == 'default') {
            e.appendChild(shameParagraph);
            e.appendChild(document.createElement('br'));
            e.appendChild(githubParagraph);
        }

        // Ponies container
        let ponyContainer = document.createElement('div');
        ponyContainer.classList.add('pony-container');

        smashes.forEach((character) => {
            let charImg = document.createElement('img');
            charImg.classList.add('pony-list-img');
            charImg.src = character.img;
            charImg.alt = character.name;
            charImg.title = character.name;

            ponyContainer.appendChild(charImg);
        });

        e.appendChild(ponyContainer)
    } else {
        name.textContent = list[number].name;
        img.src = list[number].img;
        img.alt = name.textContent;

        if (list[number].filly) {
            document.getElementById('smash').textContent = 'Cute! (←)';
            document.getElementById('pass').textContent = 'Not cute (→)';
        } else {
            document.getElementById('smash').textContent = 'SMASH! (←)';
            document.getElementById('pass').textContent = 'Pass (→)';
        }
    }
}

function smashClick() {
    const b = document.getElementById('smash');
    b.classList.remove('smash-button-anim');
    requestAnimationFrame((time) => {
        requestAnimationFrame((time) => {
            b.classList.add('smash-button-anim');
        });
    });

    lastSmashName = list[i].name;

    smashes.push(list[i]);
    i++;
    console.log(`Char: ${i}/${list.length} SMASH #${smashes.length}`);
    setCharacter(i);
}

function passClick() {
    const b = document.getElementById('pass');
    b.classList.remove('pass-button-anim');
    requestAnimationFrame((time) => {
        requestAnimationFrame((time) => {
            b.classList.add('pass-button-anim');
        });
    });

    i++;
    console.log(`Char: ${i}/${list.length} SMASHES #${smashes.length}`);
    setCharacter(i);
}

/**
 *
 * @param {KeyboardEvent} e
 * @returns
 */
function keyDownHandler(e) {
    if (e.repeat)
        return;

    switch (e.key) {
        case 'ArrowLeft': smashClick(); break;
        case 'ArrowRight': passClick(); break;
    }

    if (i >= list.length)
        document.removeEventListener('keydown', keyDownHandler);
}


function menuOptionChange() {
    const listTypeElement = document.getElementById('list-type');
    if (listTypeElement.value == 'default') {
        let showEQG = document.getElementById('show-eqg').checked;
        let showUnderage = document.getElementById('show-underage').checked;
        let showMales = document.getElementById('show-males').checked;
        let showCommunity = document.getElementById('show-community').checked;

        filteredOrderedList = OG_LIST.filter((e) => {
            if (e.eqg && !showEQG) return false;
            if (e.filly && !showUnderage) return false;
            if (e.gender == 'male' && !showMales) return false;
            if (e.community && !showCommunity) return false;
            return true;
        });

        const charsPreview = document.getElementById('characters-preview-count');
        charsPreview.textContent = `Characters: ${filteredOrderedList.length}/${OG_LIST.length}`;
        startButton.disabled = false;
    } else {
        filteredOrderedList = OG_LIST;
        const charsPreview = document.getElementById('characters-preview-count');
        if (filteredOrderedList == null || filteredOrderedList.length == 0) {
            charsPreview.textContent = `Characters: Not loaded/0`;
            startButton.disabled = true;
        } else {
            charsPreview.textContent = `Characters: ${OG_LIST.length}`;
            startButton.disabled = false;
        }
    }
}


function startGame() {
    // Shuffle the list
    list = filteredOrderedList.sort((a, b) => 0.5 - Math.random());

    const listTypeElement = document.getElementById('list-type');
    listType = listTypeElement.value;

    // Preload images
    {
        let cachedImgIndex = 0;
        let cachedImg = new Image();
        cachedImg.addEventListener('load', () => {
            if (cachedImgIndex == list.length - 1) return;
            cachedImg.src = list[++cachedImgIndex].img;
        })
        cachedImg.src = list[cachedImgIndex].img;
    }

    // Create buttons
    {
        const buttonsHolder = document.getElementById('buttons-holder');

        const smashButtonDiv = document.createElement('div')
        smashButtonDiv.classList.add('button')
        smashButtonDiv.classList.add('smash-button');
        smashButtonDiv.id = 'smash';
        smashButtonDiv.textContent = 'SMASH! (←)';


        const passButtonDiv = document.createElement('div')
        passButtonDiv.classList.add('button')
        passButtonDiv.classList.add('pass-button');
        passButtonDiv.id = 'pass';
        passButtonDiv.textContent = 'Pass (→)';

        buttonsHolder.appendChild(smashButtonDiv);
        buttonsHolder.appendChild(passButtonDiv);

        const smashButton = document.getElementById('smash');
        const passButton = document.getElementById('pass');

        smashButton.addEventListener('click', smashClick);
        passButton.addEventListener('click', passClick);
        document.addEventListener('keydown', keyDownHandler);
    }

    {
        const pageInner = document.getElementsByClassName('page-inner')[0];
        pageInner.textContent = '';

        let ponyNameParagraph = document.createElement('p');
        ponyNameParagraph.classList.add('pony-name');
        ponyNameParagraph.id = 'pony-name';


        let ponyImgParagraph = document.createElement('img');
        ponyImgParagraph.classList.add('game-img');
        ponyImgParagraph.id = 'pony-img';

        pageInner.appendChild(ponyNameParagraph);
        pageInner.appendChild(ponyImgParagraph);
    }

    setCharacter(0);
}


// Initialize everything
const startButton = document.getElementById('start');
startButton.onclick = startGame;

const listTypeElement = document.getElementById('list-type');
listTypeElement.addEventListener('change', (ev) => {
    console.log(ev.target.value);
    const menuOptions = document.getElementById('menu-options');
    menuOptions.textContent = '';
    OG_LIST = null;
    switch (ev.target.value) {
        case 'default': {
            // Load default list
            getJSON('/lists/default.json', (err, data) => {
                if (err !== null) {
                    alert('Something went wrong: ' + err);
                } else {
                    OG_LIST = data;
                }

                // EQG
                const showEQGOptionElement = document.createElement('p');
                showEQGOptionElement.classList.add('menu-option');
                showEQGOptionElement.textContent = 'Show EQG';

                const showEQGCheckbox = document.createElement('input');
                showEQGCheckbox.type = 'checkbox';
                showEQGCheckbox.id = 'show-eqg';
                showEQGCheckbox.checked = true;
                showEQGCheckbox.classList.add('menu-checkbox');

                showEQGOptionElement.appendChild(showEQGCheckbox);
                menuOptions.appendChild(showEQGOptionElement);
                menuOptions.appendChild(document.createElement('br'));

                // Fillies
                const showUnderageOptionElement = document.createElement('p');
                showUnderageOptionElement.classList.add('menu-option');
                showUnderageOptionElement.textContent = 'Show underage';

                const showUnderageCheckbox = document.createElement('input');
                showUnderageCheckbox.type = 'checkbox';
                showUnderageCheckbox.id = 'show-underage';
                showUnderageCheckbox.checked = false;
                showUnderageCheckbox.classList.add('menu-checkbox');

                showUnderageOptionElement.appendChild(showUnderageCheckbox);
                menuOptions.appendChild(showUnderageOptionElement);
                menuOptions.appendChild(document.createElement('br'));

                // Males
                const showMalesOptionElement = document.createElement('p');
                showMalesOptionElement.classList.add('menu-option');
                showMalesOptionElement.textContent = 'Show males';

                const showMalesCheckbox = document.createElement('input');
                showMalesCheckbox.type = 'checkbox';
                showMalesCheckbox.id = 'show-males';
                showMalesCheckbox.checked = true;
                showMalesCheckbox.classList.add('menu-checkbox');

                showMalesOptionElement.appendChild(showMalesCheckbox);
                menuOptions.appendChild(showMalesOptionElement);
                menuOptions.appendChild(document.createElement('br'));

                // Community
                const showCommunityOptionElement = document.createElement('p');
                showCommunityOptionElement.classList.add('menu-option');
                showCommunityOptionElement.textContent = 'Show community characters';

                const showCommunityCheckbox = document.createElement('input');
                showCommunityCheckbox.type = 'checkbox';
                showCommunityCheckbox.id = 'show-community';
                showCommunityCheckbox.checked = true;
                showCommunityCheckbox.classList.add('menu-checkbox');

                showCommunityOptionElement.appendChild(showCommunityCheckbox);
                menuOptions.appendChild(showCommunityOptionElement);
                menuOptions.appendChild(document.createElement('br'));

                // event handler
                const checkboxes = document.getElementsByClassName('menu-checkbox');
                for (const checkbox of checkboxes) {
                    checkbox.addEventListener('click', menuOptionChange);
                }
                menuOptionChange();
            });

            break;
        }
        case 'custom': {
            const urlInput = document.createElement('input');
            urlInput.placeholder = 'URL to JSON list';
            const loadButton = document.createElement('button');
            loadButton.textContent = 'Load';
            loadButton.addEventListener('click', (e) => {
                const charsPreview = document.getElementById('characters-preview-count');
                charsPreview.textContent = 'Characters: Loading...';

                OG_LIST = null;
                getJSON(`https://api.allorigins.win/get?url=${encodeURIComponent(urlInput.value)}`, (err, data) => {
                    OG_LIST = null;
                    menuOptionChange();
                    try {
                        data = JSON.parse(data.contents); // allorigins returns the data in this format
                    } catch {
                        alert('Not valid JSON, check your JSON syntax or the correct url was used');
                        return;
                    }
                    if (err !== null) {
                        alert('Something went wrong, status code: ' + err);
                    } else {
                        if (data == null) {
                            alert('Not valid JSON, check your JSON syntax or the correct url was used');
                            return;
                        }
                        if (data.length == 0) {
                            alert('The list has 0 elements');
                            return;
                        }
                        OG_LIST = data;
                    }
                    menuOptionChange();
                });
            });
            menuOptionChange();

            const whatIsThis = document.createElement('a');
            whatIsThis.href = 'https://github.com/EXtremeExploit/ponySmash#custom-lists';
            whatIsThis.textContent = 'What is this?'

            menuOptions.appendChild(urlInput);
            menuOptions.appendChild(loadButton);
            menuOptions.appendChild(document.createElement('br'));
            menuOptions.appendChild(whatIsThis);
            break;
        }
    }
});
listTypeElement.dispatchEvent(new Event('change'));
