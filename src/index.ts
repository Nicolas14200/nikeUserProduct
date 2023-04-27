import  express, { Request, Response, Application} from "express"
import { CreateProductRouter } from "./app/CreateProductRouter";

const app: Application = express();
app.use(express.json());
app.get('/', (req: Request, res:Response)=>{
    return res.status(200).send("hello")
})
app.use(CreateProductRouter)
app.listen(3000)