var typeCount = 1;
var TxtType = function(el, toRotate, period) {
this.toRotate = toRotate;
this.el = el;
this.loopNum = 0;
this.period = parseInt(period, 10) || 1000;
this.txt = '';
this.tick();
this.isDeleting = false;
};

TxtType.prototype.tick = function() {
var i = this.loopNum % this.toRotate.length;
var fullTxt = this.toRotate[i];

if (this.isDeleting) {
this.txt = fullTxt.substring(0, this.txt.length - 1);
} else {
this.txt = fullTxt.substring(0, this.txt.length + 1);
}

this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

var that = this;
var delta = 200 - Math.random() * 100;


if (this.isDeleting) { delta /= 2; }

if (!this.isDeleting && this.txt === fullTxt) {
delta = this.period;
if(typeCount==1){
    typeCount++;
    document.getElementById("hero-1").src="img/cv-hero-2.png";
    $('#hero-1').removeClass('animated fadeInRight');
    $('#hero-1').addClass('animated fadeInUp slow');
    /*
    document.getElementById("hero-2").src="img/cv-hero-2.png";
    $('#hero-2').removeClass('animated fadeInRight');
    $('#hero-2').addClass('animated fadeInUp slow');
    */
}else if(typeCount==2){
    typeCount++;
    document.getElementById("hero-1").src="img/cv-hero-3.png";
    $('#hero-1').removeClass('animated fadeInUp slow');
    $('#hero-1').addClass('animated fadeInDown');
    /*
    document.getElementById("hero-2").src="img/cv-hero-3.png";
    $('#hero-2').removeClass('animated fadeInUp slow');
    $('#hero-2').addClass('animated fadeInDown');
    */
}else if(typeCount==3){
    typeCount++;
    document.getElementById("hero-1").src="img/cv-hero-4.png";
    $('#hero-1').removeClass('animated fadeInDown');
    $('#hero-1').addClass('animated fadeInRight');
    /*
    document.getElementById("hero-2").src="img/cv-hero-4.png";
    $('#hero-2').removeClass('animated fadeInDown');
    $('#hero-2').addClass('animated fadeInRight');
    */
}else if(typeCount==4){
    typeCount++;
    document.getElementById("hero-1").src="img/cv-hero-1.png";
    $('#hero-1').removeClass('animated fadeInRight');
    $('#hero-1').addClass('animated fadeInUp');
    /*
    document.getElementById("hero-2").src="img/cv-hero-1.png";
    $('#hero-2').removeClass('animated fadeInRight');
    $('#hero-2').addClass('animated fadeInUp');
    */
}/*else if(typeCount==5){
    typeCount=1;
    document.getElementById("b-1").src="images/banner-1.png";
    $('#b-1').removeClass('animated fadeInUp');
    $('#b-1').addClass('animated fadeInRight');
}*/

this.isDeleting = true;
} else if (this.isDeleting && this.txt === '') {
this.isDeleting = false;
this.loopNum++;
delta = 500;
}

setTimeout(function() {
that.tick();
}, delta);
};

/*
window.onload = function() {
var elements = document.getElementsByClassName('typewrite');


for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-type');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
    }
}
// INJECT CSS
var css = document.createElement("style");
css.type = "text/css";
css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #e6e6e6; }";
document.body.appendChild(css);
};
*/

$(document).ready(function() {

    var elements = document.getElementsByClassName('typewrite');


    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #e6e6e6; }";
    document.body.appendChild(css);

});