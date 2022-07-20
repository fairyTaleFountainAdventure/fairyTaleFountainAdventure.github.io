//constants and variable initialization
const submitButton = document.getElementById("submit");
const selectionMessage = document.getElementById("selectionMessage")

//add event listeners to elements
submitButton.addEventListener('click', function() {
    checkButton();
});

function checkButton() {
    //grab the radio buttons
    const radioButtons = document.querySelectorAll('input[name="coinFlip"]');
    
    let checkedValue = "none";
    //loop through and check if one is checked
    for(i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            checkedValue = radioButtons[i].value
        }
    }

    if (checkedValue == "Heads") {
        window.open('fatherIntro.html', "_self");
    } else if (checkedValue == "Tails") {
        window.open('witchIntro.html', "_self");
    } else {
        selectionMessage.style.display = 'block';
    }
}