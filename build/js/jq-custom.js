$(document).ready(function () {
  $(".marquee").marquee({
    //duration in milliseconds of the marquee
    duration: 15000,
    //gap in pixels between the tickers
    gap: 50,
    //time in milliseconds before the marquee will start animating
    delayBeforeStart: 0,
    //'left' or 'right'
    direction: "left",
    //true or false - should the marquee be duplicated to show an effect of continues flow
    duplicated: true,
  });

  $(".header__burger").on("click", function () {
    $(this).toggleClass("active");
    $("body").toggleClass("hidden");
    $('.nav').toggleClass("active");
  });

  $(".nav__links a").click(function () {
    $("body").removeClass("hidden");
    $(".burger").removeClass("active");
  });

  $(function () {
    $('a[href^="#"]').on("click", function (evt) {
      // отменяем стандартное действие
      evt.preventDefault();

      var sc = $(this).attr("href"),
        dn = $(sc).offset().top;
      /*
       * sc - в переменную заносим информацию о том, к какому блоку надо перейти
       * dn - определяем положение блока на странице
       */

      $("html, body").animate({ scrollTop: dn }, 1000);

      /*
       * 1000 скорость перехода в миллисекундах
       */
    });
  });

  $(".tabs-content").hide();
  $(".tabs-head").on("click", function () {
    $(this).toggleClass("active");
    $(this).next().toggle();
  });

  autosize($("textarea"));

  $(document).ready(function () {
    if (window.innerWidth < 768) {
      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              $(entry.target).addClass("active bounceInLeft");
            } else {
              $(entry.target).removeClass("active bounceInLeft");
            }
          });
        },
        { threshold: 1 }
      );
      $(".cases__picture").each(function () {
        observer.observe(this);
      });
    }
  });

  $(document).ready(function() {
    var mh = 0;
    $(".swiper-reviews .swiper-slide").each(function () {
        var h_block = parseInt($(this).height());
        if(h_block > mh) {
           mh = h_block;
        };
    });
    $(".swiper-reviews .swiper-slide").height(mh);
  })
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJqcS1jdXN0b20uanMiXSwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICQoXCIubWFycXVlZVwiKS5tYXJxdWVlKHtcclxuICAgIC8vZHVyYXRpb24gaW4gbWlsbGlzZWNvbmRzIG9mIHRoZSBtYXJxdWVlXHJcbiAgICBkdXJhdGlvbjogMTUwMDAsXHJcbiAgICAvL2dhcCBpbiBwaXhlbHMgYmV0d2VlbiB0aGUgdGlja2Vyc1xyXG4gICAgZ2FwOiA1MCxcclxuICAgIC8vdGltZSBpbiBtaWxsaXNlY29uZHMgYmVmb3JlIHRoZSBtYXJxdWVlIHdpbGwgc3RhcnQgYW5pbWF0aW5nXHJcbiAgICBkZWxheUJlZm9yZVN0YXJ0OiAwLFxyXG4gICAgLy8nbGVmdCcgb3IgJ3JpZ2h0J1xyXG4gICAgZGlyZWN0aW9uOiBcImxlZnRcIixcclxuICAgIC8vdHJ1ZSBvciBmYWxzZSAtIHNob3VsZCB0aGUgbWFycXVlZSBiZSBkdXBsaWNhdGVkIHRvIHNob3cgYW4gZWZmZWN0IG9mIGNvbnRpbnVlcyBmbG93XHJcbiAgICBkdXBsaWNhdGVkOiB0cnVlLFxyXG4gIH0pO1xyXG5cclxuICAkKFwiLmhlYWRlcl9fYnVyZ2VyXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgJCh0aGlzKS50b2dnbGVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICQoXCJib2R5XCIpLnRvZ2dsZUNsYXNzKFwiaGlkZGVuXCIpO1xyXG4gICAgJCgnLm5hdicpLnRvZ2dsZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gIH0pO1xyXG5cclxuICAkKFwiLm5hdl9fbGlua3MgYVwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAkKFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcImhpZGRlblwiKTtcclxuICAgICQoXCIuYnVyZ2VyXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gIH0pO1xyXG5cclxuICAkKGZ1bmN0aW9uICgpIHtcclxuICAgICQoJ2FbaHJlZl49XCIjXCJdJykub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgIC8vINC+0YLQvNC10L3Rj9C10Lwg0YHRgtCw0L3QtNCw0YDRgtC90L7QtSDQtNC10LnRgdGC0LLQuNC1XHJcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgdmFyIHNjID0gJCh0aGlzKS5hdHRyKFwiaHJlZlwiKSxcclxuICAgICAgICBkbiA9ICQoc2MpLm9mZnNldCgpLnRvcDtcclxuICAgICAgLypcclxuICAgICAgICogc2MgLSDQsiDQv9C10YDQtdC80LXQvdC90YPRjiDQt9Cw0L3QvtGB0LjQvCDQuNC90YTQvtGA0LzQsNGG0LjRjiDQviDRgtC+0LwsINC6INC60LDQutC+0LzRgyDQsdC70L7QutGDINC90LDQtNC+INC/0LXRgNC10LnRgtC4XHJcbiAgICAgICAqIGRuIC0g0L7Qv9GA0LXQtNC10LvRj9C10Lwg0L/QvtC70L7QttC10L3QuNC1INCx0LvQvtC60LAg0L3QsCDRgdGC0YDQsNC90LjRhtC1XHJcbiAgICAgICAqL1xyXG5cclxuICAgICAgJChcImh0bWwsIGJvZHlcIikuYW5pbWF0ZSh7IHNjcm9sbFRvcDogZG4gfSwgMTAwMCk7XHJcblxyXG4gICAgICAvKlxyXG4gICAgICAgKiAxMDAwINGB0LrQvtGA0L7RgdGC0Ywg0L/QtdGA0LXRhdC+0LTQsCDQsiDQvNC40LvQu9C40YHQtdC60YPQvdC00LDRhVxyXG4gICAgICAgKi9cclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICAkKFwiLnRhYnMtY29udGVudFwiKS5oaWRlKCk7XHJcbiAgJChcIi50YWJzLWhlYWRcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgJCh0aGlzKS5uZXh0KCkudG9nZ2xlKCk7XHJcbiAgfSk7XHJcblxyXG4gIGF1dG9zaXplKCQoXCJ0ZXh0YXJlYVwiKSk7XHJcblxyXG4gICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDc2OCkge1xyXG4gICAgICB2YXIgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXHJcbiAgICAgICAgZnVuY3Rpb24gKGVudHJpZXMpIHtcclxuICAgICAgICAgIGVudHJpZXMuZm9yRWFjaChmdW5jdGlvbiAoZW50cnkpIHtcclxuICAgICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XHJcbiAgICAgICAgICAgICAgJChlbnRyeS50YXJnZXQpLmFkZENsYXNzKFwiYWN0aXZlIGJvdW5jZUluTGVmdFwiKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAkKGVudHJ5LnRhcmdldCkucmVtb3ZlQ2xhc3MoXCJhY3RpdmUgYm91bmNlSW5MZWZ0XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHsgdGhyZXNob2xkOiAxIH1cclxuICAgICAgKTtcclxuICAgICAgJChcIi5jYXNlc19fcGljdHVyZVwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKHRoaXMpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgbWggPSAwO1xyXG4gICAgJChcIi5zd2lwZXItcmV2aWV3cyAuc3dpcGVyLXNsaWRlXCIpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBoX2Jsb2NrID0gcGFyc2VJbnQoJCh0aGlzKS5oZWlnaHQoKSk7XHJcbiAgICAgICAgaWYoaF9ibG9jayA+IG1oKSB7XHJcbiAgICAgICAgICAgbWggPSBoX2Jsb2NrO1xyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxuICAgICQoXCIuc3dpcGVyLXJldmlld3MgLnN3aXBlci1zbGlkZVwiKS5oZWlnaHQobWgpO1xyXG4gIH0pXHJcbn0pO1xyXG4iXSwiZmlsZSI6ImpxLWN1c3RvbS5qcyJ9
