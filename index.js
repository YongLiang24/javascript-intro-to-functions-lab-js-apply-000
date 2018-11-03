function shout(string)
{
  return string.toUpperCase();
}

function whisper(string){
  return string.toLowerCase();
}

function logShout(string){
  var uppercase = string.toUpperCase();
  console.log(uppercase);
}

function logWhisper(string){
  var lowercase = string.toLowerCase();
  console.log(lowercase);
}

function sayHiToGrandma(string){
  if(string == string.toLowerCase()){
    string result = "I can\'t hear you!";
    return result;
  }
}
