/*
* toptext.js
* Upload a range higher and lower one smaller range
* Sube un rango mayor  y baja un rango menor
* by @jofpin
* for preytext
*/
function Toptext(p, t) {
  return (parseInt(- $(p).find("#vistas").text(), 10) - parseInt(- $(t).find("#vistas").text(), 10));
} 
$("#top").click(function() {
$("section").sort(Toptext).appendTo("main");    
});
