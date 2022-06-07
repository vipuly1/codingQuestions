//Find the Union and Intersection of the two sorted arrays.

const arr1 = [1, 3, 4, 5, 7]
const arr2 = [2, 3, 5, 6]

const unionAndIntersection = (arr1, arr2) => {
    const union = []
    const intersection = []
    let [size1, size2, i, j] = [arr1.length, arr2.length, 0,0]
    while(i<size1 && j<size2){
        if(arr1[i] <arr2[j]){
           union.push(arr1[i])
            i++
        }
        else if(arr1[i] > arr2[j]){
            union.push(arr2[j])
            j++
        }
        else if(arr1[i] === arr2[j]){
            union.push(arr1[i])
            intersection.push(arr1[i])
            i++
            j++
        }
    }
    while(i<size1){
        union.push(arr1[i])
        i++
    }
    while(j<size2){
        union.push(arr2[j])
        j++
    }
    
    console.log(union)
    return [union, intersection]
}

const union_intersection = unionAndIntersection(arr1, arr2)
console.log(union_intersection[0], union_intersection[1])
