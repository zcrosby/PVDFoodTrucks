var map;

var createMap = function(){

	map = L.map('map', {center: [41.823941 , -71.413107], zoom: 13,});

			L.tileLayer('http://{s}.tile.cloudmade.com/7fa441524a5e40f580929fae29a885e6/83513/256/{z}/{x}/{y}.png', {
				attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
				maxZoom: 18
			}).addTo(map);
}


var addTruckToMap = function(geoCoords, truckName, tweet){

		var foodTruck = L.icon({
					    iconUrl: 'truckImage.svg',
						iconSize:     [38, 95], // size of the icon
					    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
					    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
					});

		var marker = L.marker(geoCoords, {icon: foodTruck}).addTo(map);

		marker.bindPopup("<b>" + truckName + "</b>" + "<br>" + tweetAddress).openPopup();
}
		
createMap();



