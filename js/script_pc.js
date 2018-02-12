smoothScroll = function(){
	$("#welcomeset a[href^=#]").click(function(){
		var Hash = $(this.hash);
		var HashOffset = $(Hash).offset().top;
		$("html,body").animate({ scrollTop: HashOffset}, 'slow','swing');
		return false;
	});
}
imgChange = function(){
	$('img').each(function () {
		$(this).attr("src", $(this).attr("src").replace('_sp', '_pc'));
	});
}
$(function(){
	imgChange();
	smoothScroll();
});

$('img').hover(function() {
	$(this).attr("src", $(this).attr("src").replace('_off', '_on'));
}, function() {
	$(this).attr("src", $(this).attr("src").replace('_on', '_off'));
});