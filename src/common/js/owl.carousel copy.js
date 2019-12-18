/*
 *  jQuery OwlCarousel v1.3.3
 *
 *  Copyright (c) 2013 Bartosz Wojciechowski
 *  http://www.owlgraphic.com/owlcarousel/
 *
 *  Licensed under MIT
 *
 */

/*JS Lint helpers: */
/*global dragMove: false, dragEnd: false, $, jQuery, alert, window, document */
/*jslint nomen: true, continue:true */

class OwlCarousel {
  constructor(jQuery) {
    this.jQuery = jQuery;
  }

  init(options, el) {
    const base = this;
    base.$elem = $(el);
    base.options = $.extend({}, $.fn.owlCarousel.options, base.$elem.data(), options);
    base.userOptions = options;
    base.loadContent();
  }
}
