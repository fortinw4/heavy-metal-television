
$(function(){

	$('.hero-full').hide();
	$('.fa-times').hide();

	$('.fa-expand').click(function(){
		$('.hero').hide();
		$('.hero-full').show();
		$('.fa-expand').hide();
		$('.fa-facebook').hide();
		$('.fa-twitter').hide();
		$('.fa-youtube-square').hide();
		$('.fa-envelope').hide();
		$('.title').hide();
		$('.fa-times').show();
	});

	$('.fa-times').click(function(){
		location.reload();
	})

});

