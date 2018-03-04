 $('.timeline-items').slick({
     slidesToShow: 5,
     grabbing: false,
     slidesToScroll: 1,
     arrows: false,
     responsive: [{
             breakpoint: 1440,
             settings: {
                 slidesToShow: 4,
                 slidesToScroll: 1,
             }
         },
         {
             breakpoint: 600,
             settings: {
                 slidesToShow: 3,
                 slidesToScroll: 1,
             }
         },
         {
             breakpoint: 426,
             settings: {
                 slidesToShow: 2,
                 slidesToScroll: 1,
             }
         }
     ]
 });

 var timelineItems = [$('.sc'), $('.ejf'), $('.hack'), $('.ebec'), $('.bsc'), $('.btw')];
 var projects = [$('.sc-p'), $('.ejf-p'), $('.hack-p'), $('.ebec-p'), $('.bsc-p'), $('.btw-p')];
 var cur, nev;
 cur = nev = 2;

 //timelineItems[1].toggleClass("active");

 for (let i = 0; i < projects.length; i++) {
     projects[i].hide();     
 }

 projects[cur].show();

 function left(){
     if(!nev)
        nev = 5;
     else
        nev--;    
 }

  function right() {
      if (nev == 5)
          nev = 0;
      else
          nev++;
  }

  function change(){
      timelineItems[cur].toggleClass("active");
      projects[cur].hide();
      timelineItems[nev].toggleClass("active");
      projects[nev].show();
      cur = nev;
  }

 $('.prev').click(function () {
     $('.timeline-items').slick('slickPrev');
     left();
     change();
     //alert(nev);
 })

 $('.next').click(function () {
     $('.timeline-items').slick('slickNext');
     right();
     change();
     //alert(nev);
 })



 //partners logo animation

$(".tickest-logo").click( function () {
    $(".tickest-logo").addClass("logo-active");
    $(".global-logo").removeClass("logo-active");
    $(".zoom-logo").removeClass("logo-active");
    $(".dataart-logo").removeClass("logo-active");
});

$(".global-logo").click(function () {
    $(".tickest-logo").removeClass("logo-active");
    $(".global-logo").addClass("logo-active");
    $(".zoom-logo").removeClass("logo-active");
    $(".dataart-logo").removeClass("logo-active");
});

$(".zoom-logo").click(function () {
    $(".tickest-logo").removeClass("logo-active");
    $(".global-logo").removeClass("logo-active");
    $(".zoom-logo").addClass("logo-active");
    $(".dataart-logo").removeClass("logo-active");
});

$(".dataart-logo").click(function () {
    $(".tickest-logo").removeClass("logo-active");
    $(".global-logo").removeClass("logo-active");
    $(".zoom-logo").removeClass("logo-active");
    $(".dataart-logo").addClass("logo-active");
});

//partners vacansies slider

$('.cpy-vacancies').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
})

//cpy info fading
$(".globallogic").show();
$(".tickets").hide();
$(".dataart").hide();
$(".zoomsupport").hide();

$('.global-logo').click(function () {
    $(".globallogic").show();
    $(".tickets").hide();
    $(".dataart").hide();
    $(".zoomsupport").hide();
});

$('.tickest-logo').click(function () {
    $(".globallogic").hide();
    $(".tickets").show();
    $(".dataart").hide();
    $(".zoomsupport").hide();
});

$('.dataart-logo').click(function () {
    $(".globallogic").hide();
    $(".tickets").hide();
    $(".dataart").show();
    $(".zoomsupport").hide();
});

$('.zoom-logo').click(function () {
    $(".globallogic").hide();
    $(".tickets").hide();
    $(".dataart").hide();
    $(".zoomsupport").show();
});


 
