# Pony Smash

## What the hell is this
Pretty sure you know smash or pass, well this is that but with every character in My Little Pony: Friendship is Magic
## Ok but why?
I was bored tbh

## How do i add a character?
### Rules
* **No NSFW images**
* **Image has to clearly indicate the character its refering to**
* **OCs are generally not allowed unless its somewhat known (The living tombstone's OC, Discord human form, Cream Heart, etc)**
* **Style has to be the same as other images (2D, same style as the show/2017 movie), OCs are the only exceptions but it's preferable**
* **Name has to be correct (duh)**
* **Resolution has to be decent (AT LEAST 256x256), if a higher quality version exists please use it**
* **File format has to be `png` (lowercase extension)**

### Instructions
* EASY! :D
* First you want to fork this repository
* Create a new branch with the name you want
* Add the **PNG** to the characters folder, you are free to put it in the respective folder it should go to, but i you are unsure put it in `unsorted`
* Add the character to the list inside `src/lists/default.json`
   *  `name`: This is what appears above the image
   *  `img`: The path to the image, **ITS CASE SENSITIVE**
   *  `filly`: Is the character underage?
   *  `eqg`: Is the character/image from Equestria Girls?
   *  `gender`: `"male"`/`"female"`/`null`
   *  `community`: Is the character not officially made by hasbro/Made from the community?
* Make a PR (Pull Request) to the branch **`master`**, if you do it to any other branch i will close your PR
* Now your request is for everyone to see, including me :D, so now i can comment on your changes if something is needed, or merge them if everything is fine

## Custom lists
* Custom lists is a type of list that are defind by the user, you can at the top choose to choose the default list which includes every character in MLP: FiM + some filters to customize the experience, OR to choose a random list from the internet by inputting the URL, these types of lists dont have filters as they are custom and anyone can edit them to however they want
### How do i make my own custom list?
* First you need to understand how they work, a custom list is a JSON object composed of an array of objects, like this:
```json
[
   {
      "name": "Applejack",
      "img": "characters/mane6/Applejack.png"
   },
   { "name": "Fluttershy", "img": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=="},
   { "name": "Pinkie Pie", "img": "characters/mane6/Pinkie_Pie.png"},
   { "name": "Rainbow Dash", "img": "characters/mane6/Rainbow_Dash.png"},
   { "name": "Rarity", "img": "characters/mane6/Rarity.png"},
   { "name": "Twilight Sparkle", "img": "characters/mane6/Twilight_Sparkle.png"}
]
```
#### Explanation
   1. The `"name"` property is the text that appears above the character
   2. The `"img"` property is the src of the image, it can be a relative path to the same domain of ponysmash (reusing characters from MLP: FiM), an absolute path to an external site like gyazo or the base64 of an image (not really friendly)
   3. The `"filly"` property (optional) sets if the character is underage (`true`/`false`), this will make it so that the buttons say "Cute!" and "Not cute" in the case this property is `true`,
   3. The `"smashText"` property (optional) sets the text for the smash button. Example : `"smashText": "Smash head with hammer"`,
   3. The `"passText"` property (optional) sets the text for the pass button. Example : `"passText": "Not even if equestria depended on it"`,
   4. Linebreaks (newlines), dont really matter as long as they dont change the values of things (they arent in the middle of a string)
   5. Comments are not allowed (lines that start with //)
   6. The list **CANNOT** end with a comma (,), else the load will fail.
* You can name the json file whatever you want, place it somewhere on the internet, like on a gist or pastebin
* Once its uploaded you need to get the raw URL of the list, usually in the service you have the list you have a "raw" button at the top, if you click it you should only see the list **and nothing else, not even a UI of any sort** (it should look something like: `https://pastebin.com/raw/0gHxT256`)
* Now you can try to load that URL into the game and see if it works, if it didn't work, you will get an alert telling you what could be the problem.
* IF you still have problems figuring out how this works, you can check the example list [here](/src/lists/example.json) or make a [new issue](https://github.com/EXtremeExploit/ponySmash/issues/new) explaining your problem
