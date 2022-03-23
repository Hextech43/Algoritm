// recursion helps our loop to run at log rather than n


const  dataSet  =[1,2,3,4,5,6,7]

const mySearch = (array, target)=>{
    return mySearchRecur(array, target, 0, array.length )

}

const mySearchRecur =(array, target, left, right)=>{

    let mid = Math.floor((left + right)/2)
if(left>right){
        return undefined
    }
  else if(target===array[mid]){
        return mid
    }else if (target < array[mid]){
        return mySearchRecur(array, target, mid-1, right)
    } else{
        return mySearchRecur(array, target, left, mid+1)
    }

}
// console.log(mySearch(dataSet,7))


class  Node{
    constructor(value){
        this.value = value
        this.left= null
        this.right= null

    }
}


class binarysearch{
    constructor(){
        this.root = null
    }

    



    push(value){
        const newNode = new Node(value)

        if(!this.root){

        
            this.root = newNode
            return this
        }
        let current = this.root

        if(value< current.value){
            if(!current.left){
                current.left = newNode
                return this
            }
            current.left = current


        } else  if(value> current.value){
            if(!current.right){
                current.right = newNode
                return this
            }
            current.right = current
        } else if(value === current.value){
            return undefined
        }
    }
}