import express from "express"
import { createClothing, getAllClothing} from "./src/clothing.js"

const app = express()

app.use(express.json())
app.post('/clothing', createClothing)
app.get('/clothing', getAllClothing)




app.listen(3030, () => console.log ('Listen on http://localhost:3030...'))
