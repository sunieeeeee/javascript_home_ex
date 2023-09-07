// 스프레드 연산자
const fruit = ['apple', 'orange', 'banana'];
console.log(fruit);
console.log(fruit[0], fruit[1], fruit[2]);
console.log(...fruit);

console.log('--------------');

function obj(a,b,c) {
  return {a, b, c};
}

console.log(obj(fruit));  //{a: Array(3), b: undefined, c: undefined}
console.log(obj(...fruit)); //{a: 'apple', b: 'orange', c: 'banana'}