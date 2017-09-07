$(document).ready(function() {
  // Getting references to our form and input
  var signUpForm = $("form.signup");
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");
  var displaynameInput = $("input#name-input");

  // When the signup button is clicked, we validate the email, password, and displayname are not blank
  signUpForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      username: emailInput.val().trim(),
      password: passwordInput.val().trim(),
      displayname: displaynameInput.val().trim()
    };

    console.log("displayname: " + userData.displayname);

    if (!userData.username || !userData.password || !userData.displayname) {
      return;
    }
    // If we have an email, password, and displayname, run the signUpUser function
    signUpUser(userData.username, userData.password, userData.displayname);
    emailInput.val("");
    passwordInput.val("");
    displaynameInput.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(username, password, displayname) {
    $.post("/api/signup", {
      username: username,
      password: password,
      displayname: displayname
    }).then(function(data) {
      window.location.replace(data);
      // If there's an error, handle it by throwing up a boostrap alert
    }).catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
