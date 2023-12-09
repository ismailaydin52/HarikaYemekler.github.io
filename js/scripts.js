$(document).ready(function () {
  // Activate WOW.js
  new WOW().init();
});


$(window).ready(function() {
  // Splash Screen
  $("#splash").fadeOut();
});
 
var resimDiv = document.getElementById("column-first");
var resim = document.getElementById("images/arpa-sehriyeli-tavuk-suyu-corba.jpg");

resim.onload = function() {
 var boyutlar = getComputedStyle(resimDiv);
 var genislik = parseInt(boyutlar.getPropertyValue("width"));
 var yukseklik = parseInt(boyutlar.getPropertyValue("height"));

 if (this.width > genislik || this.height > yukseklik) {
    var oran = Math.min(genislik / this.width, yukseklik / this.height);
    this.width = this.width * oran;
    this.height = this.height * oran;
 }
};
