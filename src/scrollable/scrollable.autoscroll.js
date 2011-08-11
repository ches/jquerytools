/**
* @license 
* jQuery Tools @VERSION / Scrollable Autoscroll
* 
* NO COPYRIGHTS OR LICENSES. DO WHAT YOU LIKE.
* 
* http://flowplayer.org/tools/scrollable/autoscroll.html
*
* Since: September 2009
* Date: @DATE 
*/
(function($) {

  var t = $.tools.scrollable;

  t.autoscroll = {

      conf: {
          autoplay: true,
          interval: 3000,
          autopause: true
      }
  };

  // jQuery plugin implementation
  $.fn.autoscroll = function(conf) {

    if (typeof conf == 'number') {
      conf = {
        interval: conf
      };
    }

    var opts = $.extend({},
    t.autoscroll.conf, conf),
    ret;

    this.each(function() {

      var api = $(this).data("scrollable"),
          root = api.getRoot(),
          // interval stuff
          timer;
      
      if (api) { ret = api; }

      /**
      *
      *   Function to run autoscroll through event binding rather than setInterval
      *   Fixes this bug: http://flowplayer.org/tools/forum/25/72029
      */
      function scroll(){        
        timer = setTimeout(function(){
          api.next();
        }, opts.interval);
      }
      
      api.play = function() {
        root.bind('onSeek', scroll);
        scroll();
      };

      api.pause = function() {
        clearTimeout(timer);  // clear any queued items immediately
        root.unbind('onSeek', scroll);
      };

      // when stopped - mouseover won't restart
      // This isn't actually true (and hasn't been true in the past)
      // Will implement if there's an overwhelming case for it
      api.stop = function() {
        api.pause();
      };

      /* when mouse enters, autoscroll stops */
      if (opts.autopause) {
        api.getRoot().add(api.getNaviButtons()).hover(api.pause, api.play);
      }

      if (opts.autoplay) {
        api.play();
      }

    });

    return opts.api ? ret: this;

  };

})(jQuery);
