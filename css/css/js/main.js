
$('.owl-carousel').owlCarousel({
    loop:true,//kuti sequence yecarousel irambe ichinkofamba
    margin:10,//spacing yemaitems ako ecarousel..uy can change the margin if yu want
    nav:true,//this one handisat ndakuziva
    autoplay:true,//this one ndeyekuti ifambe yega
    responsive:{//this one ikutaura yega
        0:{
            items:1//this means appear 1 item on a small screen
        },
        600:{
            items:3// this one means appear 3 items on a medium screen
        },
        1000:{
            items:4// this one means you want 4 items to appear on a large screen...so yu vcan change those number
        }
    }
})