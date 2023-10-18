(function() {
  isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
  if (isWindows) {
    $('.sidebar .sidebar-wrapper, .main-panel, .main').perfectScrollbar();
    $('html').addClass('perfect-scrollbar-on');
  } else {
    $('html').addClass('perfect-scrollbar-off');
  }
})();
var breakCards = true;
var searchVisible = 0;
var transparent = true;
var transparentDemo = true;
var fixedTop = false;
var mobile_menu_visible = 0,
  mobile_menu_initialized = false,
  toggle_initialized = false,
  bootstrap_nav_initialized = false;

$(document).ready(function() {
 $('body').bootstrapMaterialDesign();
  $sidebar = $('.sidebar');
  md.initSidebarsCheck();
  window_width = $(window).width();
});

$(document).on('click', '.navb-toggler', function() {
  alert('work');
  $toggle = $(this);
  if (mobile_menu_visible == 1) {
    $('html').removeClass('nav-open');
    $('.close-layer').remove();
    setTimeout(function() {
      $toggle.removeClass('toggled');
    }, 400);
    mobile_menu_visible = 0;
  } else {
    setTimeout(function() {
      $toggle.addClass('toggled');
    }, 430);
    var $layer = $('<div class="close-layer"></div>');
    if ($('body').find('.main-panel').length != 0) {
      $layer.appendTo(".main-panel");
    } else if (($('body').hasClass('off-canvas-sidebar'))) {
      $layer.appendTo(".wrapper-full-page");
    }
    setTimeout(function() {
      $layer.addClass('visible');
    }, 100);

    $layer.click(function() {
      $('html').removeClass('nav-open');
      mobile_menu_visible = 0;
      $layer.removeClass('visible');
      setTimeout(function() {
        $layer.remove();
        $toggle.removeClass('toggled');
      }, 400);
    });

    $('html').addClass('nav-open');
    mobile_menu_visible = 1;
    }
});

md = {
  misc: {
    navbar_menu_visible: 0,
    active_collapse: true,
    disabled_collapse_init: 0,
  },
  
  initMinimizeSidebar: function() {
  $('#minimizeSidebar').click(function() {
      var $btn = $(this);
    if (md.misc.sidebar_mini_active == true) {
        $('body').removeClass('sidebar-mini');
        md.misc.sidebar_mini_active = false;
      } else {
        $('body').addClass('sidebar-mini');
        md.misc.sidebar_mini_active = true;
      }
  });
  },
    initRightMenu: debounce(function() {
    $sidebar_wrapper = $('.sidebar-wrapper');

    if (!mobile_menu_initialized) {
      $navbar = $('nav').find('.navb-collapse').children('.navb-nav');
      mobile_menu_content = '';
      nav_content = $navbar.html();
      nav_content = '<ul class="nav navbar-nav nav-mobile-menu">' + nav_content + '</ul>';
      $sidebar_nav = $sidebar_wrapper.find(' > .nav');
      $nav_content = $(nav_content);
      $nav_content.insertBefore($sidebar_nav);
      $navbar_form.insertBefore($nav_content);
      $(".sidebar-wrapper .dropdown .dropdown-menu > li > a").click(function(event) {
        event.stopPropagation();
      });
      mobile_menu_initialized = true;
    } else {
      if ($(window).width() > 991) {
        $sidebar_wrapper.find('.navbar-form').remove();
        $sidebar_wrapper.find('.nav-mobile-menu').remove();
        mobile_menu_initialized = false;
      }
    }
  }, 200),
};
