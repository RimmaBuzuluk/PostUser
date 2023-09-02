import express from "express"

const PORT= process.env.PORT || 8080
const app = express();

app.get('/',(req, res)=>{
    res.send('hello world')
})


app.listen(PORT, (err)=>{
    if(err){
        return console.log(err)
    }

    console.log(`server was started on port ${PORT}`)
});