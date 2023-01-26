/* Declare variables below to save the different sections (divs) of your story*/
let storyPart1 = document.querySelector(".story-opening");
let optionone = document.querySelector(".option-one");
let optiontwo = document.querySelector(".option-two");
let StoryPart2Yes = document.querySelector(".option-one-screen");
let StoryPart2No = document.querySelector(".option-two-screen");
let StoryPart3Yes = document.querySelector(".option-one-end");
let StoryPart3No = document.querySelector(".option-two-end");
let buttonone = document.querySelector(".buttonone");
let buttontwo = document.querySelector(".buttontwo");
let StoryPart4 = document.querySelector(".option-one-end2");
// When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!

//
optionone.onclick = function() {
    StoryPart2Yes.style.display = "block";
};
//
//
optiontwo.onclick = function() {
    StoryPart2No.style.display = "block";
};
//
buttonone.onclick = function() {
    StoryPart3Yes.style.display = "block";
};
buttontwo.onclick = function() {
    StoryPart3No.style.display = "block";
};
buttontwo.onmouseover = function() {
    StoryPart4.style.display = "block";
};
