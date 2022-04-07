function colorAnswer() {
   var password = document.getElementById("passwordBox2");
  /*add .toUpperCase() String function so that even if the user types in the password in lower-case, it will check against uppercase password text*/
   var passwordText = password.value.toUpperCase();
   if(passwordText == "TUBERCULOSIS") {
    return true;
   }
   /*If the user enters the incorrect answer, they will get a pop-up dialogue with this response/*
   alert("I'm sorry, that is not the correct diagnosis.");
   return false;
   }
