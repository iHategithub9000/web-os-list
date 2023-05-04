![spinning duck gif](https://camo.githubusercontent.com/504d1d3e87ea261bda54b14b5c099ce28fbc1644686fbe3b2c597bca2e04aaf9/68747470733a2f2f692e696d6775722e636f6d2f6c576441334f552e676966)
# API Docs
## stuff that does not have a parent object
- `runCode()` [*(function)*][function] - A function that runs the code in the Terminal and prints the output there. Happens when the user presses the Run JS button.
## `webofs` [*(object)*][object]
- `kload` [*(object)*][object]
- - `init_alerts()` [*(function)*][function] - Used internally in the WebOfs kernel. Initiates the `HtmlAlert` constructor and makes the overwritten `alert()` function work.
- `FS` [*(object)*][object]
- - `storage` [*(object)*][object] - The `LocalStorage` object.
- - `createdir(path)` [*(function)*][function] - Creates a directory.
- - `createfile(path,contents)` [*(function)*][function] - Creates a file.
- - `format()` [*(function)*][function] - Not working. `//TODO:fix`.
- - `listfiles(path)` [*(function)*][function] - Lists all files in a directory, for root do `listfiles("")`
and for a directory named `dir` inside `directory` do `listfiles("/dir/directory")`. For any other function with path use `/` for root.
- - `readfile(path)` [*(function)*][function] - Returns the contents of a file.
- - `rm(path)` [*(function)*][function] - Remove a file.
- - `rmdir(path)` [*(function)*][function] - Remove a directory.
- `HtmlAlert(title,alert,cb_onclose)` [*(constructor)*][constructor] - Makes an Alert box. Use the `display()` function of the object it constructs to display the Alert box. Make sure to not use the function when the Alert box is open, it will cause the "old" Alert box to become frozen. 

[function]: https://www.w3schools.com/js/js_functions.asp
[object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects
[constructor]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor