//move negative elements to one side of the array
const arr = [143, -45, -154, 5, -205, 11, 3, -8]

const moveNegative = (arr) => {
    let positive = []
    let negative = []
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] < 0){
            negative.push(arr[i])
        }
        else if(arr[i] > 0){
            positive.push(arr[i])
        }
    }
    let sortedElements = [...negative, ...positive]

    return sortedElements
    
}

const moveNegativeElement = moveNegative(arr)
console.log(moveNegativeElement)