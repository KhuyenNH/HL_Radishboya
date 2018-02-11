smoothScroll = function(){
	$("#welcomeset a[href^=#]").click(function(){
		var Hash = $(this.hash);
		var HashOffset = $(Hash).offset().top;
		$("html,body").animate({ scrollTop: HashOffset}, 'slow','swing');
		return false;
	});
}
$(function(){
	smoothScroll();
});
