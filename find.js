function findByUsername(arr,key){
    return arr.find((user)=>{
        return user.username === key;
    })
}

function removeUser(arr,username){
    let fidx = arr.findindex((user)=>{
        return user.username === username;
    })
    if(fidx === -1) return;
    return arr.splice(fidx,1)[0]
}