const token =
	'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMmUyMWQ0ODM2ZjE4NjY5YzFmNDhiMDQxZTA0MDAzZjE4YzVlOGY3ZTM1MjIxZDcxZDEzNGFiNzcxMWM0NDE2NzgxNjA0ZTNkZmNiMDU4ZWUiLCJpYXQiOjE2OTA3MjQ2NTQuOTE2NDEsIm5iZiI6MTY5MDcyNDY1NC45MTY0MTEsImV4cCI6MTY5MTMyOTQ1NC45MTMxMSwic3ViIjoiMjQyMiIsInNjb3BlcyI6W119.vXy8kQkimr9CwwnG6bZJWrwJ7lOvJ_cpfxrLn4xRjO7-2pLaM8haeMqO4q1emDRrDQcEQJZP24eLbx1AFE0yODcV_wZ_nFsel-x5YRtrau9x1XFj3BPi0j_wrVtkNP_j4RnpnHlAVURo97jjVsSa5edKjGvLrnnqPBX5oQOhhF14v0I0Z1_Du0yynltG84ShIWBPHIiOK2NmX-A5J49Eyh4z-RzsOBqIJAeAtIbEgyTEiDicYgY0xZIwUUGK_fr8Pij2dqjoyvW1GmOEF9nmP06Lyl_4io0vFdCUqXGrg13WixW0NN6DqshbTqBkgMo2lrVFW0ornV2f7boQC7iNv5phDGnzdAHStO-SWNLkOeZk4kLvD_hwVdguktWlIssJt8GWXZXUiFGR21pmsv6unZf9bLXt9iQBsk35bN6an5DjFA3bm41PlTdl_M_8rMNA2mKuYfj-HHLoFmBgWedi_dDLmheRKPXCqMlfAWb2UZoPHziudno0ZyUSjrwPnQ5FX_5wGWjPLczpDVKIJ-18CrcG_H8g5ZF67dpGpkXXjhJoNHEf9-gZJUaR3nfmqvNW6SYgX4rjtMo8SCEI9rEFbMm6vXgeKlU3SNFmRgKNkuvn3mceBpIIxt01EK1Cze8TFxsXWMN64lkia4kv9CpSDYvUPtKHrny1W3lRejmA1yw';

(async function getLocations() {
	const response = await fetch('https://api.jerpbd.com:8081/api/mobile/get-user-location-history/95632', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + token
		}
	});

	const data = await response.json();
	locations = data.location_history;
	initMap(locations);
})();

function initMap(locations = []) {
	if (locations.length) {
		console.log(locations);
	}
}

window.initMap = initMap;
