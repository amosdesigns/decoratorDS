// Decorator Use Case Example Code

import Value from './value';
import Add from './add';
import Sub from './sub';

//creating some values to play with
const A = Value(11239);
const B = Value(234);
const C = Value(598);

// The Client
console.clear();
console.log('======================= The Client =======================');
console.log(Add(A, B).value);
console.log(Add(A, 100).value);
console.log(Sub(C, A).value);
console.log(Sub(Add(C, B), A).value);
console.log(Sub(100, 101).value);
console.log(Add(Sub(Add(C, B), A), 100).value);
console.log(Sub(123, Add(C, C)).value);
console.log(Add(Sub(Add(C, 10), A), 100).value);
console.log('===========================================================');

// just to show that the original values are not changed
console.log('======================= OG Values =======================');
console.log(A.value);
console.log(B.value);
console.log(C.value);