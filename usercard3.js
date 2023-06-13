let alluarjunyounginfo ={
    imgurl: "https://tse1.mm.bing.net/th?id=OIP.cpguvYPuYTC_K3q5q-GHhQHaFg&pid=Api&P=0&h=180",
    name: "Allu Arjun",
    Description: "Indian Actor"
};


let displayobject = {
    name :"",
    imgurl:"",
    Description:""
};
let getRandomUser = function(){
    fetch("https://randomuser.me/api")
    .then(response => response.json())
    .then(data=>{
        displayobject.name = data.results[0].name.first + " "+data.results[0].name.last
        //displayobject.name = "User Name"
        displayobject.imgurl = data.results[0].picture.large
        displayobject.Description = data.results[0].genger
        document.getElementById("alluarjun-img").src = displayobject.imgurl;
        document.getElementById("alluarjun-name").innerHTML= displayobject.name;
        document.getElementById("alluarjun-designation").innerHTML= displayobject.Description;
    })
};