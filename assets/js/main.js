<<<<<<< HEAD
!(function($) {
  "use strict";

  // Navigasi
  $(document).on('click', '.mobile-nav-toggle', function(e) {
    $('body').toggleClass('mobile-nav-active');
    $('.mobile-nav-toggle i').toggleClass('fas fa-times');
  });

  $(document).click(function(e) {
    var container = $(".mobile-nav-toggle");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      if ($('body').hasClass('mobile-nav-active')) {
        $('body').removeClass('mobile-nav-active');
        $('.mobile-nav-toggle i').toggleClass('fas fa-times');
      }
    }
  });

  // Show Modal Portfolio
    $('#exampleModal').on('show.bs.modal', function (e) {
        var image = $(e.relatedTarget).attr('src');
        $(".img-modal").attr("src", image);
    });
    
=======
!(function($) {
  "use strict";

  // Navigasi
  $(document).on('click', '.mobile-nav-toggle', function(e) {
    $('body').toggleClass('mobile-nav-active');
    $('.mobile-nav-toggle i').toggleClass('fas fa-times');
  });

  $(document).click(function(e) {
    var container = $(".mobile-nav-toggle");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      if ($('body').hasClass('mobile-nav-active')) {
        $('body').removeClass('mobile-nav-active');
        $('.mobile-nav-toggle i').toggleClass('fas fa-times');
      }
    }
  });

  // Show Modal Portfolio
    $('#exampleModal').on('show.bs.modal', function (e) {
        var image = $(e.relatedTarget).attr('src');
        $(".img-modal").attr("src", image);
    });

    $('.carousel').carousel()
    
>>>>>>> aeee5ca (update portofolio n resume)
})(jQuery);