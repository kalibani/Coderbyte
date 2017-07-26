function ExOh(str) {
 

var x = str.match(/x/gi) || "";

  var o = str.match(/o/gi) || "";

  if (x.length === o.length) {

    return true;
  
}
  else {
    
return false;
  
}

}

