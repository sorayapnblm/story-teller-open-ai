const OpenAI = require("openai");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const mongoose = require('mongoose')
const UserModel = require('./models/User')

const port = 3080;

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const app = express();
app.use(bodyParser.json());
app.use(cors());



app.post("/", async (req, res) => {
  const { message, systemMessage } = req.body;

  const completion = await openai.chat.completions.create({
    messages: [
        { "role": "system", "content": systemMessage},
        { "role": "user", "content": `${message}`}
    ],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0].message);
  res.json({
    message: completion.choices[0].message.content,
  });
});




// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/user-story-teller", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on('open', () => {
  console.log("Connected to MongoDB");

  // Start the server after the database connection is established
  app.post('/register', (req, res) => {
    UserModel.create(req.body)
      .then(user => res.json(user))
      .catch(err => res.json(err))
  });

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });

  app.post("/login", (req, res) => {
    const { email, password } = req.body;
    UserModel.findOne({email: email})
    .then(user => {
      if (user) {
        if (user.password === password) {
          res.json("Success")
        } else {
          res.json("The password is incorrect")
        }
      } else {
        res.json("No record existed")
      }
    })
  })
});

