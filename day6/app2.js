//all array methods
// // filter,map,reduce,foreach,splice,slice,fill,includes,join


// const filterHere = ['morsalin'];

// const newFilterHere = filterHere.filter(items => {
//     if (items > 5 || typeof (items) !== Number) {
//         return items
//     } else {
//         return 'Please enter Number'
//     }
// })
// console.log(typeof (filterHere));
// console.log(newFilterHere);


// const arr = new Array();

// console.log(typeof (arr));

// const filterAllsimilarNumber = [1, 2, 2, 2, 3, 4, 5, 5, 5, 4, 3, 2, 1, 7, 5, 6, 3, 2, 1];

// const newFilterAllSimilarNumbers = filterAllsimilarNumber.filter((value, index, arr) => {
//     return arr.indexOf(value) === index;
// })
// console.log(newFilterAllSimilarNumbers);

// let numberArr = [2, 3, 4, 5, 6, 7, 7, 7];

// const nums = numberArr.filter((value, index, arr) => {
//     return arr.indexOf(value) === index;
// })
// console.log(nums);

// const datasVal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 45, 45, 5, 54, 5, 45, 45, 3, 2, 2, 1,];

// console.log(datasVal.indexOf());
// const newDatasVal = datasVal.filter((value, index, arr) => {
//     console.log(value > 5);

//     return arr.indexOf(value) === index;
// })

// console.log(newDatasVal);



// // //     calbacknested(b)
// // //     function calbacknested(b){
// // //         return console.log(b)
// // //     }
// // // }
// // // console.log(calback('morsalin'));


// // // const stringdata = 'morsalin'


// // // console.log(stringdata.indexOf('s') === 3);

// // const allNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// // const getTotal = allNumber.reduce((previousValue, currentValue, currentIndex, array) => {

// //     console.log(previousValue + currentValue);

// // }, 0)



// // const allNumbers = allNumber.reduce((total, value, index) => {
// //     console.log(index + index)
// //     return total + value;
// // }, 0);
// // console.log(allNumbers);




// // const getTotals = allNumber.reduce(calback, -Infinity);


// // function calback(total,value,index,arr){
// //         return total + value;
// // }
// // console.log(getTotals);

// // console.log(-Infinity);


const items = [
    {
        price: "3000"
    },
    {
        price: "6000"
    }
    , {
        price: "5000"
    },
    {
        price: "4000"
    }]
// const getTotalPrice = items.reduce((previousValue, currentValue) => {
//    console.log(previousValue = currentValue.price * currentValue.value);
//     return  currentValue.price


// }, 0)

// console.log(getTotalPrice);


// const Totals = items.reduce((acc, item) => acc + item.vlaue * item.price, 0);
// console.log(Totals)


// const array = ['morsalin', 'koi', 'how are you'];

// console.log(array.slice(1, 3));

// console.log(array.splice(-4));


// console.log(array);

// const arraysplice = [2, 3, 43, 43, 44, 3];

// console.log(arraysplice.splice(-5, 1, 5555555));
// console.log(arraysplice.slice(-3));
// console.log(arraysplice);


// const a = ['a', 'morsalin', 'b', 'rakin'];

// const b = ['c','foridul','d','mannnah'];
// const d = ['e','emran','f','saikot']
// const c = a.concat(b,d,a,b,d,a);

// console.log(c)

// const numbersDatas= [1,2,3,4,5,6,7];

// console.log(numbersDatas.fill(7,2,6))

// function arrayDatas(arr){
//     return arr.fill(0,2,8)
// }
// console.log(arrayDatas([1,2,3,4,5,6,7,3,4,5]))


// function makenumbers(n){

//     // return Array(n)
//     // .fill(0)
//     // .map((_,index)=>index+1)
//     const arr = Array(n);
//    const newarr= arr.fill(0).map((_,index)=>index+1)
//     return newarr

// }

// console.log(makenumbers(29))



// const itemsM = ['morsalin','Imran','true','morsalin'];

// console.log(itemsM.includes("morsalin",4))

// const countries = ['bangladesh','pakistan','japan','butan','nepal'];

// const res = countries.join('$');

// console.log(res)


// //all array methods
// // forEach,filter,map,reduce,foreach,splice,slice,fill,includes,join

// // filter Method 

// const numbers = [2,3,4,5,5,5,5,5,5,5,5,6,7,8,9];

// const FilterNumbers =numbers.filter((value, index, array) => {
//     if(array)
//         return array.indexOf(value) === index
//     else{
//         return 0
//     }
// })
// console.log(FilterNumbers)


// const FilterNumber = numbers.filter((value,index)=>{
//     if(value<5){
//         return value;
//     }
// });
// console.log(FilterNumber);

// const moreNumbers = numbers.filter((value,index)=>{
//     const data = "morsalin";
//         if(value>6){
//             return value;
//         }        

// })
// console.log(moreNumbers);

const arrayReverse = [2, 3, 5, , 6, 7, , , 8,];

console.log(arrayReverse.reverse());

arrayReverse.push(2,3,4,5,4,56,4,)
console.log(arrayReverse);

const newData = new Array();

console.log(newData.concat(['morsalin']));

console.log(newData)

const numbers = [1,2,3,4,5,6,]

const newpop = numbers.pop();

console.log(newpop)

const newShift=numbers.shift();

console.log(newShift)

console.log(numbers)
const firestItem = numbers.shift();

console.log(firestItem)

const names = ['korim','morsalin','korim','korim'];

console.log(names.indexOf('korim'));
console.log(names.indexOf('korkk'));
console.log(names.indexOf('ko'));
console.log(names.indexOf('kkk'));
console.log(names.indexOf('morsa'));

const newname = names.indexOf('korim');

console.log(newname);




