// binary search algorithn

const prompt = require("prompt-sync")();

// let name = prompt("What is your name:")
// console.log(`OH, Welcome ${name}`)


// let x = parseInt(prompt("What is your first value:"))
// let y = parseInt(prompt("What is your secong value:"))

// let z = x*y
// console.log(z)





let luckyNum = Math.floor(Math.random()*10)
// let guessNum = parseInt(prompt("What is my luckt Number:"))


// if(luckyNum===guessNum){
//     console.log("Now you guessed my mind, right!")

// }else if(luckyNum>guessNum){
//     console.log("You are wrong..!")
//     console.log("The value is too low...")
// } else if (luckyNum< guessNum){
//     console.log("You are  wrong..!")
//     console.log("Your input is too high")
// }


// while(true){
//   let guessNum = parseInt(prompt("What is my luckt Number:"))


// if(luckyNum===guessNum){
//     console.log("Now you guessed my mind, right!")
//     break
// }else if(luckyNum>guessNum){
//     console.log("You are wrong..!")
//     console.log("The value is too low...")
// } else if (luckyNum< guessNum){
//     console.log("You are  wrong..!")
//     console.log("Your input is too high")
// }

// }

let dataSet = [1,2,3,4,5,6,7,8,9,10]
let dataSet1 = {1:"one", 2:"two", 3:"three", 4:"four", 5:"five",6:"six", 7:"seven", 8:"eight", 9:"nine",10:"ten"}

const mySearch = (array, target)=>{
    let left = 0
    let right = array.length-1


    while(left < right){

  let mid =  Math.floor((left + right)/2)

  if(target=== array[mid]){
      return mid 
  }else if(target<array[mid]){
    left= mid -1
  } else{
      right = mid +1
  }
    }
}
  
// for in :used for object
// for off: used for array

// linear search algorithm

// let newSearch =[]
// for(let x in dataSet1){
//     newSearch.push(x)
//     console.log(dataSet1[x])
// }
// console.log(newSearch)

