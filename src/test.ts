
export function merge(collection_1: number[],collection_2: number[]): number[]{
    var x : number[] = []
    var pointer1 = 0
    var pointer2 = 0
    while (pointer1 != collection_1.length || pointer2 != collection_2.length){
        if (pointer1 == collection_1.length){
            x.push(collection_2[pointer2])
            pointer2 = pointer2 + 1
        }
        else if (pointer2 == collection_2.length){
            x.push(collection_1[pointer1])
            pointer1 = pointer1 + 1
        }
        else if (collection_1[pointer1] < collection_2[pointer2]){
            x.push(collection_1[pointer1])
            pointer1 = pointer1 + 1
        }
        else{
            x.push(collection_2[pointer2])
            pointer2 = pointer2 + 1
        }
    }
    return x
}


// let a1 = [1,3,9]
// let a2 = [2,4,5,6,7,8]

// let a3 : number[] = []
// let a4 : number[] = []

// console.log(merge(a1,a2))

// console.log(merge(a3,a4))