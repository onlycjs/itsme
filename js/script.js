window.addEventListener("load", function () {
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
    
});
function main() {
    $("html,body").stop().animate({
            scrollTop: '0px'
        }, {
                duration: 800,
                complete: function () { }
            });
}
function infographic() {
    $("html,body").stop().animate({
            scrollTop: '920px'
        }, {
                duration: 800,
                complete: function () { }
            });
}
function awards() {
    $("html,body").stop().animate({
            scrollTop: '1840px'
        }, {
                duration: 800,
                complete: function () { }
            });
}
function project() {
    $("html,body").stop().animate({
            scrollTop: '2760px'
        }, {
                duration: 800,
                complete: function () { }
            });
}

