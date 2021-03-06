const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());
const ctrl = require('./controller')
app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});
app.get("/api/fortune", (req, res) => {
  const fortunes = ["A good time to finish up old tasks.",
  "A hunch is creativity trying to tell you something.",
  "A lifetime friend shall soon be made.",
   "A lifetime of happiness lies ahead of you.",
    "A light heart carries you through all the hard times.",
  ];

  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex];

  res.status(200).send(randomFortune);
});

app.get('/api/moods', ctrl.getAllMoods) 
app.post('/api/moods', ctrl.createMood)
app.put('/api/moods/:id', ctrl.updateMood)
app.delete('/api/moods/:id', ctrl.deleteMood)


app.listen(4000, () => console.log("Server running on 4000"));
