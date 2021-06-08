// 논리 연산자
// Not !
// AND &&
// OR ||

const a = true;
console.log(!a); // false

const b = true && true;
// 양옆에 둘다 true면 true false면 false

const c = true || false;
//둘중에 하나만이라도 true면 true 다

// 우선 순위
// NOT > AND > OR
const value = !((true && false) || (true && false) || !false);
// false
