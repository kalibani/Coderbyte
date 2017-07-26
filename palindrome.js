function Palindrome(str) {
 
    var y=str.replace(/[^A-Z0-9]/ig, "").toLowerCase();

    var z=  y.split('').reverse().join('');

   
  if(y==z){

      return 'true'

  }else{

      return 'false'

  }


}
