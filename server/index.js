const OpenAI = require("openai");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const port = 3080;

const openai = new OpenAI({
  organization: "org-tI54CUkXDICLxrt34bIoBqvN",
  apiKey: process.env.OPENAI_API_KEY,
});

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post("/", async (req, res) => {
  const { message } = req.body;
  console.log("const { message } = req.body:    ", message);

  const completion = await openai.chat.completions.create({
    messages: [
        { "role": "system", "content": "Talk like a fairy."},
        { "role": "user", "content": `${message}`}
    ],
    model: "gpt-3.5-turbo",
  });

    // const completion = await openai.chat.completions.create({
    //   messages: [{ "role": "system", "content": `${message}` }],
    //   model: "gpt-3.5-turbo",
    // });

  console.log(completion.choices[0].message);
  res.json({
    message: completion.choices[0].message.content,
  });

});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
