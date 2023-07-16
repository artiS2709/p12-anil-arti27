//divideArray into OddEven and SortArray
function divideArray(nums){
    let evenNums = [];
    let oddNums = [];
    for (let i=0;i<nums.length;i++){
        if(nums[i]%2===0){
             evenNums.push(nums[i]);
        }else{
             oddNums.push(nums[i]);
        }
    }

    console.log("Even Numbers:");
    if(evenNums.length!==0){
        evenNums.sort();
        for (let j=0; j<evenNums.length;j++){
            console.log(evenNums[j]);
        }
    }else{
        console.log("None");  
    }
    
    console.log("Odd Numbers:");
    if(oddNums.length!==0){
        oddNums.sort();
        for (let j=0; j<evenNums.length;j++){
            console.log(oddNums[j]);
        }
    }else{
        console.log("None");  
    }
    
    
}