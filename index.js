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
//=============================================================== Повернута ли строка?
// function isStringRotated(source, test) {
//   if (source.length !== test.length) {
//     return false;
//   }

//   for (let i = 0; i < source.length; i++) {
//     const rotate = source.slice(i, source.length) + source.slice(0, i);

//     if (rotate === test) {
//       return true;
//     }
//   }
//   return false;
//}
// //**********************************************************************
// function isStringRotated(source, test) {
//   return (source + source).includes(test) && source.length === test.length;
// }

// console.log(isStringRotated("jovascript", "scriptjava")); // -> true
// console.log(isStringRotated("javascript", "iptjavascr")); // -> true
// console.log(isStringRotated("javascript", "java")); // -> false
//=============================================================== Является ли массив подмножеством другого массива
// function arraySubset(source, subset) {
//   if (source.length < subset.length) {
//     return false;
//   }
//   for (let i = 0; i < subset.length; i++) {
//     const index = source.indexOf(subset[i]);
//     if (index === -1 ) {
//         return false;
//     }
//     delete source[index];
//   }
//   return true;
// }

// console.log(arraySubset([2, 1, 3], [1, 2, 3])); // -> true
// console.log(arraySubset([2, 1, 1, 3], [1, 2, 3])); // -> true
// console.log(arraySubset([1, 1, 1, 3], [1, 3, 3])); // -> false
// console.log(arraySubset([1, 2], [1, 2, 3])); // -> false
//=============================================================== Анаграммы
// function allAnagrams(array) {
//   const string = array[0];
//   for (let i = 1; i < array.length; i++) {
//     for (let j = 0; j < array[i].length; j++) {
//       if (!string.includes(array[i][j])) {
//         return false;
//       }
//     }
//   }
//   return true;
// }
// //**********************************************************************
// function allAnagrams(array) {
//   const sorted = array.map((str) => str.split("").sort().join(""));

//   for (let i = 1; i < array.length; i++) {
//     if (sorted[i] !== sorted[0]) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(allAnagrams(["abcd", "bdac", "cabd"])); // true
// console.log(allAnagrams(["abcd", "bdXc", "cabd"])); // false
//=============================================================== Перевернуть матрицу 3х3
// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]

// function rotate(source) {
//   const newMatrix = source[0].map(() => [])

//   for (let i = 0; i < source.length; i++) {
//     for (let j = 0; j < source[0].length; j++) {
//       newMatrix[j][source.length - 1 - i] = source[i][j]
//     }
//   }

//   return newMatrix
// }


// console.log(rotate(matrix))

// [1, 2, 3]    [7, 4, 1]
// [4, 5, 6] -> [8, 5, 2]
// [7, 8, 9]    [9, 6, 3]
//===============================================================
/*Напишите функцию, которая принимает отсортированный массив с числами и число. Необходимо вернуть индекс числа, если оно есть в массиве. Иначе вернуть -1.*/
// function search(array, target) {
//   return array.indexOf(target);
// }

// console.log(search([1, 3, 6, 13, 17], 13)) // -> 3
// console.log(search([1, 3, 6, 13, 17], 12)) // -> -1