// Problem statment

// Evaluate Reverse Polish Notation in Javascript


// Observations

// Input: [“3”, “1”, “+”, “5”, “*”]
// Output: 9
// Explanation: ((3 + 1) * 5) = 20


// Algorithm:

// The key thing to realize in this to use stack as a data structure for the solution. Also, in most of the mathematical operations stack is used.

//     Push operands to stack until you encounter an operator
//     When you encounter an operator, pop two operands from stack
//     Calculate operands using given operator and push the result to the stack




// const sequnce = (seq: Array<String>) => {
//     if (sequnce.length <= 2) {
//         console.log("Please Enter a valid sequnce oparetion");
//     }
//     let oparends: Array<string> = ['+', '-', '*', '/'];

//     let stack = [];
//     let i = 0;
//     stack.push(seq[i])
//     i++;


//     while (i <= seq.length) {
//         var item = seq[i];
//         if(isNaN(item)){
//             let oparendIdex = oparends.indexOf(item)
//         }
//     }

// }
// sequnce(["2", "+", "4","-","3"])

console.log(parseInt("34", 10))

const RPN = (seq: any) => {
    if (seq.length <= 2) {
        console.log("Please enter valid RPN");
        return;
    }
    let operands = ["+", "-", "*", "/"];
    let stack = []
    let i = 0;

    stack.push(seq[i])
    console.log(stack)
    i++;

    while (i <= seq.length) {
        let item = seq[i];
        if (isNaN(item)) {
            let operandIndex = operands.indexOf(item);
            if (operandIndex == 0) {
                let a = parseInt(stack.pop(), 10),
                b = parseInt(stack.pop(), 10);
                stack.push(a+b);
            }
            if (operandIndex == 1) {
                let a = parseInt(stack.pop(), 10),
                    b = parseInt(stack.pop(), 10);
                stack.push(b-a)
            }
            if (operandIndex == 2) {
                let a = parseInt(stack.pop(), 10),
                    b = parseInt(stack.pop(), 10);
                stack.push(a*b)
            }
            if (operandIndex == 3) {
                let a = parseInt(stack.pop(), 10),
                    b = parseInt(stack.pop(), 10);
                stack.push(b/a)
            }
      } else {
		stack.push(parseInt(item, 10));
      }
       i++
    }

    return stack[0];

 }
        
    
RPN(["2", "+", "4", "+", "3", "+", "4"])
console.log(RPN(["2", "1", "+", "3", "*"])) // 9
console.log(RPN(["4", "13", "5", "/", "+"])) // 6