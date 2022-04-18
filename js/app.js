$(".customer-list").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  nextArrow: `
    <button type="button" class="slick-next">
      <img srcset="./images/arrowLeft.png 2x" />
    </button>
  `,
  prevArrow: `
    <button type="button" class="slick-prev">
      <img srcset="./images/arrowRight.png 2x" />
    </button>
  `,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: false,
      },
    },
  ],
});
