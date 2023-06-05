let alluarjuncurinfo ={
    imgurl: "https://tse1.mm.bing.net/th?id=OIP.cpguvYPuYTC_K3q5q-GHhQHaFg&pid=Api&P=0&h=180",
    name: "Allu Arjun",
    Description: "Indian Actor"
}
let alluarjunchildhoodinfo ={
    imgurl= "https://tse4.mm.bing.net/th?id=OIP.NocGkGQIiQ9Cztc_n58t-gHaJD&pid=Api&P=0&h=180",
    name : "Bunny",
    Description: "stylish star"
}
let isalluarjuncur = true;
let displayobject;
let flipdata = function(){
    if(isalluarjuncur  == true){
        displayobject = alluarjunchildhoodinfo;
        isalluarjuncur = false;
    }
    else{
        displayobject = alluarjuncurinfo;
        isalluarjuncur = true;
    }
    document.getElementById("alluarjun-img").src = displayobject.imgurl;
    document.getElementById("alluarjun-name").src = displayobject.name;
    document.getElementById("alluarjun-designation").src= displayobject.designation;
}