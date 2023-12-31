const express=require("express") 
const userRouter=require("./routes/user.routes");
const postRouter=require('./routes/post.routes')
const commentRouter=require('./routes/comment.routes')

const PORT= process.env.PORT || 8080
const app = express();

app.use(express.json())
app.use('/api', userRouter); 
app.use('/api', postRouter); 
app.use('/api', commentRouter); 

app.listen(PORT, (err)=>{
    if(err){
        return console.log(err)
    }

    console.log(`server was started on port ${PORT}`)
});