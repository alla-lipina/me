$(document).ready(function(){

	$('.b-article, .b-article__title').hide();

	$('.b-menu-horiz__item-link').click(function(){

		if (!$($(this).attr('href')).is(':visible')){

			basicMode();

			$($(this).attr('href')).fadeIn(1000);
			$(this).addClass('b-menu-horiz__item-link_selected');

			return false;

			} else {
				basicMode();
			}
		});

	$('body').dblclick(function(){
		basicMode();
	});

	function basicMode(){
		$('.b-article').hide();
		$('.b-menu-horiz__item-link').removeClass('b-menu-horiz__item-link_selected');
	}
});