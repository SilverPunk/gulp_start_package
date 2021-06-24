// let main = $(".counter_main .counter_numbers");
// console.log(main);

// function calcCount() {
//     for (var i = 0; i < $('.countings').length; i++) {
//         var end = $('.countings').eq(i).text();
//         countStart(end, i);
//     }
// }
//
// function countStart(end, i) {
//     var start = 0;
//     var interval = setInterval(function () {
//         $('.countings').eq(i).text(++start);
//         if (start == end) {
//             clearInterval(interval);
//         }
//     }, 0.5);//скорость менять вот-тута
// }
// calcCount();

// $(document).ready(function(){
//     var $element = $('.countings');
//     let counter = 0;
//     $(window).scroll(function() {
//         var scroll = $(window).scrollTop() + $(window).height();
//         //Если скролл до конца елемента
//         var offset = $element.offset().top + $element.height();
//         //Если скролл до начала елемента
//         // var offset = $element.offset().top
//
//         if (scroll > offset && counter == 0) {
//             $('#block').fadeIn(500);
//             counter = 1;
//         }
//     });
//     // $('.btn').click(function(){
//     //     $('#block').slideUp();
//     // });
//
// });