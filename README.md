# Hex to HSL Color Converter script

Quick & dirty node script to search a file or files for hex color strings, will replace with hsl conversion in place.

NPM modules [replace-in-file](https://www.npmjs.com/package/replace-in-file) and [color-convert](https://www.npmjs.com/package/color-convert) do the heavy lifting.

You will need to specify the files to search & replace within in the `files` key of the `options` variable.
