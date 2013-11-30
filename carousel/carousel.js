function carousel (){
                var component = $('.carousel-viewport'),
                    elements = component.children('a'),
                    size = elements.size(),

                    leftI = $('.left-icon'),
                    rightI = $('.right-icon'),
                    autoRotateInterval = 5000,
                    currentPos = 1;

                function startCarousel(){
                    // lets start carousel by binding events and loading auto carousel
                    bindEvents();

                    autoCarousel();

                }

                function autoCarousel()
                {
                    setInterval(function(  ){
                        rightI.trigger('click');
                    }, autoRotateInterval );
                }

                function bindEvents(){
                    leftI.click(function(){
                        alert('left');
                        loadPrevPage();
                    });

                    rightI.click(function(){
                        loadNextPage();
                    })
                }

                function loadPrevPage(){
                    if( currentPos  == 1)
                        currentPos = size;
                    else
                        currentPos --;
                    startNav();
                }

                function loadNextPage(){
                    if(currentPos == size)
                        currentPos = 1;
                    else
                        currentPos ++;
                    startNav();
                }

                function startNav(){
                    // hide all images
                    elements.find('div').addClass('hide');

                    // show currentImage
                    elements.find('div[id$=' + currentPos +']').removeClass('hide').addClass('show');

                }

                   startCarousel();
};


$(document).ready(function(){
    carousel();
});
