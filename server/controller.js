const { globalAgent } = require('http');
const moods = require('./db.json');

let globalId = 4;

module.exports = {
getAllMoods: (req, res) => {
    res.status(200).send(moods)
    // console.log(getAllMoods)
},
deleteMood: (req, res) => {
    let MoodsIndex = moods.findIndex((mood) => mood.id === Number(req.params.id));
    console.log(moodsIndex);
    moods.splice(moodsIndex, 1)
    res.status(200).send(moods)
},

createMood: (req,res) => {
    let {address,  imageURL} = req.body
    let newMood = {
        id:globalId,
        address, 
       
        imageURL
}
moods.push(newMood)
res.status(200).send(moods)
globalId++;
},

updateMood: (req, res)=> {
    let requestId = req.params.id;
    let moodsIndex = moods.findIndex((mood) => mood.id === Number(req.params.id));

    if (req.body.type === "I am in alignment"){
        alert ("Proud of you");
     
    }else if (req.body.type === "I can do better"){
        alert('WE got this')
    }
    res.status(200).send(moods)
}


}