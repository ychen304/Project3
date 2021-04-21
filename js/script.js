  function initMap() {

  // Add a mao for Las Vegas and set options
  const lv = {lat: 36.1699, lng: -115.1398}
  const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 10,
      center: lv,
    });
   
   // Add the icon 
  const beachflag =
      "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";
    
  // Add marker
  const marker = new google.maps.Marker({
      position: {lat: 36.0955, lng: -115.1761},
      map: map,
      icon: beachflag,
    });

  const infoWindow = new google.maps.InfoWindow({
  content: '<h1> Luxor Resort & Casino </h1><p> Here is where I lived in my trip. </p>' 
          });

          marker.addListener('click', function(){
            infoWindow.open(map, marker);
          });
  }

