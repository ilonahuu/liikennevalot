valojenohjausPoisPaalta();
var tulevaTimeout;

function vaihe1(){  
  console.log("Päätiellä suoraan menevillä on vihreät valot");
  valotPois();
  
  valoPaalle(".ylavalo-suoraan .vihrea", "chartreuse");
  valoPaalle(".ylavalo-nuoli-vasen .punainen", "red");
  
  valoPaalle(".vasenvalo-suoraan .punainen", "red");
  valoPaalle(".oikeavalo-suoraan .punainen", "red");
 
  valoPaalle(".alavalo-nuoli-vasen .punainen", "red");
  valoPaalle(".alavalo-suoraan .vihrea", "chartreuse");
  
  tulevaTimeout = setTimeout(vaihe2, 27000);
}

function vaihe2(){
  console.log("Päätie suoraan menevillä muuttuu keltaiseksi");
  valotPois();
  
  valoPaalle(".ylavalo-suoraan .keltainen", "yellow");
  valoPaalle(".ylavalo-nuoli-vasen .punainen", "red");
  
  valoPaalle(".vasenvalo-suoraan .punainen", "red");
  valoPaalle(".oikeavalo-suoraan .punainen", "red");
  
  valoPaalle(".alavalo-nuoli-vasen .punainen", "red");
  valoPaalle(".alavalo-suoraan .keltainen", "yellow");
  
  tulevaTimeout = setTimeout(vaihe3, 4000);
}

