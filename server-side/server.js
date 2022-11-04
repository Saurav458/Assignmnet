const getPromise=new Promise(resolve,reject){
    if(true){
        resolve("resolved")
    }
    else {
        reject("rejected")
    }
}

getPromise.then((result)=>{
console.log(result)
}).catch((reject)=>{
console.log(reject)
})