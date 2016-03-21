$(document).ready(function(){
  $('.bxslider').bxSlider();

  $(function() {
    $(".rslides").responsiveSlides();
  });

  $( window ).scroll(function() {
  	if ($(document).scrollTop() > 60) {
  		$('.navbar-preheader').css("height","0");
  		$('.navbar-preheader').css("padding-top","120");
  	} else {
  		$('.navbar-preheader').css("padding-top","60");
  		$('.navbar-preheader').css("height","60");

  	};
  });

  var actualReview = 1;
  var reviews = $('#reviewsList p');
  var numOfReviews = $('#reviewsList p').length;

  $('#nextReview').click(function(){
  	changeReview("next");
  })

  $('#previousReview').click(function(){
  	changeReview("prev");
  })

  function changeReview (way) {
  	reviews.css("display","none");
  	if (actualReview == numOfReviews && way == "next") {
  		actualReview = 1;
  	} else if (way == "next") {
  		actualReview++;
  	} else if (actualReview == 1 && way == "prev") {
  		actualReview = numOfReviews;
  	} else if (way == "prev") {
  		actualReview--;
  	}
  	$(reviews[actualReview - 1]).fadeIn("slow");
  }

  $.getScript("https://maps.googleapis.com/maps/api/js", function(){
   initMap();
  });

  function initMap() {
  var myLatLng = {lat: 49.129908, lng: 18.683351};
  var contentString = "<div id=content'>" +
      "<h3>Hotel Encián</h1>" +
      "<p>Osloboditeľov 89/1<br>013 13 Rajecké Teplice</p>" +
      "</div>";
    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });
    var mapDiv = document.getElementById('map');
    var map = new google.maps.Map(mapDiv, {
      center: {lat: 49.409908, lng: 18.683351},
      zoom: 8,
      scrollwheel: false,
      styles: [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]}]
    });

    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      icon: 'images/favicon/favicon-32x32.png',
      animation: google.maps.Animation.DROP
    });

    infowindow.open(map, marker);
    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });
}


});

