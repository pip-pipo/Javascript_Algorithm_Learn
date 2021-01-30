// class me{
//     constructor(value){
//         this.name = 'hello';
//         this.value = this.vaule
//         console.log(value);
//     }

//      main(){
//         console.log(this.vlaue);
//     }
// }

// const sme= new me('hello 😀');

// sme.main()



// class Me {
//     constructor(hello){
//         this.hello = hello;
//     }
//     main(b){
//         console.log(this.hello)
//         console.log(b);
//     }
// }

// const mebj1 = new Me('hello')


// console.log(mebj1);

// console.log(mebj1.main('f'));


// class BtNHandler{
//     constructor(btnid){
//         this.btnid = this.btnid;
//     }
//     clickBtn(b){
//         console.log(b);
//         try {

//             const btn = document.querySelector(b);
//             btn.addEventListener('click',()=>{
//                const body = document.querySelector('body');
//                console.log(body);
//                body.appendChild(document.createElement('input')).setAttribute('id','inputbodyappend');
//                const inputbody = document.querySelector('#inputbodyappend')

//                this.inputHanlde(inputbody)

//             })
//         } catch (error) {
//                 console.log(error);
//         }

//     }


//     inputHanlde(input){
//         console.log(input);
//         const inputhandle = input;
//         inputhandle.addEventListener('keyup',(e)=>{
//             console.log(e.target.value);
//             if(!e.target.value || e.target.vlaue === 'undefined'){
//                 console.log('not');
//             }else{
//                 inputhandle.setAttribute('class','mor')
//                 setTimeout(() => {

//                 }, 1000);
//             }
//         })
//     }


// }



// let obj = new BtNHandler('#btn');

// obj.clickBtn('#btn');

try {
    const home = document.querySelector('#home')
    console.log(home.clientHeight);
    window.addEventListener('scroll', () => {
        console.log('scrolling');


    });


} catch (error) {
    console.log(error);
}


var mynamespace = {};

(function () {
   function MyObject(param1, param2) {
      this.initialize(param1, param2);
   }

   MyObject.prototype = {
      initialize: function (param1, param2) {
          var privateScope = {
              param1: param1,
              param2: param2,
              callback: null
          };

          this.setCallback = function (c) {
              privateScope.callback = c;
          }

          this.doSomething = function () {
              if (privateScope.callback) {
                  privateScope.callback.call();
              }
          }
      }
   }
   mynamespace.MyObject = MyObject;
}());



var obj = new mynamespace.MyObject("value1", "value2");


// console.log(obj);





// const gettheSplitValue = (value)=>{
// return value.split('.')
// }


// const fun =(fn)=>{
//     console.log(fn);
// }

// console.log(fun(gettheSplitValue('h.dfdflkdj.dfd')));


// let getval = {
//     on:gettheSplitValue,
//     mk : fun
// }

// console.log(getval.on('v.sfdd.fd'));
// console.log(getval.mk(gettheSplitValue('f..f')));


// const f = ()=>{
//    return console.log('hle');
// }


// const newfun=(f)=>{
//   return  console.log(f);
// }



// const obj1 = {
//     f:f,
//     clgf:newfun,
// }

// console.log(obj.newfun);




