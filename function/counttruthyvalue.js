function counttruthy(array){
 var count=0;
for(let value of array)

if(value)
 count++;

 return count;

}

let array=[1,23,undefined,null,0,3,9]

let counttruthyvalue= counttruthy(array);

document.write(counttruthyvalue);