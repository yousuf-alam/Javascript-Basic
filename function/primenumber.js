function Prime(num){

   

    for(let count=2;count<num;count++)

       if(num%count===0)

          return false;
    return true;      

}

function showPrime(limit)
{

   for(let num=2;num<=limit;num++)

     if(Prime(num))
       document.write(num + "</br>");


}

showPrime(50);