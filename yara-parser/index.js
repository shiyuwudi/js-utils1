const fs = require('fs');

function main() {
  const file = fs.readFileSync('WShell_THOR_Webshells.yar') + '';
  const arr = file.split('\nrule');
  const result = arr.map(str => {
    const i = str.indexOf('{');
    const j = str.lastIndexOf('}');
    return str.slice(i, j + 1);
  }).filter(obj => !!obj).join('\n');
  fs.writeFileSync('result.txt', result);
}

main();