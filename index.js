const express = require("express");
const app = express();
const PORT = 3000;
const bonjour = require("./data/bonjour.json");


app.set("views","./views");
app.set("view engine","ejs");



app.get("/",(req,res)=>{
    res.redirect("/en")
})

app.get("/:id", (req,res)=>{
    const id = req.params.id ;
    const foundBonjour = bonjour.find((listOfBonjour)=>{
        return listOfBonjour.id === id;
    })
    res.render("home", {       
        listOfBonjour : foundBonjour,
       
    })
});






app.listen(PORT, () => {
    console.log(`Lancement du port ${PORT}`)
});