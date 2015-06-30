function init_map() {
    var var_location = new google.maps.LatLng(17.468501, 78.367347);
 
        var var_mapoptions = {
          center: var_location,
          zoom: 17
        };
 
    var var_marker = new google.maps.Marker({
      position: var_location,
            map: var_map,
      title:"Train Gap, Sai Boda's Nilayam, Shilpa Park, Kondapur, Hyderabad-500084."});
 
        var var_map = new google.maps.Map(document.getElementById("map-container"),
            var_mapoptions);
 
    var_marker.setMap(var_map); 
 
}
google.maps.event.addDomListener(window, 'load', init_map);
 