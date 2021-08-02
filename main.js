var dest=new Date("Jan 1,2022 00:00:00").getTime();

let x = setInterval(function(){

var now = new Date().getTime();

var diff = dest - now;

var days = Math.floor(diff / (1000*60*60*24)) ;
console.log(days)
var hours = Math.floor((diff % (1000*60*60*24))/ (1000*60*60)) ;
console.log(hours)
var minutes = Math.floor((diff % (1000*60*60))/ (1000*60)) ;
console.log(minutes)
var secs = Math.floor((diff % (1000*60))/ (1000)) ;
console.log(secs)
document.getElementById("clock").innerHTML=days + "d,  " +hours +"hrs : "+minutes +"mins : "+secs+"s"
},1000);
