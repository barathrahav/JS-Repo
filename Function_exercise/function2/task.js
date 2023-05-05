function findLargest(side1,side2,side3)
{
    if(side1 && side2 && side3 == 0)
    {
        console.log("Equilateral triangle");
    }
    else if(side1 == side2 || side2 == side3)
    {
        console.log("Isosceles triangle");
    }
    else
    {
        console.log("Scalene triangle");
    }
}
findLargest(10,25,30);