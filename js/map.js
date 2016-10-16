function initMap() {
	var winterpark = {
			info: '<strong>Donut King in Winter Park</strong><br>\
						3716 Howell Branch Rd<br> Winter Park, FL 32792<br>\
						<a href="https://goo.gl/maps/oh5zM7s6tUs">Get Directions</a>',
			lat: 28.624292,
			long: -81.300891
		};

	var mineola = {
			info: '<strong>Donut King in Mineola</strong><br>\
						208 South Highway 27<br> Mineola, FL 33471<br>\
						<a href="https://goo.gl/maps/8TXZMPbQgS92">Get Directions</a>',
			lat: 28.577673,
			long: -81.750024
		};

	var locations = [
	      [winterpark.info, winterpark.lat, winterpark.long, 0],
	      [mineola.info, mineola.lat, mineola.long, 1]
	    ];

	 var map = new google.maps.Map(document.getElementById('map'), {
			zoom: 10,
			center: new google.maps.LatLng(28.728662, -81.552437),
			mapTypeId: google.maps.MapTypeId.ROADMAP
		});

	 var infowindow = new google.maps.InfoWindow({});

	var marker, i;

	for (i = 0; i < locations.length; i++) {
		marker = new google.maps.Marker({
			position: new google.maps.LatLng(locations[i][1], locations[i][2]),
			map: map
		});

		google.maps.event.addListener(marker, 'click', (function (marker, i) {
			return function () {
				infowindow.setContent(locations[i][0]);
				infowindow.open(map, marker);
			}
		})(marker, i));
	}
}