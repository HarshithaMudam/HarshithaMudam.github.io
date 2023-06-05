let alluarjunyounginfo ={
    imgurl: "https://tse1.mm.bing.net/th?id=OIP.cpguvYPuYTC_K3q5q-GHhQHaFg&pid=Api&P=0&h=180",
    name: "Allu Arjun",
    Description: "Indian Actor"
};
let alluarjunchildinfo ={
    imgurl: "https://tse4.mm.bing.net/th?id=OIP.NocGkGQIiQ9Cztc_n58t-gHaJD&pid=Api&P=0&h=180",
    name : "Bunny",
    Description: "stylish star"
};
let isalluarjunyoung = true;
let displayobject;
let flipdata = function(){
    if(isalluarjunyoung  == true){
        displayobject = alluarjunchildinfo;
        isalluarjunyoung = false;
    }
    else{
        displayobject = alluarjunyounginfo;
        isalluarjunyoung = true;
    }
    document.getElementById("alluarjun-img").src = displayobject.imgurl;
    document.getElementById("alluarjun-name").innerHTML= displayobject.name;
    document.getElementById("alluarjun-designation").innerHTML= displayobject.Description;
};