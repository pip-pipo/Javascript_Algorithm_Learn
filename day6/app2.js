
const filterHere = ['morsalin'];

const newFilterHere = filterHere.filter(items=>{
    if(items>5|| typeof(items)!==Number){
        return items
    }else{
        return 'Please enter Number'
    }
})
console.log(typeof(filterHere));
console.log(newFilterHere);


const arr = new Array();

console.log(typeof(arr));

const filterAllsimilarNumber = [1,2,2,2,3,4,5,5,5,4,3,2,1,7,5,6,3,2,1];

const newFilterAllSimilarNumbers = filterAllsimilarNumber.filter((value,index,arr)=>{
    return arr.indexOf(value) === index;
})
console.log(newFilterAllSimilarNumbers);