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
    $('#img-hero-1').addClass('d-none');
    $('#img-hero-2').removeClass('d-none');
}else if(typeCount==2){
    typeCount++;
    $('#img-hero-2').addClass('d-none');
    $('#img-hero-3').removeClass('d-none');
}else if(typeCount==3){
    typeCount++;
    $('#img-hero-3').addClass('d-none');
    $('#img-hero-4').removeClass('d-none');
}else if(typeCount==4){
    typeCount++;
    $('#img-hero-4').addClass('d-none');
    $('#img-hero-1').removeClass('d-none');
}

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
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #e6e6e6; }";
    document.body.appendChild(css);

});
