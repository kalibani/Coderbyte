function OtherProducts(arr) {
 

    var hasil=[]
  
	for(i=0; i<arr.length; i++){

     var x=1
    for(j=0; j<arr.length; j++){

      if(i != j){

        x *= arr[j]

      }
    
}
hasil.push(x)

}
   
arr= hasil.join('-')
   
return arr

}

