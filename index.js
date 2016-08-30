var line = [];

function takeANumber(line, name){
    line.push(name);
    var num = line.length;
    return `Welcome, ${name}. You are number ${num} in line.`;
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else {
    var string = `Currently serving ${line[0]}.`;
   line.shift();
   return string;
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty.";
  }
  else {
    var string= "The line is currently: "
    var array=[]
    for (var i=0; i<line.length; i++){
      array.push(`${i+1}. ${line[i]}`)
    }
     return string + array.join(", ");
  }
}
