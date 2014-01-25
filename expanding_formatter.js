(function ($) {

  /**
   * Auto-hide summary textarea if empty and show hide and unhide links.
   */
  Drupal.behaviors.expandingFormatter = {
    attach: function (context, settings) {
      var expandingFormatters = $('.expanding-formatter', context);
      expandingFormatters.each(function () {
        var formatter = $(this);
        var trigger = $('a.trigger', formatter);
        if (trigger.length) {
          trigger.data('expandingFormatter', formatter);
          trigger.click(function () {
            var trigger = $(this);
            var formatter = trigger.data('expandingFormatter')
            var triggerelement = $('a.trigger.expand', formatter)
            var content = $('.content', formatter);
            var ellipsis = $('.trim-ellipsis', formatter);
            var effect = 'slide';
            if (formatter.hasClass('fade')) {
              effect = 'fade';
            }
            switch (effect) {
              case 'slide':
                if (content.hasClass('show')) {
                  content.slideUp('slow', function () {
                    ellipsis.fadeIn();
                    triggerelement.fadeIn();
                    content.hide('slow').removeClass('show').css('display', 'none');
                  })
                }
                else {
                  content.slideDown('normal', function () {
                    ellipsis.fadeOut();
                    triggerelement.fadeOut();
                    content.show('slow').addClass('show').css('display', 'inline');
                  })
                }
                break;
              case 'fade':
                if (content.hasClass('show')) {
                  content.fadeOut('normal', function () {
                    ellipsis.fadeIn();
                    triggerelement.fadeIn();
                    content.hide('slow').removeClass('show').css('display', 'none');
                  })
                }
                else {
                  content.fadeIn('normal', function () {
                    ellipsis.fadeOut();
                    triggerelement.fadeOut();
                    content.show('slow').addClass('show').css('display', 'inline');
                  })
                }
                break;
            }
          });
        }
      });
    }
  };

})(jQuery);
