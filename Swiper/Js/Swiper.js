 let sliderwidth = 0;
 let delay = 1000;
 let currentIndex = 1;
 let Cycle = true
 let pagedelay = '300ms'
 let length = 0;
 $(function () {
   sliderwidth = $('.slider').width()
   //  Cycle = false
   length = $('.slider').length
   Cyclefnc(Cycle)
   for (let i = 0; i < length; i++) {
     //  $('.indicator').appendTo('<div></div>')
     $('<div class="slideritem"></div>').appendTo('.indicator');
   }

   $($('.slideritem')[0]).addClass('active')
 });

 function Cyclefnc() {
   //  while (Cycle) {
   let timer = 0
   if (Cycle) {
     timer = setTimeout(function () {
       $('.swiperchild').css({
         'transform': `translateX(${(-sliderwidth*(currentIndex))}px)`,
         //  'transition': 'transfrom 300ms ease 0s'
         'transition': currentIndex == 0 ? '0s' : pagedelay
       })
       $($('.slideritem')[currentIndex]).toggleClass('active')
       $('.slideritem').filter((index, item) => {
         // return  !$(item).hasClass('active')
         return index != currentIndex
       }).removeClass('active')
       //  console.log(arr);
       currentIndex += 1;
       if (currentIndex == length) {
         currentIndex = 0;
       }

       clearInterval(timer)
       Cyclefnc()
       //  Cycle?Cyclefnc():0
     }, delay)
     //  }
   } else
     clearInterval(timer || 0)
 }