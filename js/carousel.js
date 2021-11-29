const mainBannerCarousel = tns({
  mode: "gallery",
  container: ".banner .banner__list",
  controls: false,
  navContainer: ".banner .banner-nav__list",
  navAsThumbnails: false,
  arrowKeys: false,
  autoplay: false,
  autoplayHoverPause: false,
  autoplayButtonOutput: false,
  mouseDrag: false,
  preventScrollOnTouch: true,
});

const productNewListCarousel = tns({
  container: ".product-slide__list--new",
  items: 4,
  loop: false,
  gutter: 15,
  controls: true,
  arrowKeys: true,
  autoplay: false,
  mouseDrag: true,
  controlsContainer: ".product-slide__controls",
  speed: 500,
  loop: true,
});

const productSandwichListCarousel = tns({
  container: ".product-slide__list--sandwich",
  items: 4,
  loop: false,
  gutter: 15,
  controls: true,
  arrowKeys: true,
  autoplay: false,
  mouseDrag: true,
  controlsContainer: ".product-slide__controls",
  speed: 500,
  loop: true,
});

const productDessertListCarousel = tns({
  container: ".product-slide__list--dessert",
  items: 4,
  loop: false,
  gutter: 15,
  controls: true,
  arrowKeys: true,
  autoplay: false,
  mouseDrag: true,
  controlsContainer: ".product-slide__controls",
  speed: 500,
  loop: true,
});

const productDrinkListCarousel = tns({
  container: ".product-slide__list--drink",
  items: 4,
  loop: false,
  gutter: 15,
  controls: true,
  arrowKeys: true,
  autoplay: false,
  mouseDrag: true,
  controlsContainer: ".product-slide__controls",
  speed: 500,
  loop: true,
});

const productSlideCarousel = tns({
  mode: "gallery",
  container: ".product-slide__box",
  navContainer: ".product-slide__nav-list",
  controls: false,
  navAsThumbnails: false,
  arrowKeys: false,
  autoplay: false,
  autoplayHoverPause: false,
  autoplayButtonOutput: false,
  mouseDrag: false,
  preventScrollOnTouch: true,
});

const eventCarousel = tns({
  container: ".event-slide__list",
  items: 3,
  loop: true,
  controls: true,
  arrowKeys: true,
  autoplay: false,
  mouseDrag: true,
  controlsContainer: ".event-slide__controls",
  speed: 300,
});

const followCarousel = tns({
  container: ".follow-slide__list",
  items: 4,
  gutter: 15,
  loop: true,
  controls: true,
  arrowKeys: true,
  autoplay: false,
  mouseDrag: true,
  controlsContainer: ".follow-slide__controls",
  speed: 300,
});
