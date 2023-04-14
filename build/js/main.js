document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper-cases", {
    // Optional parameters
    loop: true,
    centeredSlides: false,
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-cases .swiper-button-next",
      prevEl: ".swiper-cases .swiper-button-prev",
    },

    slidesPerView: "auto",
    spaceBetween: 4,
    breakpoints: {
      767: {
        slidesPerView: 6,
        spaceBetween: 20,
        centeredSlides: false,
      },
    },
  });

  const swiper2 = new Swiper(".swiper-reviews ", {
    // Optional parameters
    // loop: true,
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-reviews .swiper-button-next",
      prevEl: ".swiper-reviews .swiper-button-prev",
    },

    slidesPerView: 1,
    spaceBetween: 0,
    breakpoints: {
      767: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
    },
  });

  document.querySelectorAll(".card__swiper-container").forEach((n) => {
    const thumbs = new Swiper(n.querySelector(".mySwiper"), {
      slidesPerView: 2,
      spaceBetween: 10,
      watchSlidesProgress: true,
      slideToClickedSlide: true,
      loop: true,
      breakpoints: {
        767: {
          slidesPerView: 5,
          spaceBetween: 10,
        },
      },
    });
    const slider = new Swiper(n.querySelector(".mySwiper2"), {
      spaceBetween: 10,
      navigation: {
        nextEl: n.querySelector(".swiper-button-next"),
        prevEl: n.querySelector(".swiper-button-prev"),
      },
      thumbs: {
        swiper: thumbs,
      },
    });
  });

  const cards = document.querySelectorAll(".cases__carousel .swiper-slide");
  cards.forEach((card) => {
    card.addEventListener("click", function () {
      console.log(card);
      document.querySelector("body").classList.add("hidden");
      const cardAtr = card.getAttribute("data-swiper-slide-index");
      const cardModals = document.querySelectorAll(".card-modal");
      cardModals[cardAtr].classList.remove("hidden");
    });
  });

  $(".card__close").click(function () {
    $(".card-modal").addClass("hidden");
    $("body").removeClass("hidden");
  });

  $(".show-uno").click(function () {
    $(".card-uno").removeClass("hidden");
    document.querySelector("body").classList.add("hidden");
  });
  $(".show-bdns").click(function () {
    $(".card-bdns").removeClass("hidden");
    document.querySelector("body").classList.add("hidden");
  });
  $(".show-dwill").click(function () {
    $(".card-dwill").removeClass("hidden");
    document.querySelector("body").classList.add("hidden");
  });

  // const submitForm = document.querySelector("#submit");
  // submitForm.addEventListener("click", function (evt) {
  //   evt.preventDefault();
  // });
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcclxuICBjb25zdCBzd2lwZXIgPSBuZXcgU3dpcGVyKFwiLnN3aXBlci1jYXNlc1wiLCB7XHJcbiAgICAvLyBPcHRpb25hbCBwYXJhbWV0ZXJzXHJcbiAgICBsb29wOiB0cnVlLFxyXG4gICAgY2VudGVyZWRTbGlkZXM6IGZhbHNlLFxyXG4gICAgLy8gTmF2aWdhdGlvbiBhcnJvd3NcclxuICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgbmV4dEVsOiBcIi5zd2lwZXItY2FzZXMgLnN3aXBlci1idXR0b24tbmV4dFwiLFxyXG4gICAgICBwcmV2RWw6IFwiLnN3aXBlci1jYXNlcyAuc3dpcGVyLWJ1dHRvbi1wcmV2XCIsXHJcbiAgICB9LFxyXG5cclxuICAgIHNsaWRlc1BlclZpZXc6IFwiYXV0b1wiLFxyXG4gICAgc3BhY2VCZXR3ZWVuOiA0LFxyXG4gICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgNzY3OiB7XHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogNixcclxuICAgICAgICBzcGFjZUJldHdlZW46IDIwLFxyXG4gICAgICAgIGNlbnRlcmVkU2xpZGVzOiBmYWxzZSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHN3aXBlcjIgPSBuZXcgU3dpcGVyKFwiLnN3aXBlci1yZXZpZXdzIFwiLCB7XHJcbiAgICAvLyBPcHRpb25hbCBwYXJhbWV0ZXJzXHJcbiAgICAvLyBsb29wOiB0cnVlLFxyXG4gICAgLy8gTmF2aWdhdGlvbiBhcnJvd3NcclxuICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgbmV4dEVsOiBcIi5zd2lwZXItcmV2aWV3cyAuc3dpcGVyLWJ1dHRvbi1uZXh0XCIsXHJcbiAgICAgIHByZXZFbDogXCIuc3dpcGVyLXJldmlld3MgLnN3aXBlci1idXR0b24tcHJldlwiLFxyXG4gICAgfSxcclxuXHJcbiAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgc3BhY2VCZXR3ZWVuOiAwLFxyXG4gICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgNzY3OiB7XHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgICAgICBzcGFjZUJldHdlZW46IDIwLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jYXJkX19zd2lwZXItY29udGFpbmVyXCIpLmZvckVhY2goKG4pID0+IHtcclxuICAgIGNvbnN0IHRodW1icyA9IG5ldyBTd2lwZXIobi5xdWVyeVNlbGVjdG9yKFwiLm15U3dpcGVyXCIpLCB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgIHNwYWNlQmV0d2VlbjogMTAsXHJcbiAgICAgIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWUsXHJcbiAgICAgIHNsaWRlVG9DbGlja2VkU2xpZGU6IHRydWUsXHJcbiAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgICAgNzY3OiB7XHJcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiA1LFxyXG4gICAgICAgICAgc3BhY2VCZXR3ZWVuOiAxMCxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBzbGlkZXIgPSBuZXcgU3dpcGVyKG4ucXVlcnlTZWxlY3RvcihcIi5teVN3aXBlcjJcIiksIHtcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAxMCxcclxuICAgICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICAgIG5leHRFbDogbi5xdWVyeVNlbGVjdG9yKFwiLnN3aXBlci1idXR0b24tbmV4dFwiKSxcclxuICAgICAgICBwcmV2RWw6IG4ucXVlcnlTZWxlY3RvcihcIi5zd2lwZXItYnV0dG9uLXByZXZcIiksXHJcbiAgICAgIH0sXHJcbiAgICAgIHRodW1iczoge1xyXG4gICAgICAgIHN3aXBlcjogdGh1bWJzLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jYXNlc19fY2Fyb3VzZWwgLnN3aXBlci1zbGlkZVwiKTtcclxuICBjYXJkcy5mb3JFYWNoKChjYXJkKSA9PiB7XHJcbiAgICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGNhcmQpO1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG4gICAgICBjb25zdCBjYXJkQXRyID0gY2FyZC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXN3aXBlci1zbGlkZS1pbmRleFwiKTtcclxuICAgICAgY29uc3QgY2FyZE1vZGFscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2FyZC1tb2RhbFwiKTtcclxuICAgICAgY2FyZE1vZGFsc1tjYXJkQXRyXS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gICQoXCIuY2FyZF9fY2xvc2VcIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgJChcIi5jYXJkLW1vZGFsXCIpLmFkZENsYXNzKFwiaGlkZGVuXCIpO1xyXG4gICAgJChcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCJoaWRkZW5cIik7XHJcbiAgfSk7XHJcblxyXG4gICQoXCIuc2hvdy11bm9cIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgJChcIi5jYXJkLXVub1wiKS5yZW1vdmVDbGFzcyhcImhpZGRlblwiKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgfSk7XHJcbiAgJChcIi5zaG93LWJkbnNcIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgJChcIi5jYXJkLWJkbnNcIikucmVtb3ZlQ2xhc3MoXCJoaWRkZW5cIik7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG4gIH0pO1xyXG4gICQoXCIuc2hvdy1kd2lsbFwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAkKFwiLmNhcmQtZHdpbGxcIikucmVtb3ZlQ2xhc3MoXCJoaWRkZW5cIik7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG4gIH0pO1xyXG5cclxuICAvLyBjb25zdCBzdWJtaXRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdWJtaXRcIik7XHJcbiAgLy8gc3VibWl0Rm9ybS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2dCkge1xyXG4gIC8vICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgLy8gfSk7XHJcbn0pO1xyXG4iXSwiZmlsZSI6Im1haW4uanMifQ==
