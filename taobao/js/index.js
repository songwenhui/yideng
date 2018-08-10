
var $div = $('#box div');

$div.each(function (i,v) {
  $(this).css({
    background: 'url(./img/p'+(i+1)+'.png) no-repeat',
    transform: 'rotateY('+(360/$div.length * i)+'deg) translateZ('+getZdistance()+'px)'
  })
})

function getZdistance () {
  return Math.round(129 / (2 * Math.tan(Math.PI / 20))) - 3;
}


var startX = 0;
var x = 0;
var endX = 0;

$('#box').on('touchstart', function (e) {
  e.preventDefault();
  var touch = e.targetTouches[0];
  startX = touch.pageX - x;
})

$('#box').on('touchmove', function (e) {
  e.preventDefault();
  var touch = e.targetTouches[0];
  endX = touch.pageX;
  x = endX - startX;
  $(this).css('transform', 'rotateY('+(-x)+'deg)');
})


