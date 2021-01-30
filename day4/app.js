// Random Numbers
// You can get random number in O(1) (for asymptomatic analysis). Operating systems generally have an entropy pool (using user input / cpu usage etc) that they provide to programs that need them (either natively or through the virtual machine of your language).
// JavaScript Math.random provides you with a random floating point number between range [0, 1). To get an integer just use the following function:
function getRandomNumber(floor, ceiling) {
    return Math.floor(Math.random() * (ceiling - floor)) + floor;
}
getRandomNumber(2.5, 3);
console.log(getRandomNumber(3.4, 6));
var data = [1, 2, 3, 4, 5, 6, 7, 8];
var emojii = ['😊', '😎', '😋', '😀', '😁', '😉', '😄', '🤗', '😚', '😅', '🙂', '😛', '🤩', '🧐', '😍', '👋🏻'];
var _loop_1 = function (emo) {
    var addEmoji = function (emoji) { return emoji.toString() + emojii[emo]; };
    var emojiData = data.map(addEmoji);
    console.log(emojiData);
};
for (var emo in emojii) {
    _loop_1(emo);
}
