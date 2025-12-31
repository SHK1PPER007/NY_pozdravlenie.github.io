TweenLite.set("#snow", { perspective: 600 });

var total = 50;
var snow = document.getElementById("snow");
var w = window.innerWidth;
var h = window.innerHeight;

for (var i = 0; i < total; i++) {
  var div = document.createElement("div");
  div.className = "dot";

  TweenLite.set(div, {
    x: Math.random() * w,
    y: Math.random() * -h,
    z: Math.random() * 200
  });

  snow.appendChild(div);
  animateSnow(div);
}

function animateSnow(el) {
  TweenMax.to(el, random(6, 14), {
    y: h + 100,
    repeat: -1,
    ease: Linear.easeNone,
    delay: -14
  });

  TweenMax.to(el, random(4, 8), {
    x: "+=80",
    rotationZ: random(0, 360),
    repeat: -1,
    yoyo: true,
    ease: Sine.easeInOut
  });
}

function random(min, max) {
  return min + Math.random() * (max - min);
}

var typed = new Typed('#text', {
  strings: [
    "Пусть в новом году у тебя будет больше спокойных и тёплых дней, когда всё на своих местах и никуда не нужно спешить. " +
    "Пусть рядом будут люди, с которыми можно быть собой, смеяться без причины и молчать без неловкости. " +
    "Пусть желания сбываются не шумно, а вовремя, а жизнь почаще приятно удивляет."
  ],
  startDelay: 2500,
  typeSpeed: 40,
  showCursor: false,
  onComplete: function () {
    document.getElementById('author').style.opacity = 1;
  }
});
