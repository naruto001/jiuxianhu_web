$(function () {
	$('#tabs a').click(function (e) {
		e.preventDefault();
		$('#tabs li').removeClass('current');
		$(this).parent().addClass('current');
		$('#tab_ctn div').removeClass('show');
		$('#'+ $(this).attr('title')).addClass('show');
	} )
})