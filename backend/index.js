const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const r = await axios.put (
        'https://api.chatengine.io/users/',
        {username: username, secret: username, first_name: username},
        {headers: {"private-key":"e1892932-36ac-489b-a103-30a51a1ccda5"}}
    )
  } catch (e) {

  }
  return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001);