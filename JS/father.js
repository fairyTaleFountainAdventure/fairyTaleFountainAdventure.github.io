/*IN INITIAL SKELETON*/
//initialize variables and constants as needed
const submitButton = document.getElementById("submitButton");
const continueButton = document.getElementById("nextPage");
const errorMessage = document.getElementById("errorMessage");
const ANSWERS = ["YELLOW", "DUMMY", "9.80", "HG"];

//event listeners for buttons
submitButton.addEventListener('click', function () {
    let input;
    //get guess from usper
    input = document.getElementById("answerBox").value.toUpperCase(); //converting to uppercase to prevent casing issues
    checkInput(input);
});

continueButton.addEventListener('click', function () {
    loadNextPage();
});

//to check if users guess is correct
function checkInput(input) {
    let pageNumber;
    let answer;

    //ID which phase we are in
    if (document.URL.includes("Intro")) {
        pageNumber = 0;
    } else if (document.URL.includes("Step1")) {
        pageNumber = 1;
    } else if (document.URL.includes("Step2")) {
        pageNumber = 2;
    } else if (document.URL.includes("FinalNode")) {
        pageNumber = 3;
    } else if (document.URL.includes("finalPage")) {
        pageNumber = 4;
    }
    console.log("Page Number: " + pageNumber);

    //ID correct answer for the current page
    answer = ANSWERS[pageNumber];

    if (pageNumber != 1 && pageNumber != 4) { //1 does not ahve a correct answer, you must check different logic
        //check if input matches answer
        if (input === answer) {
            //show continue button and ensure error message is hidden
            errorMessage.style.display = "none";
            continueButton.style.display = "block";
        } else {
            //show error message
            errorMessage.style.display = "block";
        }
    } else { //check to ensure the input field has a length of at least 2 characters (excluding whitespace)
        if (input.trim().length >= 2) {
            errorMessage.style.display = "none";
            continueButton.style.display = "block";
        } else {
            //show error message
            errorMessage.style.display = "block";
        }
    }

}

//to continue to next page in event of correct answer
function loadNextPage() {
    let pageNumber;

    //ID which phase the player is in
    if (document.URL.includes("Intro")) {
        pageNumber = 0;
    } else if (document.URL.includes("Step1")) {
        pageNumber = 1;
    } else if (document.URL.includes("Step2")) {
        pageNumber = 2;
    } else if (document.URL.includes("FinalNode")) {
        pageNumber = 3;
    }

    //load next page based on current page
    if (pageNumber == 0) {
        window.open('fatherStep1.html', "_self");
    } else if (pageNumber == 1) {
        window.open('fatherStep2.html', "_self");
    } else if (pageNumber == 2) {
        window.open('fatherFinalNode.html', "_self");
    } else if (pageNumber == 3) {
        console.log("Page number 3 its working");
        window.open('finalPage.html', "_self");
    }
}