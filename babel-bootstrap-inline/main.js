import {utilities} from './user.js';


const Utilities = utilities({name:'MIT', age:30});

let lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

// TODO: write a function to split a string into an array of words


// let data = lorem.split(" ");
// let data1 = data.map(item => item.replace(",","")).map(item => item.replace(".",""));

// // let words = (data) => data.split(' ').map(item => item.replace(",","")).map(item => item.replace(".",""));

// const pageit = (data, start, pageSize) => data.slice(start, start+pageSize);
// const args = [data1, 3, 10];
// // console.log(pageit(...args));


// let list = {};

// let data2 = [...data1, ...data1, "Duis", "aute", "irure", "dolor", "in"];


// data2.map(item => list[item] ? list[item]++ : list[item] = 1);

// console.log(list);


// TODO: write a function to split a string into an array of words
// let words = (data) => data.split(' ').map(item => item.replace(",","")).map(item => item.replace(".",""));

// This should print the length of the words array returned


// TODO: write a function to count the number of occurrences of each word
// let wordFrequency = array => {
//     let list = {};
//     array.map(item => list[item] ? list[item]++ : list[item] = 1);
//     return list;
// };


// TODO: write a function to split a string into an array of words
const words = (text) => text.split(' ').map(item => item.replace(",","")).map(item => item.replace(".",""));

// This should print the length of the words array returned
// console.log(words(lorem).length);

// TODO: write a function to count the number of occurrences of each word
const wordFrequency = (words) => {
    let list = [];
    words.map(item => (list[item] ? list[item]++ : list[item] = 1) );
    return list;
};


// This should print an object containing all words and their occurrences
// console.log(wordFrequency(words(lorem)));





// let wordFrequency = array => {
//     let list = {};
//     array.map(item => list[item] ? list[item]++ : list[item] = 1);
//     return list;
// };
 
// let list = {};

// let pageit = (data, start, pageSize) => data.slice(start, start+pageSize);

//     let textc = [...textb, ...textb];
//     let args = [textc, 3, 10];
//     pageit(...args);

//     textc.map(item => list[item] ? list[item]++ : list[item] = 1);


// This should print the length of the words array returned
// console.log(words(lorem).length);
// console.log(wordFrequency(words(lorem)));

// TODO: write a function to count the number of occurrences of each word


// let wordFrequency = (callback) => {
//     // let cb = [...callback, ...callback];
//     // return cb;

//     const pageit = (data, start, pageSize) => callback.slice(start, start+pageSize);

//     return pageit;
// };


// This should print an object containing all words and their occurrences
// console.log(wordFrequency(words(lorem)));




// let lorem = "this is a huge long ass fucking string mo fucker";

// let arguments = [newData, start, pageLength]
// let paginate = (theData, start, pageLength) => {
//     return pageLength;
// }


// paginate(...arguments);

// data3 = [...data1, ...data2];


// const student = user('John Smith', 25);

// student.printName();
// student.printAge();


// const element = document.getElementById('target');

// const html = `The student name is ${student.name}, the age is ${student.age}`;

// element.innerHTML = html;


// let age = 20;

// if (age > 18)  {
//     var message = 'is adult';
//     console.log(message);
// }

// console.log(message);





// for(var i=0; i<5; i++) {
//     console.log(i);
// }

// console.log('check i:' + i);


// for(var i; i<15; i++) {
//     console.log(i);
// }

// console.log('check i:' + i);




// function outer() {
//     var counter = 1;

//     function inner() {
//             console.log(counter);
//             counter++;
//     }
//     return inner;
// }
// var inner = outer();

// inner();
// inner();
// inner();




// function outer() {
//     var counter = 0;
//     function inner() {
//         console.log(counter);
//         counter++; // this increments the counter variable even when inner is called outside the scope of outer
//         // return counter;
//     }
//     return inner;
// }

// var x = outer(); // As we're calling outer here, x is a reference to inner
// x(); // alerts 0, on the first call of inner, counter = 0, so 0 is alerted
// x();
// console.log(x());

// but now if you try to write code that directly accesses the counter within the instance of the function outer
// alert(); // alerts undefined rather than alerting 2 because counter by itself does not exist
