 function factorial(n){
    let result = 1;
    for(i=2; i<=n; i++){
        result = result * i; 
    }
    return result
 }

 console.log(factorial(5));
 console.log(factorial(10));

//  big-O is O(n)