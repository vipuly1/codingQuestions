const arr = [4,3,1,1,3,3,2]

const filteredArray = arr.filter(item=>{
    if(item%2==0 ){
        return item
    }
    
})

console.log(filteredArray)