let alluarjunyounginfo ={
    imgurl: "https://tse1.mm.bing.net/th?id=OIP.cpguvYPuYTC_K3q5q-GHhQHaFg&pid=Api&P=0&h=180",
    name: "Allu Arjun",
    Description: "Indian Actor"
};
let displayobject;
let getRandomUser = function(){
    fetch("https://randomuser.me/api")
    .then(response => response.json())
    .then(data=>console.log(data))
    document.getElementById("alluarjun-img").src = displayobject.imgurl;
    document.getElementById("alluarjun-name").innerHTML= displayobject.name;
    document.getElementById("alluarjun-designation").innerHTML= displayobject.Description;
};