function vaihe3(){
  console.log("Siirtymässä siihen että päätiet kääntyy vasemmalle, sivutiet oikealle");
  valotPois();
  
  valoPaalle(".ylavalo-suoraan .punainen", "red");
  valoPaalle(".ylavalo-nuoli-vasen .punainen", "red");
  valoPaalle(".ylavalo-nuoli-vasen .keltainen", "yellow");
  
  valoPaalle(".vasenvalo-suoraan .punainen", "red");
  valoPaalle(".vasenvalo-nuoli-oikea .keltainen", "yellow"
  )
  valoPaalle(".oikeavalo-suoraan .punainen", "red");
  valoPaalle(".oikeavalo-nuoli-oikea .keltainen", "yellow")
  
  valoPaalle(".alavalo-nuoli-vasen .punainen", "red");
  valoPaalle(".alavalo-nuoli-vasen .keltainen", "yellow");
  valoPaalle(".alavalo-suoraan .punainen", "red");
    
  tulevaTimeout = setTimeout(vaihe4, 3000);
}
function vaihe4(){
  console.log("Päätiet kääntyy vasemmalle, sivutiet oikealle");
  valotPois();
  
  valoPaalle(".ylavalo-suoraan .punainen", "red"); 
  valoPaalle(".ylavalo-nuoli-vasen .vihrea", "chartreuse");
    
  valoPaalle(".vasenvalo-suoraan .punainen", "red");
  valoPaalle(".vasenvalo-nuoli-oikea .vihrea", "chartreuse");
  
  valoPaalle(".oikeavalo-suoraan .punainen", "red");
  valoPaalle(".oikeavalo-nuoli-oikea .vihrea", "chartreuse")
  
  valoPaalle(".alavalo-nuoli-vasen .vihrea", "chartreuse");
  valoPaalle(".alavalo-suoraan .punainen", "red");
  
  tulevaTimeout = setTimeout(vaihe5, 20000);
}
function vaihe5(){
  console.log("Pääteiden vasemmalle kääntyminen loppuu ja muuttuu keltaiseksi");  
  valotPois();
  
  valoPaalle(".ylavalo-suoraan .punainen", "red"); 
  valoPaalle(".ylavalo-nuoli-vasen .keltainen", "yellow");
  
  valoPaalle(".vasenvalo-suoraan .punainen", "red");
  valoPaalle(".vasenvalo-nuoli-oikea .vihrea", "chartreuse");
  valoPaalle(".oikeavalo-suoraan .punainen", "red");
  valoPaalle(".oikeavalo-nuoli-oikea .vihrea", "chartreuse")
  
  valoPaalle(".alavalo-nuoli-vasen .keltainen", "yellow");
  valoPaalle(".alavalo-suoraan .punainen", "red");
  
  tulevaTimeout = setTimeout(vaihe6, 4000);
}
function vaihe6(){
  console.log("Valmistaudutaan sivuteiden vihreään valoon.");  
  valotPois();
  
  valoPaalle(".ylavalo-suoraan .punainen", "red"); 
  valoPaalle(".ylavalo-nuoli-vasen .punainen", "red");
  
  valoPaalle(".vasenvalo-suoraan .punainen", "red");
  valoPaalle(".vasenvalo-suoraan .keltainen", "yellow");
  valoPaalle(".vasenvalo-nuoli-oikea .vihrea", "chartreuse");
  
  valoPaalle(".oikeavalo-suoraan .punainen", "red");
  valoPaalle(".oikeavalo-suoraan .keltainen", "yellow");
  valoPaalle(".oikeavalo-nuoli-oikea .vihrea", "chartreuse")
  
  valoPaalle(".alavalo-nuoli-vasen .punainen", "red");  
  valoPaalle(".alavalo-suoraan .punainen", "red");
  
  tulevaTimeout = setTimeout(vaihe7, 3000);
}
function vaihe7(){
  console.log("Sivuteiltä suoraan ja oikealle, päätiet punaiset");  
  valotPois();
  
  valoPaalle(".ylavalo-suoraan .punainen", "red"); 
  valoPaalle(".ylavalo-nuoli-vasen .punainen", "red");
  
  valoPaalle(".vasenvalo-suoraan .vihrea", "chartreuse");
  
  valoPaalle(".oikeavalo-suoraan .vihrea", "chartreuse");
  
  valoPaalle(".alavalo-nuoli-vasen .punainen", "red");  
  valoPaalle(".alavalo-suoraan .punainen", "red");
  
  tulevaTimeout = setTimeout(vaihe8, 15000);
}
function vaihe8(){
  console.log("Siirrytään keltaisiin valoihin sivuteillä");  
  valotPois();
  
  valoPaalle(".ylavalo-suoraan .punainen", "red"); 
  valoPaalle(".ylavalo-nuoli-vasen .punainen", "red");
  
  valoPaalle(".vasenvalo-suoraan .keltainen", "yellow")
  
  valoPaalle(".oikeavalo-suoraan .keltainen", "yellow")
  
  valoPaalle(".alavalo-nuoli-vasen .punainen", "red");  
  valoPaalle(".alavalo-suoraan .punainen", "red");
  
  tulevaTimeout = setTimeout(vaihe9, 4000);
}
function vaihe9(){
  console.log("päätiet keltaiset, valmistautuu pääteiden liikenteeseen");  
  valotPois();
  
  valoPaalle(".ylavalo-suoraan .punainen", "red"); 
  valoPaalle(".ylavalo-suoraan .keltainen", "yellow");
  valoPaalle(".ylavalo-nuoli-vasen .punainen", "red");
  
  valoPaalle(".vasenvalo-suoraan .punainen", "red");
  
  valoPaalle(".oikeavalo-suoraan .punainen", "red");
    
  valoPaalle(".alavalo-nuoli-vasen .punainen", "red");  
  valoPaalle(".alavalo-suoraan .punainen", "red");
  valoPaalle(".alavalo-suoraan .keltainen", "yellow");
  
  tulevaTimeout = setTimeout(vaihe1, 3000);
}

function valoPaalle(sijainti, vari) {
  var valo = document.querySelector(sijainti);
  valo.style.backgroundColor = vari;
}

function valotPois(sijanti){
  var valot = document.querySelectorAll(".punainen, .vihrea, .keltainen");
  valot.forEach(function(valo){
    valo.style.backgroundColor = "";
  })
}

function valojenohjausPoisPaalta(){
  clearTimeout(tulevaTimeout);
  valotPois();
  
  var valot = document.querySelectorAll(".keltainen");
  valot.forEach(function(valo){ 
    valo.style.animation = "valot-kiinni-keltainen 1s infinite";
  });
}

function valojenohjausAlkaa() {
  var valot = document.querySelectorAll(".keltainen");
  valot.forEach(function(valo){ 
    valo.style.animation = "";
  });
  setTimeout(vaihe1, 2000);
}
