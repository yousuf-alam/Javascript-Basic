function evenodd(limit){

    for(var i=1;i<=limit;i++)
    {
    
        let msg= (i%2==0)? 'even': 'Odd';

        document.write(i + "  "+ msg + "</br>");


    }


}

evenodd(10);