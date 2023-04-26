$(document).ready(function () {
  var getActiveSlideIndex = function () {
    return $("#itemSlider .active").index("#itemSlider .carousel-item");
  };
  var slider = function (IndexNumber) {
    $(".slider .image")
      .removeClass("active")
      .eq(IndexNumber)
      .addClass("active");
  };
  slider(getActiveSlideIndex());
  $("#itemSlider").on("slid.bs.carousel", function () {
    slider(getActiveSlideIndex());
  });
});
