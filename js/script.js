 function initMap() {
  alert('Welcom to Las Vegas');
        
        //var el = document.getElementById('canvas');
        // Add the 1st map location
        var lv = {lat: 36.1699, lng: -115.1398}
        
        // Set options for the map location
        var mapOptions = { 
          zoom: 10,
          center: lv,
          mapTypeControlOptions:{
          position: google.maps.ControlPosition.BOTTOM_CENTER
          }
        };

        // Add a new map 
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);


         const kenan = {
          url: "images/kenan.png",
          scaledSize: new google.maps.Size(32, 32)
          };


        // Add marker
        var luxor = {lat: 36.0955, lng: -115.1761}
        var marker = new google.maps.Marker({
        position: luxor,
        map: map
        icon: kenan,
        });

        // Add info for the marker
        var infoWindow = new google.maps.InfoWindow({
          content: '<h1> Luxor Resort & Casino </h1><p> Here is where I lived in my trip. </p>' 
        });

        marker.addListener('click', function(){
          infoWindow.open(map, marker);
        });
}

google.maps.event.addDomListener(window, 'load, init');



