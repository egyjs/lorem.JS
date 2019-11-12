/*
 * Date: Nov 17 2018
 * Source: CascoCode.com
 * Author: A.El-dahabi [Abdullrahman El-zahaby] (el0zahaby@gmail.com)
 */
(function(window, $){
  var Lorem = function(elem, options){
      this.elem = elem;
      this.$elem = $(elem);
      this.options = options;

      console.log(this);
    };

  Lorem.prototype = {
    defaults: {
      length: 'rand',
    },
    init: function() {
      this.config = $.extend({}, this.defaults, this.options, this.metadata);

      this.displayLorem(this.defaults.length);

      return this;
    },
    displayLorem: function(length) {
        console.log(this.config.length);
        if (this.config.length === 'rand')  {
            var arrrand= ['one','two','three','full']
            this.config.length = arrrand[Math.floor(Math.random() * arrrand.length)];

        }

      if (this.config.length === 'one')   { $(this.elem).html("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."); }
      if (this.config.length === 'two')   { $(this.elem).html("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."); }
      if (this.config.length === 'three') { $(this.elem).html("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."); }
      if (this.config.length === 'full')  { $(this.elem).html("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."); }
      if ( parseInt(this.config.length) > 0)  {
          var txt =  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
          var res = txt.slice(0, this.config.length);
          $(this.elem).html(res);
      }



    }
  };

  Lorem.defaults = Lorem.prototype.defaults;

  $.fn.Lorem = function(options) {
    return this.each(function() {
      new Lorem(this, options).init();
    });
  };

  window.Lorem = Lorem;
})(window, jQuery);
