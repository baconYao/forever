$(document).ready(function(){
      //control the top sidebar menu
      $("#mbutton").on({
        mouseenter: function(){
          $(this).addClass('animated jello');
        },
        mouseleave: function(){
          $(this).removeClass("animated jello");
        },
        click: function(){
          $('.ui.sidebar').sidebar('toggle') ;
        }
      });

      //control the top sidebar menu's items
      //home
      $("#mit1").on({
        mouseenter: function(){
          $(this).addClass("active purple");
        },
        mouseleave: function(){
          $(this).removeClass("active purple");
        },
        click: function(){
          $('html,body').animate({scrollTop:$('#header').offset().top},600);
        }
      });
      // wh are we
      $("#mit2").on({
        mouseenter: function(){
          $(this).addClass("active orange");
        },
        mouseleave: function(){
          $(this).removeClass("active orange");
        },
        click: function(){
          $('html,body').animate({scrollTop:$('#who_are_we').offset().top},600);
        }
      });
      // big photo
      $("#mit3").on({
        mouseenter: function(){
          $(this).addClass("active grey");
        },
        mouseleave: function(){
          $(this).removeClass("active grey");
        },
        click: function(){
          $('html,body').animate({scrollTop:$('#bigphoto').offset().top},600);
        }
      });
      // our story
      $("#mit4").on({
        mouseenter: function(){
          $(this).addClass("active teal");
        },
        mouseleave: function(){
          $(this).removeClass("active teal");
        },
        click: function(){
          $('html,body').animate({scrollTop:$('#our_stroy').offset().top},600);
        }
      });

      //control scroll back to top button
      $("#gotopbutton").on({
        mouseenter: function(){
          $(this).addClass('animated shake');
        },
        mouseleave: function(){
          $(this).removeClass('animated shake');
        },
        click: function(){
          $('html,body').animate({scrollTop:$('#header').offset().top},600);
        }
      });

      //control heart icon 
      $("#title0").on({
        mouseenter: function(){
          $(this).addClass('animated hinge');
        }
      });

      //control heart icon 
      $("#heart_icon").on({
        mouseenter: function(){
          $(this).addClass('animated rubberBand');
        },
        mouseleave: function(){
          $(this).removeClass('animated rubberBand');
        },
      });

      //aniview control
      var options = {
          animateThreshold: 100,
          scrollPollInterval: 20
      }
      $('.aniview').AniView(options);


});
