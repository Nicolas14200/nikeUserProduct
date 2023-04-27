import  express, { Request, Response, Application} from "express"

const app: Application = express();

app.get('/', (req: Request, res:Response)=>{
    return res.status(200).send("hello")
})
app.use()
app.listen(3000)