function monthdays(month,year) 
{
    if (month <= 12)
    {
        if (month == 2) 
        {
            if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) 
            {
                console.log("The Month has 29 days.");
            } 
            else 
            {
                console.log("The Month has 28 days.");
            }            
        } 
        else if (month == 4 || month == 6 || month == 9 || month == 11) 
        {
            console.log("The Month has 30 days.");
        } 
        else 
        {
            console.log("The Month has 31 days.");
        }
    } 
    else 
    {
        console.log("Invalid month");
    }
}

monthdays(8,2023);