const datevalid=(dd,mm,yy)=>
{
   if(yy>0 && yy<=9999)
    {
        if(mm>=1 && mm<=12)
        {
            
            if((dd>=1 && dd<=31) && (mm===1 || mm===3 || mm===5 || mm===7 || mm===8 || mm===10 || mm===12))
                          console.log("entered date is valid");
                     else if((dd>=1 && dd<=30) && (mm===4 || mm===6 || mm===9 || mm===11))
                           console.log("entered date valid");
                             else if(dd===29 && mm===2 && (yy%400===0 ||(yy%4===0 && yy%100!==0)))
                                   console.log("Date is valid which is leap year");
            else
                console.log("Day is invalid");
        }
        else
        {
            console.log("Month is not valid");
        }
    }
    else
    {
        console.log("Year is not valid");
    }
 
    return 0;    
}
    
console.log(datevalid(29,12,1987));
