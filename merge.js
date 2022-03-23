// The big O notation of merge sort is o(nlogn)
const my = [1]

const mergeSort =(array)=>{
if(array.length<2){
    return array
}
const mid = Math.floor(
    array.length/2)

const myLeft = array.slice(0, mid)
const myRight = array.slice(mid, array.length)

return merge(mergeSort(myLeft), mergeSort(myRight))
}


const merge = (left, right)=>{

}