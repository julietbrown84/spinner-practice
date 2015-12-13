var circleRotationOffsetSpeed = randPosInt(50);
var containerRotationSpeed = 30;

$(window).load(function () {

  $('#insanity').trigger('play');

  for (var i = 1; i < 100; i++) {
    var color = ( i % 2 === 0 ? 'red' : 'black');
    var $circle = $("<div class='centered circle'></div>").css({
      'background' : color,
      'height': 5 * i,
      'width': 5 * i,
      'z-index' : -1 * i
    });
    $('#div-container').append($circle);
  }

  $.each($('.circle'), function (index, value) {
    var degrees = 0;
    setInterval(function () {
      $(value).css({'webkit-transform' : 'rotate(-' + degrees + 'deg)'})
      degrees++;
    }, index + circleRotationOffsetSpeed)
  });

  var degrees = 0;
  setInterval(function () {
    $('#div-container').css({'webkit-transform' : 'rotate(-' + 5 * degrees + 'deg)'});
    degrees++;
  }, containerRotationSpeed)

});