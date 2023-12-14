import React from "react"

function choice(arr) {
    let i = Math.floor(Math.random() * arr.length)
    return arr[i]
}

function remove(arr, item) {
    /// filter or slice 
    // iterate, if item  is in slice plus one 
if (arr.includes(item)){
   let idx =  arr.indexOf(item)
   arr.splice(idx,1)
   return arr
}
}




export {choice, remove}


