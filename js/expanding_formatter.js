/*global Drupal:true */
(function ($) {

  /**
   * Logic for expanding/collapsing fields that configured with a toggle.
   */
  Drupal.behaviors.expandingFormatter = {
    attach: function (context) {
      var $formatters = $(context).find('.expanding-formatter');
      $formatters.once('expanding-formatter', function () {
        var $formatter = $(this).removeClass('expanded collapsed');
        // Get normal expanded height.
        var expandedHeight = $formatter.outerHeight(false);
        var $content = $formatter.find('.expanding-formatter-content');
        $content.hide();
        var collapsedHeight = $formatter.outerHeight(false);
        $formatter.addClass('collapsed').height(collapsedHeight);
        $content.removeAttr('style');
        var $trigger = $formatter.find('.expanding-formatter-trigger a');
        var data = $formatter.data();
        if (!data.css3) {
          $content.hide();
        }
        $trigger.bind('click', function () {
          function css3Collapse () {
            $formatter
              .removeClass('expanded')
              .addClass('collapsed')
              .height(collapsedHeight)
              .trigger('collapsed', [data]);
            $trigger.text(data.expandLabel);
          }
          // CSS3.
          if (data.css3) {
            if (data.effect === 'slide') {
              $formatter.addClass('sliding');
              setTimeout(function () {
                $formatter.removeClass('sliding');
              }, 500);
            }
            else if (data.effect === 'fade') {
              $formatter.addClass('fading');
              setTimeout(function () {
                $formatter.removeClass('fading');
              }, 500);
            }
            if ($formatter.hasClass('expanded')) {
              if (data.effect === 'fade') {
                setTimeout(css3Collapse, 500);
              }
              else {
                css3Collapse();
              }
            }
            else {
              $formatter
                .removeClass('collapsed')
                .addClass('expanded')
                .height(expandedHeight)
                .trigger('expanded', [data]);
              $trigger.text(data.collapseLabel);
            }
          }
          // jQuery animation.
          else {
            if (data.effect === 'slide') {
              if ($formatter.hasClass('expanded')) {
                $formatter
                  .removeClass('expanded')
                  .addClass('collapsed');
                $trigger.text(data.expandLabel);
                $formatter.animate({
                  height: collapsedHeight
                }, data.jsDuration, function () {
                  $content.hide();
                  $formatter
                    .trigger('collapsed', [data])
                    .find('.expanding-formatter-ellipsis').show();
                });
              }
              else {
                $formatter
                  .removeClass('collapsed')
                  .addClass('expanded')
                  .find('.expanding-formatter-ellipsis').hide();
                $content.show();
                $trigger.text(data.collapseLabel);
                $formatter.animate({
                  height: expandedHeight
                }, data.jsDuration, function () {
                  $formatter.trigger('expanded', [data]);
                });
              }
            }
            else if (data.effect === 'fade') {
              if ($formatter.hasClass('expanded')) {
                $trigger.fadeOut(data.jsDuration);
                $content
                  .css({
                    display: 'inline',
                    opacity: 1
                  })
                  .animate({
                    opacity: 0
                  }, data.jsDuration, function () {
                    $content.css({
                      display: data.inline ? 'inline-block' : 'block',
                      height: 0,
                      overflow: 'hidden',
                      width: 0
                    });
                    $formatter
                      .removeClass('expanded')
                      .addClass('collapsed')
                      .height(collapsedHeight)
                      .trigger('collapsed', [data])
                      .find('.expanding-formatter-ellipsis').fadeIn(data.jsDuration);
                    $trigger.text(data.expandLabel).fadeIn(data.jsDuration);
                  });
              }
              else {
                $formatter
                  .removeClass('collapsed')
                  .addClass('expanded')
                  .height(expandedHeight)
                  .find('.expanding-formatter-ellipsis').hide();
                $trigger
                  .hide()
                  .text(data.collapseLabel)
                  .fadeIn(data.jsDuration);
                $content
                  .removeAttr('style')
                  .css({
                    display: data.inline ? 'inline' : 'block',
                    opacity: 0
                  })
                  .animate({
                    opacity: 1
                  }, data.jsDuration, function () {
                    $formatter.trigger('expanded', [data]);
                  });
              }
            }
          }
        });
      });
    }
  };

})(jQuery);
