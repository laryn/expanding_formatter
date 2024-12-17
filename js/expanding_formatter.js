(function ($) {

  /**
   * Logic for expanding/collapsing fields that configured with a toggle.
   */
  Backdrop.behaviors.expandingFormatter = {
    attach: function (context) {
      $('.expanding-formatter:has("> .expanding-formatter-summary")').once('expanding-formatter', function () {
        var $formatter = $(this).removeClass('expanded collapsed');
        var $content = $formatter.find('.expanding-formatter-content');
        var $trigger = $formatter.find('.expanding-formatter-trigger a');
        var data = $formatter.data();
        if (!data.effect) {
          data.effect = 'normal';
        }
        $content.hide();
        $formatter.addClass('collapsed');
        data = $.extend({}, data, {
          $formatter: $formatter,
          $content: $content,
          $trigger: $trigger
        });
        $trigger.on('click', function (event) {
          event.preventDefault();
          data.expanded = $formatter.hasClass('expanded');
          // CSS effects.
          Backdrop.behaviors.expandingFormatter.expandingFormatterEffects(data);
        });
      });
    },

    expandingFormatterEffects: function (data) {
      const effect = data.effect;
      const action = data.expanded ? 'collapse' : 'expand';
      switch (effect) {
        case 'fade':
          data.$formatter.addClass('fading');
          setTimeout(function () {
            data.$formatter.removeClass('fading');
          }, 250);
          break;
        case 'slide':
          // Add/remove animation classes to assist with styles.
          data.$formatter.addClass('sliding');
          setTimeout(function () {
            data.$formatter.removeClass('sliding');
          }, 250);
          break;
        default:
          if (data.expanded) {
            data.$formatter
              .removeClass('expanded')
              .addClass('collapsed');
            //data.$content.hide();
          }
          else {
            data.$formatter
              .removeClass('collapsed')
              .addClass('expanded');
            //data.$content.show();
          }
          break;
      }
      switch (action) {
        case 'collapse':
          data.$formatter
            .removeClass('expanded')
            .addClass('collapsed')
            .trigger('collapsed', [data]);
          data.$trigger.text(data.expandedLabel);
          data.$content.hide();
          break;
        case 'expand':
          data.$formatter
            .removeClass('collapsed')
            .addClass('expanded');
          data.$content.show();
          if (data.collapsedLabel) {
            data.$trigger.text(data.collapsedLabel);
          }
          else {
            data.$trigger.hide();
          }
          break;
      }
    },

  };

})(jQuery);
