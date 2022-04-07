function colorAnswer() {
   var password = document.getElementById("passwordBox2");
  /*add .toUpperCase() String function so that regardless of the case the user answers in, it will check against the uppercase password text*/
   var passwordText = password.value.toUpperCase();
   if(passwordText == "TUBERCULOSIS") {
    return true;
   }
   alert("I'm sorry, that is not the correct diagnosis.");
   return false;
   }
