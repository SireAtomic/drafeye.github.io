
/* ---- stats.js config ---- */


var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 300 - Math.random() * 100;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
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
  
  window.onload = function() {
    var start = false;
    var title = document.getElementById("hover")
    title.onmouseover = function() {
        $('#hover').css("color", 'rgb(46, 46, 46)');
        $('#hover').css("text-shadow", '0 0 1px rgb(0, 123, 255), 0 0 1px rgb(0, 123, 255), 0 0 1px rgb(0, 123, 255), 0 0 1px rgb(0, 123, 255), 0 0 1px rgb(0, 123, 255), 0 0 1px rgb(0, 123, 255), 0 0 1px rgb(0, 123, 255), 0 0 1px rgb(0, 123, 255), 0 0 1px rgb(0, 123, 255), 0 0 1px rgb(0, 123, 255), 0 0 1px rgb(0, 123, 255), 0 0 1px rgb(0, 123, 255), 0 0 1px rgb(0, 123, 255), 0 0 1px rgb(0, 123, 255), 0 0 1px rgb(0, 123, 255), 0 0 1px rgb(0, 123, 255), 0 0 1px rgb(0, 123, 255), 0 0 1px rgb(0, 123, 255), 0 0 1px rgb(0, 123, 255), 0 0 1px rgb(0, 123, 255)');
    }
    title.onmouseleave = function() {
        $('#hover').css("color", 'rgb(179, 232, 245)');
        $('#hover').css("text-shadow", 'none');
    }
    setTimeout(function(){
    $('.spinner').fadeOut("slow");
    }, 1000);
    setTimeout(function(){
    $('.fadein').css('display', 'block'); 
    start = true;
    }, 500);
    
    setTimeout(function(){
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }}, 1500);
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid rgb(133, 166, 141) }";
    document.body.appendChild(css);
  };

  /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
