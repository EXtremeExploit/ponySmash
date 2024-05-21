* Filters consist of 3 key value pairs:
  * text: This the text that you will see on the page
  * logic ([Documentation](#logic))
  * value: Default value when the list gets loaded. If true it will be checked and active when the list is loaded
* The name of the key value pair in which the filter is contained doesn't really matter, its there to differentiate between each of the filters components, you can see an example at the bottom of the page

# Logic
There are 2 kinds of logics:
* Without argument
* With Argument

## Without Arguments
* These filters are very simple, they consist of 3 key value pairs.
  * `type`: What filter to use. has to be one of the possible values in the column **`Name`** from below
  * `charProp`: What property of a character to check for. Could literally be any valid key value pair in your character list. For example the `filly` property in [Customs lists modern format documentation](https://github.com/EXtremeExploit/ponySmash/wiki/Custom-Lists#modern-format-please-use-this)
  * `against`: What to check the filter against.

### Available filters
| Name | Description | Example |
| :--: | ----------- | ------- |
| **equals** | Checks wherever the character property equals something | ```logic: { "type": "equals", "charProp": "gender", "against": "female" } ```.<br>In this case we can see that it checks if the property "gender" of a character is equal against the "female" string |
| **notEquals** | Checks wherever the character property DOES NOT equal something | Same as above but inverted |
| **inList** | Checks whetever a character is in another (**builtin**) list using the specified charProp, being able to switch the character(s) on/off | ```logic: { "type": "inList", "charProp": "name", "against": "eqg" } ```<br>Here we are checking if a character with the same property in `"name"` is already in the list `"eqg"`, If it is we are able to switch this character on/off</br> |

## With Argument
* Filters with arguments are just like the ones without arguments, just with the only difference is that they need an extra key value pair. the `arg` key. These are also a bit more advanced, meaning they 

### Available filters
| Name | Argument | Description | Example |
| :--: | -------- | ----------- | ------- |
| **startsWith** | The text to check it starts with | Checks whetever the property of a character stars with a specific text in particular (the argument), this check later gets checked with `against`. This check only makes sense to check against `true` or `false` | ```logic: { "type": "startsWith", "charProp": "img", "arg": "characters/mane6", "against": true } ```.<br>In this case we can see that it checks if the property "img" starts with the text `"characters/mane6"` and that check is true(meaning it in fact does). If it was false the check would apply to characters which property img **does not** start with the specified text |
| **endsWith** | The text to check it ends with | Checks whetever the property of a character ends with a specific text in particular (the argument), this check later gets checked with `against`. This check only makes sense to check against `true` or `false` | ```logic: { "type": "endsWith", "charProp": "img", "arg": "Applejack.webp", "against": true } ```.<br>In this case we can see that it checks if the property "img" ends with the text `"Applejack.webp"` (useful to check if a character is X regardless of its origin (EQG or FiM)) and that check is true (meaning it in fact does end with it). If it was false the check would apply to characters which property img **does not** end with the specified text |
| **includes** | The text to check is contained ANYWHERE on the property | Checks whetever the property of a character includes a specific text in particular (the argument) ANYWHERE ON THE PROPERTY, this check later gets checked with `against`. This check only makes sense to check against `true` or `false` | ```logic: { "type": "includes", "charProp": "tags", "arg": "unicorn", "against": true } ```.<br>In this case we can see that it checks if the property "tags" (probably custom defined) contains the text `"unicorn"` and that check is true (meaning it in fact does contain the text). If it was false the check would apply to characters which the property `tags` **does not** contain the specified text in it | 

# Extras
* **ALL TEXT** is case sensitive

## Example:
```json
{
    "version": 1,
    "list": [
        ...
    ],
    "filters": {
        "showFemales": {
            "text": "Show females",
            "logic": {
                "type": "equals",
                "charProp": "gender",
                "against": "female"
            },
            "value": true
        },
        "showMales": {
            "text": "Show males",
            "logic": {
                "type": "equals",
                "charProp": "gender",
                "against": "male"
            },
            "value": true
        },
        "showRainbowDash": {
            "text": "Show Rainbow Dash",
            "logic": {
                "type": "endsWith",
                "charProp": "img",
                "arg": "Rainbow_Dash.webp",
                "against": true
            },
            "value": true
        }

    }
}
```