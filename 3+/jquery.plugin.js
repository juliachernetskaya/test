;(function($){
  jQuery.fn.plugin = function(options){
    var options = $.extend({ 
      'delay': '1000' 
    }, options );
    var timeOut;

    $(this).on('mouseenter', function() { 
      var $hintContent = $(this); 
      console.log($(this))
      timeOut = setTimeout(function(){
        if (!$hintContent.is(":hover")) { 
          return false; 
        }
        var hintText = $hintContent.data("hint"),
            tagContent =  "<span class=hint style='display: none'>"+ hintText +"</span>";
        if (($hintContent.hasClass("hint-left")) && ($hintContent.data("hint"))){ 
          $(".hint-left").append(tagContent); 
            $('.hint').show()
          $(".hint").each(function(){ 
            leftHint($hintContent);
          });
        }
        if (($hintContent.hasClass("hint-top")) && ($hintContent.data("hint"))){ 
          $(".hint-top").append(tagContent); 
            $('.hint').show()
          $(".hint").each(function(){ 
            topHint($hintContent);
          });
        }
        if (($hintContent.hasClass("hint-bottom")) && ($hintContent.data("hint"))){ 
          $(".hint-bottom").append(tagContent); 
            $('.hint').show()
          $(".hint").each(function(){ 
            bottomHint($hintContent);
          });
        }
        if (($hintContent.hasClass("hint-right")) && ($hintContent.data("hint"))){ 
          $(".hint-right").append(tagContent); 
            $('.hint').show()
          $(".hint").each(function(){ 
            rightHint($hintContent);
          });
        }
      }, options.delay);

    }).on('mouseleave', function() { 
      clearTimeout(timeOut);
      $(".hint").remove(); 
    });
  };

  function leftHint(el) { 
    var hint = $(".hint"),
        widthHint = hint.outerWidth(), 
        heightHint = hint.outerHeight(),
        left = el.offset().left,
        top = el.offset().top,
        height = el.outerHeight(), 
        width = el.outerWidth(); 
    hint.css({"top": height/2 ,"right": width + 5, "margin-top": -heightHint/2}); 
  }
  function topHint(el) { 
    var hint = $(".hint"),
        widthHint = hint.outerWidth(), 
        heightHint = hint.outerHeight(), 
        left = el.offset().left, 
        top = el.offset().top,
        height = el.outerHeight(), 
        width = el.outerWidth(); 
    hint.css({"top": -height , "right": width/2, "margin-right": -widthHint/2}); 
  }
  function bottomHint(el) { 
    var hint = $(".hint"),
        widthHint = hint.outerWidth(), 
        heightHint = hint.outerHeight(), 
        left = el.offset().left, 
        top = el.offset().top,
        height = el.outerHeight(), 
        width = el.outerWidth(); 
    hint.css({"top": height + 5, "right": width/2, "margin-right": -widthHint/2}); 
  }
  function rightHint(el) { 
    var hint = $(".hint"),
        widthHint = hint.outerWidth(), 
        heightHint = hint.outerHeight(), 
        left = el.offset().left, 
        top = el.offset().top,
        height = el.outerHeight(), 
        width = el.outerWidth(); 
    hint.css({"top": height/2 ,"left": width + 5, "margin-top": -heightHint/2}); 
  }
})(jQuery); 
