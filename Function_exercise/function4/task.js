function operator(a,num1,num2)
{
    if(a == "+")
    {
       var num3 = num1 + num2;
       console.log(num3);
    }
    else if(a == "-")
    {
        num3 = num1 - num2;
        console.log(num3);
    }
    else if(a == "*")
    {
        num3 = num1 * num2;
        console.log(num3);
    }
    else if(a == "/")
    {
        num3 = num1 / num2;
        console.log(num3);
    }
    else if(a == "%")
    {
        num3 = num1 % num2;
        console.log(num3);
    }
    else
    {
        console.log("Invalid operation");
    }
}
operator("*",5,2);