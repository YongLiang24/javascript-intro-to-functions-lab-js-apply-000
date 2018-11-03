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

  var result;
  if(string === string.toLowerCase()){
    result = "I can\'t hear you!";
    return result;
  }
  else if (string === string.toLowerCase())
  {
    result ="YES INDEED!";
    return result;
  }
}
