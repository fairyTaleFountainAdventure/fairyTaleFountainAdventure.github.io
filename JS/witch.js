//define constants and variables
const submitButton = document.getElementById("submitButton");
const nextPage = document.getElementById("nextPage");
const continueButton = document.getElementById("continueButton");
const ANSWERS = ["10"];

addEventListenerWrapper(); //calls the wrpper function

//event listeners
//this wrapper prevents buttons that dont exist on certain pages causing a error and failing the program
function addEventListenerWrapper() {
    let pageNumber;
    //ID which phase the player is in
    if(document.URL.includes("Intro")) {
        pageNumber = 0;
    } else if (document.URL.includes("Step1")) {
        pageNumber = 1;
    } else if (document.URL.includes("Step2")) {
        pageNumber = 2;
    }

    if (pageNumber == 0) {
        submitButton.addEventListener('click', function() {
            console.log("in submit button listener");
            let input;
            //get guess from usper
            input = document.getElementById("answerBox").value.toUpperCase(); //converting to uppercase to prevent casing issue
            checkInput(input);
        });
        
        nextPage.addEventListener('click', function() {
            console.log("in next page listener");
            loadNextPage();
        });
    } else if (pageNumber <= 2) {
        continueButton.addEventListener('click', function() {
            console.log("continue button event listener");
            loadNextPage();
        });
    } 
}


//check if users input is correct
function checkInput(input) {
    let pageNumber;
    let answer;

    //ID which phase we are in
    if(document.URL.includes("Intro")) {
        pageNumber = 0;
    } else if (document.URL.includes("Step1")) {
        pageNumber = 1;
    } else if (document.URL.includes("Step2")) {
        pageNumber = 2;
    }

    //ID correct answer for the current page
    answer = ANSWERS[pageNumber];

    //check if answer matches input
    if (input === answer) {
        //show continue button and ensure error message is hidden
        errorMessage.style.display = "none";
        nextPage.style.display = "block";
    } else {
        //show error message
        errorMessage.style.display = "block";
    }
}

//advance page when answer is correct
function loadNextPage() {
    console.log("button clicked");
    let pageNumber;

    //ID which phase the player is in
    if(document.URL.includes("Intro")) {
        pageNumber = 0;
    } else if (document.URL.includes("Step1")) {
        pageNumber = 1;
    } else if (document.URL.includes("Step2")) {
        pageNumber = 2;
    }

    //load next page based on current page
    if (pageNumber == 0) {
        window.open('witchStep1.html', "_self");
    } else if (pageNumber == 1) {
        window.open('witchStep2.html', "_self");
    } else if (pageNumber == 2) {
        window.open('witchFinal.html', "_self");
    }
}