 let sliderwidth = 0;
 let delay = 1000;
 let currentIndex = 1;
 let Cycle = false
 $(function () {
   sliderwidth = $('.slider').width()
   Cycle = true
   Cyclefnc(Cycle)
 });

 function Cyclefnc(Cycle) {
   //  while (Cycle) {
   console.log('11');
   let timer = setTimeout(function () {
     $('.swiperchild').css({
       'transform': `translateX(${(-sliderwidth*currentIndex)}px)`,
       'transition': 'transfrom 300ms ease 0s'
     })
     currentIndex += 1;
     if (currentIndex == $('.slider').length) {
       currentIndex = 0;
     }

     clearInterval(timer)
     Cyclefnc(Cycle)
   }, delay)
   //  }

 }