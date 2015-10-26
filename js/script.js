$(function(){
	$(document).ready(function(){
		var w = $('.items .item').width();
		if ($(window).width() > 800){
			$('.items .border > div').height(w - 10);
		}
		if ($(window).width() > 1000){
			$('.items .item .info').height(w - 20);
		}
	});

	$("#carousel").waterwheelCarousel();

	$('.menu ul li a, .menu-block ul li a, header nav ul li.active a').click(function(e){
		e.preventDefault();
		var attr = $(this).attr('href');
		var destination = $(attr).offset().top;
		$('html, body').animate({scrollTop:destination},800);
	});

	$('.container-reviews').slick();

	$('.popup').click(function(event) {
        e = event || window.event
        if (e.target == this) {
            $(this).hide();
        }
    });

    /* form */

    $('#form').submit(function(e){
        e.preventDefault();
        $.post('/mail.php', $("form").serialize(), function(){
            $('.popup.success').show();
        });
        $('.popup.success').show();
        //form.find('input[type="email"]').val('').change();
    });

});


(function($){
    $(window).load(function(){
        $(".items .item .info").mCustomScrollbar({
        	axis:"y",
        	scrollbarPosition: 'outside'
        });
    });
})(jQuery);
