$('#go').on('click', f_startAnimation);
 
function f_startAnimation() {
  $('.block').animate({
    width: '100px',
    height: '100px',
    background: 'red'
  }, 3000);
}