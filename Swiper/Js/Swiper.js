 let sliderwidth = 0; //当前需轮播的宽度
 let delay = 1000; // 每次轮播之间延迟的时间
 let currentIndex = 1; // 当前所在的位置
 let Cycle = true // 是否开启轮播
 let pagedelay = '300ms' // 轮播切换的动画延迟时间
 let length = 0; // 有多少个需轮播的图片
 let clickIndex = 0; // 当前点击的元素索引
 let clicktime = 1000 // 点击之后的停顿时间
 let flag = false
 $(function () {
   sliderwidth = $('.slider').width()
   //  Cycle = false
   //  复制第一个放到最后
   $($('.slider')[0]).clone().appendTo('.swiperchild')
   length = $('.slider').length
   //  启动轮播
   Cyclefnc(Cycle)
   //  创建指示点到图片上
   // 减一是减去最后一张图片
   for (let i = 0; i < length - 1; i++) {
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
     setTimeout(function () {
       Cycle = true
       Cyclefnc()
     }, clicktime)
   })
 });

 function Cyclefnc() {
   //  while (Cycle) {
   let timer = 0

   if (Cycle) {
     let temp =  delay
     if ((currentIndex == 1) && flag){
       temp = 0;
     }
     timer = setTimeout(function () {
       sliper()
       clearInterval(timer)
       Cyclefnc()
       flag = true
       //  Cycle?Cyclefnc():0
     }, temp)
     //  }
   } else
     clearInterval(timer || 0)
 }

 function sliper(replacewidth = 0) {
   let slider = replacewidth ? replacewidth : (-sliderwidth * (currentIndex))
   $('.swiperchild').css({
     'transform': `translateX(${slider}px)`,
     //  'transition': 'transfrom 300ms ease 0s'
     'transition': currentIndex == 0 ? '0s' : pagedelay
   })
   $($('.slideritem')[currentIndex]).addClass('active')
   $('.slideritem').filter((index, item) => {
     // return  !$(item).hasClass('active')
     return index != currentIndex
   }).removeClass('active')
   //  console.log(arr);
   currentIndex += 1;
   if (currentIndex == length) {
      currentIndex = 0;
     $($('.slideritem')[currentIndex]).addClass('active')
   }
 }