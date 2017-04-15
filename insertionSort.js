function insertionSort(array){
  var len = array.length;
  for(var i = 1;i<len;i++){
    
    var key = array[i];
    
    j= i-1;
    
    for(; (j >= 0 && array[j] > key);j--){
      
      array[j+1]= array[j];
    }
    
    array[j+1]= key;
  }
  return array;
  
}
