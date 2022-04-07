function colorAnswer() {
   var password = document.getElementById("passwordBox2");
  /*add .toUpperCase() String function so that even if the user types in the password in lower-case, it will check against uppercase password text*/
   var passwordText = password.value.toUpperCase();
   if(passwordText == "FOUL PLAY") {
    return true;
   }
   alert("Something else resulted in Poe's strange state that night.");
   return false;
   }
