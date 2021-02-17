$(window).on('scroll', function(){
    if($(window).scrollTop()){
    $('header').addClass('bgColor')
    }
    else{
    $('header').removeClass('bgColor')
    }
    })
    


// $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:true,
//     autoplay:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:3
//         },
//         1000:{
//             items:4
//         }
//     }
// })


const slides = document.querySelector('.slider').children;
const slides1 = document.querySelector('.slider1').children;
const slides2 = document.querySelector('.slider2').children;
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let index = 0;
let index1 = 1;
let index2 = 2;

    prev.addEventListener("click",function(){
      prevSlide();
      resetTimer();
    })
    next.addEventListener("click",function(){
      nextSlide();
      resetTimer();
    })

    function prevSlide(){
        if (index == 0){
            index = slides.length - 1;
        }
        else{
          index--;
        }
        if(index1==0){
            index1 = slides1.length - 1
          }
          else{
            index1--;
          }
          if(index2==0){
            index2 = slides2.length - 1
         }
         else{
           index2--;
         }
          changeSlide();
          changeSlide1();
          changeSlide2(); 
       }

       function nextSlide(){
         if(index==slides.length - 1){
           index=0
         }
         else{
           index++;
         }
         if(index1==slides1.length - 1){
           index1=0
         }
         else{
           index1++;
         }
         if(index2==slides2.length - 1){
          index2=0
        }
        else{
          index2++;
        }
         changeSlide();
         changeSlide1();
         changeSlide2();
       }

       function changeSlide(){
           for(let i=0; i < slides.length; i++){
               slides[i].classList.remove("active");
           }
            slides[index].classList.add("active");
       }
       function changeSlide1(){
        for(let i=0; i < slides1.length; i++){
            slides1[i].classList.remove("active1");
        }
         slides1[index1].classList.add("active1");
    }
    function changeSlide2(){
      for(let i=0; i < slides2.length; i++){
          slides2[i].classList.remove("active2");
      }
       slides2[index2].classList.add("active2");
  }


  
  function resetTimer(){
    clearInterval(timer);
    timer = setInterval(autoPlay, 4000);
  }

function autoPlay(){
nextSlide();
}

let timer = setInterval(autoPlay, 4000);
