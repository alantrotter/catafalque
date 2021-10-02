var originalwidth;

$(document).ready(function() {
  storyisresizable();
});

function storyisresizable() {

    originalwidth = $(".story-container").width();
  //the bit of code that means you can resize the box the story is in - set here rather than just as css to make a minimum size possible
    $( ".story-container" ).resizable({

      handles: {
          se: '.bottom-right'
      },
      minHeight: 22,
      maxHeight: 716,
      minWidth: 162,
      maxWidth: 700.
    });

    $( ".story-container" ).on( "resize", function() {
      $('.help').fadeOut(400)
      var storywidth = $(".story-container").width();
      var storyheight = $(".story-container").height();
      var lines = Math.floor((storyheight / 23.9) + 0.185);
      var widthchange = storywidth - originalwidth;
      $(".corner-text-hint").css("left", widthchange + 240);
      $(".area-display").html('Width ' + storywidth + ' / Lines ' + lines + ' / Height ' + storyheight);
      $("span[data-w-reveal]").each(function() {
        if ( storywidth >= $(this).data('w-reveal') ) {
          $(this).css('display','inline');
        } else {
          $(this).hide();
        }
      });
      $("p").each(function() {
        if ( lines >= $(this).data('l-reveal') ) {
          $(this).css('display','block');
        } else {
          $(this).hide();
        }
      });
      $("span[data-l-hide]").each(function() {
        if ( lines < $(this).data('l-hide') ) {
          $(this).css('display','inline');
        } else {
          $(this).hide();
        }
      });
      $("span[data-l-reveal]").each(function() {
        if ( lines >= $(this).data('l-reveal') ) {
          $(this).css('display','inline');
        } else {
          $(this).hide();
        }
      });
      $("span[data-w-hide]").each(function() {
        if ( storywidth < $(this).data('w-hide') ) {
          $(this).css('display','inline');
        } else {
          $(this).hide();
        }
      });
    } );

}
