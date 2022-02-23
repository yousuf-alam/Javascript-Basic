function grade(marks){

 if(marks>=80)
    return 'A+';
   
if (marks>=75)
   return 'A';

if(marks>=70)
  return 'A-';
if(marks>=65)

  return'B+';

  if(marks>=60)
  return 'B';
 
if (marks>=55)
 return 'B-';

if(marks>=50)
   return 'C+';
if(marks>=45)

return'C';

if(marks>=40)
 return 'D';

else

 return 'F'

}


let gradeofmarks=grade(62);

document.write(gradeofmarks)