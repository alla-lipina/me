$(document).ready(function(){

	var article = $('.b-article');
	var articleLink = $('.b-menu-horiz__item-link');

	$('.b-article, .b-article__title').hide();

	articleLink.click(function(){

		var $this = $(this); 

		if (!$($this.attr('href')).is(':visible')){
			basicMode();
			$($this.attr('href')).fadeIn(1000);
			$this.addClass('b-menu-horiz__item-link_selected');
			return false;

			} else {
				basicMode();
			}
		});

	$('body').dblclick(function(){
		basicMode();
	});

	function basicMode(){
		article.hide();
		articleLink.removeClass('b-menu-horiz__item-link_selected');
	}
});