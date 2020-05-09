 let sliderwidth = 0; //当前需轮播的宽度
 let delay = 1000; // 每次轮播之间延迟的时间
 let currentIndex = 1; // 当前所在的位置
 let Cycle = true // 是否开启轮播
 let pagedelay = '300ms' // 轮播切换的动画延迟时间
 let length = 0; // 有多少个需轮播的图片
 let clickIndex = 0; // 当前点击的元素索引
 let clicktime = 1000 // 点击之后的停顿时间
 let flag = false //是否不是第一次轮播 
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
   for (let i = 0; i < length - 1; i++)
     $('<div class="slideritem"></div>').appendTo('.indicator');
   $($('.slideritem')[0]).addClass('active')
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
   let timer = 0
   //判断是否是被点击了 如果是则清除上次的计时器
   if (Cycle) {
     let temp = (currentIndex == 1) && flag ? 0 : delay
     timer = setTimeout(function () {
       sliper()
       clearInterval(timer)
       Cyclefnc()
       flag = true
     }, temp)
   } else
     clearInterval(timer || 0)
 }

 function sliper() {
   let slider =  (-sliderwidth * (currentIndex))
   $('.swiperchild').css({
     'transform': `translateX(${slider}px)`,
     'transition': currentIndex == 0 ? '0s' : pagedelay
   })
   $($('.slideritem')[currentIndex]).addClass('active')
   $('.slideritem').filter(index =>index != currentIndex).removeClass('active')
   currentIndex += 1;
   if (currentIndex == length) {
     currentIndex = 0;
     $($('.slideritem')[currentIndex]).addClass('active')
   }
 }