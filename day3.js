const fs = require('fs');

const lines = fs.readFileSync('day3.txt', {encoding: 'utf-8'}).split('\n').filter(x => x);

class Map {
    constructor(map) {
        this.map = map;
    }

    getPosition(x, y) {
        return this.map[y][x%this.map[0].length];
    }
    getHeight() {
        return this.map.length;
    }
}

const map = new Map(lines.map(line => [...line]));

let x = 0;
let y = 0;
let slope1 = 0;
let slope2 = 0;
let slope3 = 0;
let slope4 = 0;
let slope5 = 0;
let totaltrees = 0;
while(y<map.getHeight()) {
    const current = map.getPosition(x,y);
    if(current == '#') slope1++;
    x += 1;
    y += 1;
}
 x = 0;
 y = 0;
while(y<map.getHeight()) {
    const current = map.getPosition(x,y);
    if(current == '#') slope2++;
    x += 3;
    y += 1;
}
x = 0;
y = 0;
while(y<map.getHeight()) {
    const current = map.getPosition(x,y);
    if(current == '#') slope3++;
    x += 5;
    y += 1;
}
x = 0;
y = 0;
while(y<map.getHeight()) {
    const current = map.getPosition(x,y);
    if(current == '#') slope4++;
    x += 7;
    y += 1;
}
x = 0;
y = 0;
while(y<map.getHeight()) {
    const current = map.getPosition(x,y);
    if(current == '#') slope5++;
    x += 1;
    y += 2;
}
x = 0;
y = 0;


totaltrees = slope1*slope2*slope3*slope4*slope5
console.log(slope2);
console.log(totaltrees);
