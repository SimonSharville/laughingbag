// JavaScript Document


function preloader() {
  if (document.images) {
    var img1 = new Image();
    var img2 = new Image();
    var img3 = new Image();
    var img4 = new Image();
    var img5 = new Image();
    var img6 = new Image();
    var img7 = new Image();
    var img8 = new Image();
    var img9 = new Image();
    var img10 = new Image();
    var img11 = new Image();
    var img12 = new Image();
    var img13 = new Image();
    var img14 = new Image();
    var img15 = new Image();
    var img16 = new Image();
    var img17 = new Image();
    var img18 = new Image();
    var img19 = new Image();
    var img20 = new Image();
    var img21 = new Image();
    var img22 = new Image();
    var img23 = new Image();
    var img24 = new Image();
    var img25 = new Image();
    var img26 = new Image();
    var img27 = new Image();
    var img28 = new Image();
    var img29 = new Image();
    var img30 = new Image();
    var img31 = new Image();
    var img32 = new Image();


    img1.src = "http://www.laughingbag.co.uk/assets/images/Laughing-Bag.png";
    img2.src = "http://www.laughingbag.co.uk/assets/images/bubble_A01.png";
    img3.src = "http://www.laughingbag.co.uk/assets/images/bubble_A02.png";
    img4.src = "http://www.laughingbag.co.uk/assets/images/bubble_A03.png";
    img5.src = "http://www.laughingbag.co.uk/assets/images/bubble_A04.png";
    img6.src = "http://www.laughingbag.co.uk/assets/images/bubble_A05.png";
    img7.src = "http://www.laughingbag.co.uk/assets/images/bubble_A06.png";
    img8.src = "http://www.laughingbag.co.uk/assets/images/bubble_A07.png";
    img9.src = "http://www.laughingbag.co.uk/assets/images/bubble_A08.png";
    img10.src = "http://www.laughingbag.co.uk/assets/images/bubble_B01.png";
    img11.src = "http://www.laughingbag.co.uk/assets/images/bubble_B02.png";
    img12.src = "http://www.laughingbag.co.uk/assets/images/bubble_B03.png";
    img13.src = "http://www.laughingbag.co.uk/assets/images/bubble_B04.png";
    img15.src = "http://www.laughingbag.co.uk/assets/images/bubble_B06.png";
    img16.src = "http://www.laughingbag.co.uk/assets/images/bubble_B07.png";
    img17.src = "http://www.laughingbag.co.uk/assets/images/bubble_B08.png";
    img18.src = "http://www.laughingbag.co.uk/assets/images/bubble_B09.png";
    img19.src = "http://www.laughingbag.co.uk/assets/images/bubble_B10.png";
    img20.src = "http://www.laughingbag.co.uk/assets/images/bubble_C01.png";
    img21.src = "http://www.laughingbag.co.uk/assets/images/bubble_C02.png";
    img22.src = "http://www.laughingbag.co.uk/assets/images/bubble_C03.png";
    img23.src = "http://www.laughingbag.co.uk/assets/images/bubble_C04.png";
    img24.src = "http://www.laughingbag.co.uk/assets/images/bubble_C05.png";
    img25.src = "http://www.laughingbag.co.uk/assets/images/bubble_C06.png";
    img26.src = "http://www.laughingbag.co.uk/assets/images/bubble_C07.png";
    img27.src = "http://www.laughingbag.co.uk/assets/images/bubble_C08.png";
    img28.src = "http://www.laughingbag.co.uk/assets/images/bubble_D01.png";
    img29.src = "http://www.laughingbag.co.uk/assets/images/bubble_D02.png";
    img30.src = "http://www.laughingbag.co.uk/assets/images/bubble_D03.png";
    img31.src = "http://www.laughingbag.co.uk/assets/images/bubble_D04.png";
    img32.src = "http://www.laughingbag.co.uk/assets/images/bubble_D05.png";
  }
}
function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      if (oldonload) {
        oldonload();
      }
      func();
    }
  }
}
addLoadEvent(preloader);
