const convert = require("color-convert");
const replace = require("replace-in-file");

const hexToHSL = function(match) {
  let hsl = convert.hex.hsl(match);
  return `hsl(${hsl[0]}, ${hsl[1]}%, ${hsl[2]}%)`;
};

const options = {
  files: "tailwind.config.js",
  from: /#[0-9abcdefABCDEF]{3,6}/g,
  to: hexToHSL
};

replace(options)
  .then(results => {
    console.log("HSL Replacement results:", results);
  })
  .catch(error => {
    console.error("Error occurred:", error);
  });
