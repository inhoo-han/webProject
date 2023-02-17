//230217 첫 번째 플러그인
//$.fn.메소드이름 = function(매개변수) {};
$.fn.색반전 = function(options) {
    $(this).css('color', 'white');
    $(this).css('background', 'black');
}