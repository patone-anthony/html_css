$('.slider').slick({
  dots: false,
  infinite: true,
  speed: 1000,
  fade: true,
  cssEase: 'linear',
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
});


// Initialize and add the map
function initMap() {
  // The location of Uluru
  var uluru = { lat: 40.923880, lng: -73.855630 };
  // The map, centered at Uluru
  var map = new google.maps.Map(
    document.getElementById('map'), { zoom: 14, center: uluru });
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({ position: uluru, map: map });
}