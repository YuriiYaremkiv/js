//=============================================================== Уникальность всех символов в строке
// function isUnique(string) {
// 	const str = new Set(string);
//     return str.size == string.length;
// }
//********************************************************
// function isUnique(string) {
//     for (let i = 0; i < string.length; i++) {
//         if (i !== string.lastIndexOf(string[i])) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(isUnique('abcdef')) // -> true
// console.log(isUnique('1234567')) // -> true
// console.log(isUnique('abcABC')) // -> true
// console.log(isUnique('abcadef')) // -> false

//=============================================================== Плоский массив
// function flatten(array) {
//   const res = [];
//   for (let i = 0; i < array.length; i++) {
//     if (Array.isArray(array[i])) {
//       const flat = flatten(array[i]);
//       for (let j = 0; j < flat.length; j++) {
//         res.push(flat[j]);
//       }
//     } else {
//       res.push(array[i]);
//     }
//   }

//   return res;
// }
//***********************************************************************
// console.log(
//   flatten([
//     [1],
//     [[2, 3]],
//     [[[4, 5, 6, 7]]],
//     [[[[[[[[[[[1, 2, 3, 4, 5, 6, 7, 8, 9]]]]]]]]]]],
//   ])
// ); // -> [1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
//=============================================================== Удаление всех повторяющихся значений в строке
// function removeDupes(str) {
//     let array = str.split('');
//     let newArray = [];
//     for (let i = 0; i < array.length; i++) {
//         if (array.indexOf(array[i]) == i) {
//             newArray.push(array[i]);
//         }
//     }
//     return newArray.join('');
// }
//********************************************************************
// function removeDupes(str) {
//     const chars = {};
//     const res = [];

//     for (let i = 0; i < str.length; i++) {
//         if(!chars[str[i]]) {
//             chars[str[i]] = true;
//             res.push(str[i]);
//         }
//     }
//     return res.join('');
// }
//**********************************************************************
// function removeDupes(str) {
//   return (newArray = str
//     .split("")
//     .filter((item, index, array) => array.indexOf(item) === index)
//     .join(""));
// }
//**********************************************************************
// function removeDupes(str) {
//   return Array.from(new Set(str)).join("");
// }

// console.log(removeDupes("abcd")); // -> 'abcd'
// console.log(removeDupes("aabbccdd")); // -> 'abcd'
// console.log(removeDupes("abcddbca")); // -> 'abcd'
// console.log(removeDupes("abababcdcdcd")); // -> 'abcd'

//=============================================================== Какая строка встречается чаще всего
// function highestFrequency(array) {
//   const str = {};
//   let maxFreq = 0;
//   let maxFregStr = array[0];

//   for (let i = 0; i < array.length; i++) {
//     if (str[array[i]]) {
//       str[array[i]] += 1;
//     } else {
//       str[array[i]] = 1;
//     }

//     if (str[array[i]] > maxFreq) {
//         maxFreq = str[array[i]];
//         maxFregStr = array[i];
//     }
//   }

//   return maxFregStr;
// }

// console.log(highestFrequency(["a", "b", "c", "c", "d", "e"])); // -> c
// console.log(highestFrequency(["abc", "def", "abc", "def", "abc"])); // -> abc
// console.log(highestFrequency(["abc", "def"])); // -> abc
// console.log(
//   highestFrequency([
//     "abc",
//     "abc",
//     "def",
//     "def",
//     "def",
//     "ghi",
//     "ghi",
//     "ghi",
//     "ghi",
//   ])
// ); // -> ghi
