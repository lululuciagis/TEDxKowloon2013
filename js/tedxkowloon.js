
$.extend($.easing, {
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	}
});

$(document).ready(function() {

	/* Update Section on Top-Bar */
	$(window).on('scroll', function(){
		var scrollTop = $(window).scrollTop();
		$('section').each(function(){
			if (scrollTop > $(this).offset().top-60){
				var section = $(this).attr('id');
				$("#top-navigation ul li").each(function(){
					if(section == $(this).find('a').attr('href').replace("#","") && $(this).not('.active')){
						$("#top-navigation ul li").removeClass('active');
						$(this).addClass('active');
					}
				});
			}
		});
	})
	

	/*-----------------------------------------------------------------------------------*/
	/*	Smooth Scroll - Navigation + .scroll items
	/*-----------------------------------------------------------------------------------*/
	
	$('#top-navigation li').on('click',function(event){
		var anchor = $(this).find('a');
		
		$('#top-navigation li').removeClass('active');
		$(this).addClass('active');
	
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top-50
		}, 1500,'easeInOutExpo');
		
		/* If Mobile hide menu on select */
		if($(window).width()<=767){	
			$('#top-navigation').removeClass('in').addClass("collapse");
		}
		
		event.preventDefault();
	});
	
	$('.scroll').on('click',function(event){
		var anchor = $(this);
	
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top-50
		}, 1500,'easeInOutExpo');
		
		/* If Mobile hide menu on select */
		if($(window).width()<=767){	
			$('#top-navigation').removeClass('in').addClass("collapse");
		}
		
		event.preventDefault();
	});
})