// const numbers = [1, 2, 3, 4, 5, 6, 7]
// const newNumber = numbers.forEach((value, index, arr) => {
//     return console.log(`[a]${index}and value ${value} full array  data is ${arr}`);
// })

// console.log(newNumber);


// let sum = 0;

// const CountNumber = numbers.forEach(item => {
//     sum += item;
//     console.log(sum);
//     console.log(sum + 0.2);

// })

// console.log(sum)

const stringArr = ['a', 'b', 'c', 'd', 'e'];

// let countString = 0;

// stringArr.forEach(items => {
//     countString + items;
//     console.log(countString + items);
// })

// console.log(countString);

let countString = {}
stringArr.forEach(items => {
    if (countString[items]) {
        countString[items]++;
    }
    else {
        countString[items] = 1;
    }
})

console.log(countString);


const obj = {}
console.log(obj[1] = 'mor');
console.log(obj);



// map method 

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const newNumbers = numbers.map((value, item, arr) => {
    // return value + 2;
    console.log(item);
    return value + item;
})

console.log(newNumbers);


const Products = [
    {
        name: 'morsalin',
        price: 300,
        count: 1,
    }, {
        name: 'morsalin',
        price: 400,
        count: 2,
    }, {
        name: 'rakib',
        price: 800,
        count: 3,
        allldatasCount: {
            name: 'morsalin',
            price: 400,
            count: 2,
        }
    }]


// const allProducts = Products.map(items=>{
//     return items.count + 1 / 2.1;
// })

// console.log(allProducts);

// const newProducts = Products.map(items => {
//     return { allcount: items.allldatasCount };
// })

// console.log(newProducts);

// console.log(newProducts.map(i => {
//     console.logdddd
//     return i.allcount;
// }));


const str = ['1','345454545454545454545']

const numbers1 = str.map(Number);
console.log(numbers1);

console.log(typeof(numbers1));

const integetNumber = Number(numbers1);

console.log(integetNumber);

const main = "hello";


const data = morsalin;
const data = morsalin;
