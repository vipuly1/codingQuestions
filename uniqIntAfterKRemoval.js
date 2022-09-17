var findLeastNumOfUniqueInts = function(arr, k) {
    const obj = new Object()
    const mappedArray = arr.map(item =>{
        if(item in obj){
            const Obj = {...obj, [item]: (obj[item])+2} 
        }
        else{
            
            const Obj = {...obj, [item]: 1} 
            console.log(Obj[item])
        }

        
    })
    
    
};

findLeastNumOfUniqueInts(arr = [4,3,1,1,3,3,2], k = 3)
