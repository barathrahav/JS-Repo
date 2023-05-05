function findLargest(a, b, c) {
    if(a>b && b>c){
        console.log("A is Largest");
    }
    else if(b>a && b>c){
        console.log("B is Largest");
    }
    else {
        console.log("C is Largest");
    }
}
findLargest(2,4,6);
