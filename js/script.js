window.onload = function () {
    $(".box").each(function () {
        
        $(this).on("mousewheel DOMMouseScroll", function (e) {
            e.preventDefault();
            var delta = 0;
            if (!event) event = window.event;
            if (event.wheelDelta) {
                delta = event.wheelDelta / 120;
                if (window.opera) delta = -delta;
            } else if (event.detail) delta = -event.detail / 3;
            var moveTop = null;

            if (delta < 0) {
                if ($(this).next() != undefined) {
                    moveTop = $(this).next().offset().top;
                }

            } else {
                if ($(this).prev() != undefined) {
                    moveTop = $(this).prev().offset().top;
                }
            }

            $("html,body").stop().animate({
                scrollTop: moveTop + 'px'
            }, {
                duration: 800,
                complete: function () {}
            });
        });
    });
    $(function(){
        $(".scroll").click(function(e){
            var destination = $(this).attr('href');
            e.preventDefault();
        $("html, body").animate({
            scrollTop:$(destination).offset().top}, 750);
        });
        });
    
        $('ul li a').on('click',function(){
            $(this).addClass('active');
            $(this).parent().siblings().find('a').removeClass('active');
        });
}

