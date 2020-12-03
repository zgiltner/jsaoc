const fs = require('fs');

const lines = fs.readFileSync('day1.txt', {encoding: 'utf-8'}).split('\n').filter(x => x).map(x => parseInt(x));

for (let i = 0; i < lines.length; i++) {
    for (let j = i+1; j < lines.length; j++) {
        for(let k = j+1; k < lines.length; k++)
        if(lines[i]+lines[j]+lines[k] == 2020) {
            console.log(lines[i]*lines[j]*lines[k]);
            }
    }
}

