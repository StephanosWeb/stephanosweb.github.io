function encryption() {
  var encryption_key = "6170706C65333231"
  var passkey = ""
  for(var i=0;i<encryption_key.length;i=i+2){passkey=passkey+'%'+encryption_key.substr(i,2);}
  return unescape(passkey);
}

function login() {
  var entry = prompt('Please enter the password provided by your teacher:');
  var key = encryption();
  if (entry.toLowerCase() == key) {
      window.location='/downloads/TycoonExercise4-Finished.rbxl';
  }
}
