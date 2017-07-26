function TimeConvert(num) { 
  var jam = Math.floor(num / 60);  
  var menit = num % 60;
  return jam + ":" + menit; 
  } 
console.log(TimeConvert(126))
