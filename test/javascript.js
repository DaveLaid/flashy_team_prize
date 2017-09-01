// Form - User submits cards (complete)
// Captures ID generated from database.
// ID is then concatenated to URL "www.flashy.com/flashcards/1"
// New URL then is displayed, allows user to share via e-mail send.
//

function createURL(){
	var inpObj = $("#fname");
    if (inpObj.checkValidity() == false) {
        $("#fname").html = inpObj.validationMessage;
    }
    $("#fname").innerHTML = inpObj;
}
