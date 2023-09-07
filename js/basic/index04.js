//배열의 구조분해 할당
const color = ['red', 'yellow', 'green'];
const [a, b] = color;
console.log(a); //red
console.log(b); //yellow

const color1 = ['red', 'blue', 'green', 'gray', 'pink'];
const [a1, ,a3] = color1;
console.log(a1); //red
console.log(a3); //green

console.log('')
const color2 = ['red', 'blue', 'green', 'gray', 'pink'];
const [,b3, , b4] = color2;
console.log(b3);  //blue
console.log(b4);  //gray

const all = ['a1', 'a2', 'a3'];
const [i, c, d, e="data"] = all;
console.log(i);
console.log(c);
console.log(d);
console.log(e);


