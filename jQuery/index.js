/* $(document).ready(function () {
  //check whether if our jQuery lib is ready.
  $('h1').css('color', 'red');
}); */

/* $(css selector) works very similarly to querySelector(css selector)
there's no difference between selecting one or selecting many */

//get current value of CSS
console.log($('h1').css('color'));
console.log($('h1').css('font-size'));
/* manipulate the CSS style of a selected element:
$('h1').css('color', 'green'); */

//to separate our concerns (html to structure, css to style, js to behavior)
//$('h1').addClass('big-title');
$('h1').addClass('big-title margin-50');

//check whether the element has a class
console.log($('h1').hasClass('margin-50'));

//manipulate text
/* $('h1').text('good bye');
//$('button').text('<em>Just text</em>');
$('button').html('<em>Hey</em>'); */

//manipulate Attributes
console.log($('img').attr('src'));
$('a').attr('href', 'https://www.yahoo.com');

// add EventListener using jQuery
$('h1').click(function () {
  $('h1').css('color', 'purple');
});
$('button').click(() => $('h1').css('color', 'pink'));

//$('input').keypress((event) => console.log(event.key));
/* $('input').keypress((event) => {
  $('h1').text(event.key);
}); */
$(document).keypress((event) => {
  $('h1').text(event.key);
});

$('h1').on('mouseover', () => {
  $('h1').css('color', 'red');
});

//.before() after() append() prepend()

//animate() stick to things that have a numeric value

//THE DIFFERENT BW USING JAVASCRIPT AND jQuery

/*for (let i = 0; i < 5; i++){
  document.querySelectorAll("button")[i].addEventListener("click", function(){
    document.querySelector("h1").style.color = "purple";
  });
}*/

/*$("button").click(function(){
  $("h1").css("color", "purple");
});*/
