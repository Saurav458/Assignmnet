const express=require('express')
const app1=express()

app1.get('/',(req,res)=>{
    res.send('hello world')
})

app1.listen(8002,()=>{
    console.log(`listening at ${8002}`)
})

// app1.delete("/students/:id",async((req,res)=>{
//     try{
        
// const deleteStudent=await student.findByIdAndDelete(req.params.id)
// if(!result){
// res.status(400).send()
// }
// else{
//     res.send(`stufent deleted`${deleteStudent})
// }
//     }
// catch(e){
//     res.status(500).send(e)
// }
// })

// app1.delete("/students/:id",(req,res)=>{
//     Student.findByIdAndDelete(req.params.id)
//     .then((result)=>{
//         if(!result){
//             res.status(400).send()
//         }
//         else{
//             res.send(result)
//         }
//     })
//     .catch((e)=>{
//         res.status(500).send(e)
//     })
// })