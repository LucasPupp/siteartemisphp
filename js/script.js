$(document).ready(function(){

  $(window).scroll(function(){
    var altura = $(this).scrollTop();




		var scrollTop = $('html, body').scrollTop();
		// var beneficios = $('#beneficios').scroll();
		if(scrollTop >= 80){
			$('header').addClass('fixed');
		}else{
			$('header').removeClass('fixed');
		}

  });
  
  $('header a').click(function(e) {
		e.preventDefault();
		let id = $(this).attr('href')
		let target = id.split('#')[1]
    let object = $('#'+target);
    var largura = $(document).width();
    console.log(largura);
    if(largura < 769){
      var incremento = 200
    }else{
      var incremento = 250
    }

		if (object.offset() !== undefined) {
			let targetOffset = $('#'+target).offset().top;
		$('html, body').animate({
			scrollTop: targetOffset - incremento
		}, 800)
		}
		else {
			window.open(id,"_self")
		}

	});

  $('.cards').slick({
    arrows: true,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });



  $('.casos-cadastrados').slick({
    arrows: true,
    dots:true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1270,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('.menu-bars').on('click', function(){
    let menu = $('.mobile');

    menu.addClass('visible');
  });

  $('.fechar').on('click', function(){
    let menu = $('.mobile');
    menu.removeClass('visible');
  })

  
})

