$(document).ready( function () {
	$('.ticket_intro').on('click', function (e) {
		e.preventDefault();
		$('.ticket_state_wrap').css({"display":"block"});
	});
	$('.ticket_state_wrap').on('click',function() {
		$(this).css({"display":"none"});
	})
} )