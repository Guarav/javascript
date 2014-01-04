function GoToTop(){
                var scrollThreshold = 20,
                    topDom = $('.fixed-top-icon'),
                    topRequest = 0;      // to avoid multiple request at the same time

                function init(){
                    bindEvents()
                }
                function bindEvents(){
                    $(document).on('scroll', function(){
                        if( $(document).scrollTop() > scrollThreshold )
                        {
                            topDom.fadeIn();
                        }
                        else{
                            topDom.fadeOut();
                        }
                    });

                    topDom.on('click', function(){
                        if(!topRequest)
                        {
                            topRequest = 1;
                            $('body, html').animate({scrollTop:0}, 500, function(){
                                topRequest = 0;
                            });
                        }

                    });

                }
                init();
            }


$(document).ready(function(){
	GoToTop();
});
