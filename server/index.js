const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

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


app.get("/api/fortune", (req,res) => {
  const fortunes = ["A beautiful, smart, and loving person will be coming into your life.","A fresh start will put you on your way.", "A smile is your personal welcome mat.", "A soft voice may be awfully persuasive.", "Adventure can be real happiness.", ];
  
  let randomIndex2 = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex2];
  
  res.status(200).send(randomFortune);
  
});



app.listen(4000, () => console.log("Server running on 4000"));
