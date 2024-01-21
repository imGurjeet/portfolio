$(document).ready
(
    function()
    {
        $(window).resize(function() {
            var mediaQuery = window.matchMedia('(max-width: 770px)');
            if (mediaQuery.matches) {
              $('.navlist').hide();
            } else {
              $('.navlist').show();
            }
          });
        $(".menu").click(
            function()
            {
                $(".navlist").toggle();
            }            
        )
    }
    
)