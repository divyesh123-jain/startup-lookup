const express = require('express')
const cors = require('cors');
const app = express()
const AddRoute = require("./Routes/AddRoute")
const connect = require("./mongoose/mongoose.js")
const port =process.env.PORT || 5500;
require('dotenv').config();

const LoginRoute = require('./Routes/LoginRoute.js');

app.use(cors());
app.use(express.json());

app.use('/api/v1', LoginRoute);
app.use('/api/v1/startup', AddRoute);

app.get('/',(req,res)=>{
    res.send("This works")
})

try {
    const connection = async () => {
        const setup = await connect(process.env.MONGO_URI)
        console.log("DB connected")
        app.listen(port, () => console.log(`App is listening at port ${port}`))
    }
    connection()
}
catch (err) {
    console.log(err)
}