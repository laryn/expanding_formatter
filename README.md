# Expanding Formatter

This module provides a formatter for existing text, long text and text with 
summary widget types. This module allows you to change how the content is being 
displayed (formatted) by providing new format types:

 - Trimmed (expandable)
 - Summary or Trimmed (expandable)
 
 ![Expanding Formatter](https://github.com/backdrop-contrib/expanding_formatter/blob/1.x-1.x/images/expanding_formatter.gif "Expanding formatter demo")

## Features

- CSS3 Transition effects (with jQuery fallback if disabled):
  - None (just toggle visibility immediately)
  - Fade
  - Slide
- Customizable/themable ellipsis
- Customizable labels for trigger (collapsible, if you need to create a toggle)
- Customizable classes on trigger 

## How to use this module:

Enable the module and go to your content type's display 
(e.g. `admin/structure/types/manage/page/display`). You will see fields 
(like `Body`) that allow you to adjust the `Format` – you can now choose 
"Trimmed (expandable)". Once you've selected this format, you will have 
additional configuration options.

 ![Expanding Formatter Display Settings](https://github.com/backdrop-contrib/expanding_formatter/blob/1.x-1.x/images/expanding_formatter_display.png "Expanding formatter display settings")

## Issues

Bugs and Feature requests should be reported in the 
[Issue Queue](https://github.com/backdrop-contrib/expanding_formatter/issues)

## Current Maintainers

 - [Laryn Kragt Bakker](https://github.com/laryn) - [CEDC.org](https://cedc.org)

## Credits

- Ported to Backdrop CMS by [Laryn Kragt Bakker](https://github.com/laryn) - [CEDC.org](https://cedc.org).
- Maintainer for the Drupal module: [Mark Carver](https://github.com/markcarver).

## License

This project is GPL v2 software. See the [LICENSE.txt](https://github.com/backdrop-contrib/expanding_formatter/blob/1.x-1.x/LICENSE.txt) 
file in this directory for complete text.