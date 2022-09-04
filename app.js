const express = require('express')
const bodyParser = require('body-parser')

const app = express();

var items= ["Wake Up"];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", (req,res)=>
{

    var today = new Date();
    
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var day = today.toLocaleDateString("en-US",options);
    

    res.render("list",{
        kindOfday: day,
        newListItems: items
       } );

});

app.post("/",(req,res)=>
{
    var item =req.body.nextItem;

    items.push(item);

    res.redirect("/");
    
});

app.listen(process.env.PORT || 3000, ()=> {
    console.log("Server is running on port 3000")
});


