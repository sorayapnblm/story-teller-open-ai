const OpenAI = require("openai");
// import { Configuration, OpenAIApi } from "openai";
const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config();

const port = 3080

const openai = new OpenAI({
    organization: "org-tI54CUkXDICLxrt34bIoBqvN",
    apiKey: process.env.OPENAI_API_KEY
});

const app = express();
app.use(bodyParser.json())
app.use(cors())

// async function callApi() {
//     const completion = await openai.chat.completions.create(
//         {
//         messages: [
//             { role: "system", 
//             content: "You are a helpful assistant." 
//             }
//         ],
//         model: "gpt-3.5-turbo",
//         }
//     );
//     console.log(completion.choices[0].message.content);
// }

// Create a simple express api that calls the function above

app.post('/', async (req, res) => {
    const { message } = req.body;
    console.log(message, "message")
    const completion = await openai.chat.completions.create(
        {
        messages: 
        [
            { role: "system", 
            content: `${message}` 
            }
        ],
        model: "gpt-3.5-turbo",
        }
    );
    res.json({
        message: completion.choices[0].message.content,
    })
})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})