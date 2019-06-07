jQuery(document).ready(function(){
	jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},6000);
	});
});

$(document).ready(function () {
	$(".navbar-nav li a").click(function(event) {
	  $(".navbar-collapse").collapse('hide');
	});
});