function fizzbuzz(num){

if(typeof num !=='number')
  return NaN;

if((num%3==0) && (num%5==0))
     return 'fizbuzz';
  
if(num%3==0)
  return 'fizz';

if(num%5==0)
  return 'Buzz'
  
return num;  


}

var output= fizzbuzz(30);

document.write(output);