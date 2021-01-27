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
var sequnce = function (seq) {
    if (sequnce.length <= 2) {
        console.log("Please Enter a valid sequnce oparetion");
    }
    var oparends = ['+', '-', '*', '/'];
    var stack = [];
    var i = 0;
    stack.push(seq[i]);
    i++;
    console.log(typeof (seq));
    while (i <= seq.length) {
    }
};
sequnce(["2", "+", "4"]);
