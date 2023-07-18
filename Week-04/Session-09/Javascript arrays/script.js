//divideArray into OddEven and SortArray
function divideArray(nums){
    let evenNums = [];
    let oddNums = [];
    
    nums.forEach((number) => {
        (number%2===0) ? (evenNums.push(number)) : (oddNums.push(number));
      });

    console.log("Even Numbers:");
    if(evenNums.length!==0){
        evenNums.sort((a, b) => (a - b));
        for (let j=0; j<evenNums.length;j++){
            console.log(evenNums[j]);
        }
    }else{
        console.log("None");  
    }
    
    console.log("Odd Numbers:");
    if(oddNums.length!==0){
        oddNums.sort((a, b) => (a - b));
        for (let j=0; j<evenNums.length;j++){
            console.log(oddNums[j]);
        }
    }else{
        console.log("None");  
    }
    
    
}