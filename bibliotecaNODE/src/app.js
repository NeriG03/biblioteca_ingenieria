import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import routes from "../routes/index.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Esta es la raiz de mi biblioteca');
})

routes(app);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

