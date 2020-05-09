 let sliderwidth = 0;
 let delay = 1000;
 let currentIndex = 1;
 let Cycle = true
 let pagedelay = '300ms'
 let length = 0;
 let clickIndex = 0;
 let clicktime = 1000
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


   //  $('slideritem').map((item,index=>{
   //    $(item).click(e=>{
   //       console.log();
   //    })
   //指示点被点击
   $('.indicator>div').click(function () {
     let index = $(this).index()
     currentIndex = index;
      Cycle = false
      setTimeout(function(){
        Cycle = true
        Cyclefnc()
      },clicktime)
   })
 });

 function Cyclefnc() {
   //  while (Cycle) {
   let timer = 0
   if (Cycle) {
     timer = setTimeout(function () {
      sliper()

       clearInterval(timer)
       Cyclefnc()
       //  Cycle?Cyclefnc():0
     }, delay)
     //  }
   } else
     clearInterval(timer || 0)
 }

 function sliper(replacewidth = 0) {
   let slider = replacewidth ? replacewidth:(-sliderwidth * (currentIndex))
   $('.swiperchild').css({
     'transform': `translateX(${slider}px)`,
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
 }