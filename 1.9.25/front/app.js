import express, { json } from "express"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors({
    origin: "*",
    methods: ["post", "get", "put", "delete", "options", "patch"],
    allowedHeaders: ["content-type", "autorization"]
}))

app.get("/data",async (req,res)=>{
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos")
        const json = await response.json()
        res.json(json)

    } catch (error) {
        console.log(error);
    }
})
app.listen(4000, () => {
    console.log("server runing on port 4000");
})