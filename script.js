$(document).ready(function(){
	$('.b-article, .b-article__title').hide();
	$('.b-menu-horiz__item-link').on('click', function() {
	
	if (!$($(this).attr('href')).is(':visible')) {
		$('.b-article').hide();
		$('.b-menu-horiz__item-link').removeClass('b-menu-horiz__item-link_selected');
		$($(this).attr('href')).fadeIn(1000);
		$(this).addClass('b-menu-horiz__item-link_selected');
		return false;
		}
		else {
			$('.b-article').hide();
			$('.b-menu-horiz__item-link').removeClass('b-menu-horiz__item-link_selected');
		}		
	});
			
	$('body').on('dblclick', function(){
		$('.b-article').hide();
		$('.b-menu-horiz__item-link').removeClass('b-menu-horiz__item-link_selected');
	});
});