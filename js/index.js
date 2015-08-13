$(document).ready(function() {

	var nav = $('nav');

	var target = nav.offset().top,
    timeout = null;

	// fancy nav effect
	$(window).scroll(function () {
		if (!timeout) {
		    timeout = setTimeout(function () {
		        clearTimeout(timeout);
		        timeout = null;
		        if ($(window).scrollTop() >= target) {
		            nav.addClass('fixed');
		        } else {
					nav.removeClass('fixed');
				}
		    }, 0);
		}
	});

	//circle animation/fx around image
	var img = $('.circle-img');
	var circle = $('<div class="anim-circle"></div>');
		circle.css('height', img.css('height')); //set circle's height to img's height
		circle.css('width', img.css('width')); //set cricle's width to img's width
		circle.css('background-color', $('body').css('background-color')); //set circle's color to the body's color
		circle.css('opacity', '0.6'); //arbitrary value
		circle.css('border-radius', '100%');
		circle.css('z-index', '1');

	for(var i = 0; i < 4; i++) {
		$('.img-container').append(circle.clone().addClass('circle-' + i));
	}

	var circle0 = $('.circle-0').css('left', '-10px').css('top', '-10px');
	var circle1 = $('.circle-1').css('left', '-10px').css('top', '10px');
	var circle2 = $('.circle-2').css('left', '0px').css('top', '-10px');
	var circle3 = $('.circle-3').css('left', '-10px').css('top', '0px');

	//ordered by delays. the circle that starts moving first is the first line!
	TweenMax.from(circle2, 0.5, { top: '10px', ease: Expo.easeInOut, yoyo: true, repeat: -1, delay: 0.125 });
	TweenMax.from(circle0, 0.5, { left: '10px', top: '10px', ease: Expo.easeInOut, yoyo: true, repeat: -1, delay: 0.25 });
	TweenMax.from(circle3, 0.5, { left: '10px', ease: Expo.easeInOut, yoyo: true, repeat: -1, delay: 0.375 });
	TweenMax.from(circle1, 0.5, { left: '10px', top: '-10px', ease: Expo.easeInOut, yoyo: true, repeat: -1, delay: 0.5 });

});
