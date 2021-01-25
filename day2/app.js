// Problem 1
// You are given an array of objects each with its name and timeout value. Iterate over each element inside an array in the interval of the given timeout.
// Solution
//     We have to set timeout while iterating over an element
//     Once the timeout completes, we have to recurse over the given next item in the array
//     Increment the counter for the current element so in the recursion we can recurse over the next element
var input = [{
        'name': 'event1',
        'time': 1000
    }, {
        'name': 'event2',
        'time': 2000
    }, {
        'name': 'event3',
        'time': 8000
    }];
var i = 0;
var inputlength = input.length;
function iturate() {
    if (i < inputlength) {
        var currentElement = input[i];
        // console.log(input[i])
        console.log(currentElement.name + " Started.");
        setTimeout(function () {
            console.log(currentElement.name + " ended");
            iturate();
        }, currentElement.time);
    }
    i++;
}
iturate();
