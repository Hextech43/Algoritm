

// console.log(x.sort((a,b)=>{
//     return a-b
// }))

// const mrray = [
//     {  name:"Esther",  age:"21" },
//     {  name:"Nelson",  age:"27" },
//     {  name:"Jeemiah",  age:"29" },
//     {  name:"William",  age:"24" }
// ]

// myArray.sort((a,b)=>{
//     return a.age-b.age
// })

const myArray =[0,1,5,7,3,9]
const a = myArray
const n = a.length
// i is the path
for(i=0; i<n-1-i; i++){
    for(j=0; j<n-1; j++){
        if(a[j]>a[j+1]){
            let swap = a[j]
            a[j] = a[j+1]
            a[j+1] = swap

        }
    }
}
console.log(a)
 