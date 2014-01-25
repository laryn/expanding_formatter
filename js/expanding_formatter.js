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
        var $trigger = $formatter.find('a.trigger');
        var data = $formatter.data();
        $trigger.bind('click', function () {
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
          function collapse () {
            $formatter
              .removeClass('expanded')
              .addClass('collapsed')
              .height(collapsedHeight);
            $trigger.text(data.expandLabel);
          }
          function expand () {
            $formatter
              .removeClass('collapsed')
              .addClass('expanded')
              .height(expandedHeight);
            $trigger.text(data.collapseLabel);
          }
          if ($formatter.hasClass('expanded')) {
            if (data.effect === 'fade') {
              setTimeout(collapse, 500);
            }
            else {
              collapse();
            }
          }
          else {
            expand();
          }
        });
      });
    }
  };

})(jQuery);
