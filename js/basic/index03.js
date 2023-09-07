//구조분해 이름바꾸기
const book = {
  title: 'javascript',
  type: 'it'
}

//level=0 -> 없는 것 추가 가능
//있는 것을 이렇게 쓰면 기존거가 우선순위가 높음
const {title, level=0, type='design'} = book;
console.log(title);
console.log(level);
console.log(type);

//키의 변경
const str = title;
console.log(str);
console.log(title);

//변수명 바꾸고 싶을 때
const graphic = {
  no: 'painkt',
  title2: 'photoshop'
}
const {no: art, title2} = graphic;  //no:art -> no라는 변수명 안쓰고 변수명 바꾸고 싶을 때
console.log(art);

