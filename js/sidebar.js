function sidebarUpdate() {
	var padding = 70;
    var sidebarWidth  = $("#sidebar").parent().width();
    var sidebarHeight = $("#sidebar").height();
    var windowHeight  = $(window).height() - padding;
    var upper  = $("#sidebar").parent().position().top;
    var lower  = upper + sidebarHeight;
    var newpos = Math.min(0,windowHeight - sidebarHeight);
    
    if ($(this).scrollTop() > upper && $(this).scrollTop()+windowHeight > lower) {
        $("#sidebar").addClass("sidebar-fixed");
        $("#sidebar").width(sidebarWidth);
        $("#sidebar").css('top', newpos)
    } else {
        $("#sidebar").removeClass("sidebar-fixed");
        $("#sidebar").width("");
    }
}
$(window).scroll(sidebarUpdate);
$(window).resize(sidebarUpdate);
