var locations = [
	{
		id: 1,
		name: 'Chattogram',
		lat: 22.3384,
		lng: 91.83168,
		country: 'BD',
		code5: 'BDCGP',
		distTo: null,
		pathTo: [],
		events: [
			{
				date: 1684180800,
				location: 1,
				description: 'Empty Container Release to Shipper',
				type: 4,
				vessel: null,
				voyage: null,
				imo: null,
				mmsi: null,
				call_sign: null,
				flag: null,
				descr: null,
				planner: false
			},
			{
				date: 1684194300,
				location: 1,
				description: 'Gate In to Outbound Terminal',
				type: 4,
				vessel: null,
				voyage: null,
				imo: null,
				mmsi: null,
				call_sign: null,
				flag: null,
				descr: null,
				planner: false
			},
			{
				date: 1684704600,
				location: 1,
				description: 'Loaded on at Port of Loading',
				type: 3,
				vessel: 'GREEN EARTH',
				voyage: '035S',
				imo: 9865984,
				mmsi: 563101900,
				call_sign: '9V6356',
				flag: 'SG',
				descr: null,
				planner: false
			},
			{
				date: 1684707300,
				location: 1,
				description: 'Departure from Port of Loading',
				type: 3,
				vessel: 'GREEN EARTH',
				voyage: '035S',
				imo: 9865984,
				mmsi: 563101900,
				call_sign: '9V6356',
				flag: 'SG',
				descr: null,
				planner: false
			}
		]
	},
	{
		id: 2,
		name: 'Colombo',
		lat: 6.93548,
		lng: 79.84868,
		country: 'LK',
		code5: 'LKCMB',
		distTo: 2207.0716920000004,
		pathTo: [
			[22.3384, 91.83168],
			[22.270392840044316, 91.69888937322179],
			[9.755861, 79.90625],
			[8.1975, 79.69541700000002],
			[6.93548, 79.84868]
		],
		events: [
			{
				date: 1685000340,
				location: 2,
				description: 'Arrival at Transhipment Port',
				type: 3,
				vessel: 'GREEN EARTH',
				voyage: '035S',
				imo: 9865984,
				mmsi: 563101900,
				call_sign: '9V6356',
				flag: 'SG',
				descr: null,
				planner: false
			},
			{
				date: 1685003820,
				location: 2,
				description: 'T/S Berthing Destination',
				type: 4,
				vessel: 'GREEN EARTH',
				voyage: '035S',
				imo: 9865984,
				mmsi: 563101900,
				call_sign: '9V6356',
				flag: 'SG',
				descr: null,
				planner: false
			},
			{
				date: 1685012520,
				location: 2,
				description: 'Unloaded from at Transhipment Port',
				type: 3,
				vessel: 'GREEN EARTH',
				voyage: '035S',
				imo: 9865984,
				mmsi: 563101900,
				call_sign: '9V6356',
				flag: 'SG',
				descr: null,
				planner: false
			},
			{
				date: 1685037900,
				location: 2,
				description: 'T/S Truck Terminal Departure',
				type: 4,
				vessel: null,
				voyage: null,
				imo: null,
				mmsi: null,
				call_sign: null,
				flag: null,
				descr: null,
				planner: false
			},
			{
				date: 1685038860,
				location: 2,
				description: 'T/S Truck Terminal Arrival',
				type: 4,
				vessel: null,
				voyage: null,
				imo: null,
				mmsi: null,
				call_sign: null,
				flag: null,
				descr: null,
				planner: false
			},
			{
				date: 1685340060,
				location: 2,
				description: 'Loaded on at Transhipment Port',
				type: 3,
				vessel: 'ONE CRANE',
				voyage: '025E',
				imo: 9741401,
				mmsi: 370651000,
				call_sign: 'H9NL',
				flag: 'PA',
				descr: null,
				planner: false
			},
			{
				date: 1685379420,
				location: 2,
				description: 'Departure from Transhipment Port',
				type: 3,
				vessel: 'ONE CRANE',
				voyage: '025E',
				imo: 9741401,
				mmsi: 370651000,
				call_sign: 'H9NL',
				flag: 'PA',
				descr: null,
				planner: false
			}
		]
	},
	{
		id: 3,
		name: 'Savannah',
		lat: 32.08354,
		lng: -81.09983,
		country: 'US',
		code5: 'USSAV',
		distTo: 16762.722942,
		pathTo: [
			[6.93548, 79.84868],
			[11.986111, 50.79761100000002],
			[12.6745, 43.463278],
			[29.927166, 32.566855000000004],
			[31.232806, 32.284501000000006],
			[31.531222, 31.919167000000016],
			[37.089583, 11.039139000000006],
			[37.349556, 9.745000000000005],
			[36.925389, 3.8958609999999965],
			[36.000417, -5.608417000000003],
			[31.929321583273243, -80.93356067064795],
			[32.08354, -81.09983]
		],
		events: [
			{
				date: 1687701600,
				location: 3,
				description: 'Arrival at Port of Discharging',
				type: 3,
				vessel: 'ONE CRANE',
				voyage: '025E',
				imo: 9741401,
				mmsi: 370651000,
				call_sign: 'H9NL',
				flag: 'PA',
				descr: null,
				planner: false
			},
			{
				date: 1687849200,
				location: 3,
				description: 'POD Berthing Destination',
				type: 4,
				vessel: 'ONE CRANE',
				voyage: '025E',
				imo: 9741401,
				mmsi: 370651000,
				call_sign: 'H9NL',
				flag: 'PA',
				descr: null,
				planner: false
			},
			{
				date: 1687854600,
				location: 3,
				description: 'Unloaded from at Port of Discharging',
				type: 3,
				vessel: 'ONE CRANE',
				voyage: '025E',
				imo: 9741401,
				mmsi: 370651000,
				call_sign: 'H9NL',
				flag: 'PA',
				descr: null,
				planner: false
			},
			{
				date: 1687870800,
				location: 3,
				description: 'Gate Out from Inbound Terminal for Delivery to Consignee (or Port Shuttle)',
				type: 4,
				vessel: null,
				voyage: null,
				imo: null,
				mmsi: null,
				call_sign: null,
				flag: null,
				descr: null,
				planner: false
			},
			{
				date: 1687892400,
				location: 3,
				description: 'Empty Container Returned from Customer',
				type: 4,
				vessel: null,
				voyage: null,
				imo: null,
				mmsi: null,
				call_sign: null,
				flag: null,
				descr: null,
				planner: false
			}
		]
	}
];
const mapStyleSilver = [
	{
		elementType: 'geometry',
		stylers: [{ color: '#e0e4ec' }]
	},
	{
		elementType: 'labels.icon',
		stylers: [{ visibility: 'off' }]
	},
	{
		elementType: 'labels.text.fill',
		stylers: [{ color: '#616161' }]
	},
	{
		elementType: 'labels.text.stroke',
		stylers: [{ color: '#f5f5f5' }]
	},
	{
		featureType: 'administrative.land_parcel',
		elementType: 'labels.text.fill',
		stylers: [{ color: '#bdbdbd' }]
	},
	{
		featureType: 'poi',
		elementType: 'geometry',
		stylers: [{ color: '#eeeeee' }]
	},
	{
		featureType: 'poi',
		elementType: 'labels.text.fill',
		stylers: [{ color: '#757575' }]
	},
	{
		featureType: 'poi.park',
		elementType: 'geometry',
		stylers: [{ color: '#e5e5e5' }]
	},
	{
		featureType: 'poi.park',
		elementType: 'labels.text.fill',
		stylers: [{ color: '#9e9e9e' }]
	},
	{
		featureType: 'road',
		elementType: 'geometry',
		stylers: [{ color: '#ffffff' }]
	},
	{
		featureType: 'road.arterial',
		elementType: 'labels.text.fill',
		stylers: [{ color: '#757575' }]
	},
	{
		featureType: 'road.highway',
		elementType: 'geometry',
		stylers: [{ color: '#dadada' }]
	},
	{
		featureType: 'road.highway',
		elementType: 'labels.text.fill',
		stylers: [{ color: '#616161' }]
	},
	{
		featureType: 'road.local',
		elementType: 'labels.text.fill',
		stylers: [{ color: '#9e9e9e' }]
	},
	{
		featureType: 'transit.line',
		elementType: 'geometry',
		stylers: [{ color: '#e5e5e5' }]
	},
	{
		featureType: 'transit.station',
		elementType: 'geometry',
		stylers: [{ color: '#eeeeee' }]
	},
	{
		featureType: 'water',
		elementType: 'geometry',
		stylers: [{ color: '#f8f8fa' }]
	},
	{
		featureType: 'water',
		elementType: 'labels.text.fill',
		stylers: [{ color: '#9e9e9e' }]
	}
];
console.log(locations);
function initMap() {
	// polyline
	let myLatLng = { lat: 20.025145019607272, lng: 38.82076434695159 };
	window.map = new google.maps.Map(document.getElementById('map'), {
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		scrollwheel: true,
		center: myLatLng
	});

	// set map style
	map.setOptions({ styles: mapStyleSilver, minZoom: 3 });

	var flightPlanCoordinates = [];
	var infoWindow = new google.maps.InfoWindow();
	var bounds = new google.maps.LatLngBounds();

	// pin locations
	new google.maps.Marker({
		map: map,
		position: myLatLng,
		label: 'ME'
		// icon: {
		// 	anchor: new google.maps.Point(16, 16), // center icon on end of polyline
		// 	origin: new google.maps.Point(0, 0),
		// 	scaledSize: new google.maps.Size(32, 32),
		// 	size: new google.maps.Size(64, 64),
		// 	url: 'https://icons.iconarchive.com/icons/paomedia/small-n-flat/512/map-marker-icon.png'
		// }
	});

	locations.forEach(function (item, index) {
		const marker = new google.maps.Marker({
			map: map,
			position: new google.maps.LatLng(item.lat, item.lng)
		});

		item.pathTo.forEach(function (path) {
			flightPlanCoordinates.push(new google.maps.LatLng(path[0], path[1]));
		});

		flightPlanCoordinates.push(marker.getPosition());
		bounds.extend(marker.position);
		google.maps.event.addListener(
			marker,
			'click',
			(function (marker) {
				return function () {
					infoWindow.setContent(item.name);
					infoWindow.open(map, marker);
				};
			})(marker, index)
		);
	});

	const polyline = new google.maps.Polyline({
		map: map,
		path: flightPlanCoordinates,
		strokeColor: '#FF0000',
		strokeOpacity: 1.0,
		strokeWeight: 2
	});
	for (let i = 0; i < polyline.getPath().getLength(); i++) {
		bounds.extend(polyline.getPath().getAt(i));
	}
	map.fitBounds(bounds);
}

window.initMap = initMap;
