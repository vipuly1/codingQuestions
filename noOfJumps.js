const arr = [2,3,1,1,4]
const noOfJumps = (arr) => {
    let jumpCount = 0
    let i = 0
    while (i < arr.length) {
            i = i + arr[i]
            
            console.log(arr[i])
            if (i >= arr.length) {
                jumpCount = -1
                return jumpCount
            }
            else if (i === arr.length - 1) {
                return jumpCount
            }
            else if(arr[i] == 0){
                jumpCount = jumpCount + 1
                break
            }
            console.log("jump added", i)
            jumpCount = jumpCount + 1
        }

    return jumpCount
}
console.log("Total Jumps",noOfJumps(arr))
