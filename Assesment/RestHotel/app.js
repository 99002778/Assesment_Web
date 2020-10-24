const send=require("process")
const app=require("express")()
const hotel=require("./hotel.json")

app.get("/hoteldata",function(req,res){
    let sdata=[];
    hotel.forEach(element => {
         sdata.push(element)
       
    });
    res.send(sdata);
    
})
app.get("/hotelcity",function(req,res){
    let sdata=[];
    let city=req.query.sCity;
    hotel.forEach(element => {
         if(element.city==city) 
            sdata.push(element)
       
    });
    res.send(sdata);
    
})




app.listen(1234,function(req,res){
    console.log("Running at 1234");
})