function fizzBuzz(list1, list2) {

    // combine the two arrays
    var num = list1.length + list2.length;    
    
        //the length is divisible by both 5 and 3 return fizzBuzz
        if(num % 3 == 0 && num % 5 == 0){  
            return 'Fizzbuzz';
        }
            //the length is divisible by 3, return fizz
            if(num % 3 == 0){ 
                    return 'Fizz';  
            }
                        //the length is divisible by 5, return buzz
                        if(num % 5 == 0){
                            return 'Buzz';
                        }
                         //not divisible by either 5 or 3, return the combined array
                        else{    
                            return num;
                        }
    }
//console.log(fizzBuzz([1, 2, 3, 4, 5, 6, 7, 8], [1, 2, 3, 4, 5, 6, 7]));
module.exports = fizzBuzz;