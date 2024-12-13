function initMap() {
    // Crea el mapa centrado en una ubicación inicial
    var map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 15.502963462774886, lng: -88.04743771678436 },
      zoom: 12
    });
  
    // Carga los datos del archivo JSON y coloca los marcadores
    fetch('CoordenadasGooglemaps.json')
      .then(response => response.json())
      .then(data => {
        data.forEach(function(location) {
          new google.maps.Marker({
            position: { lat: location.lat, lng: location.lng },
            map: map,
            title: location.name
          });
        });
      })
      .catch(error => console.error('Error al cargar el archivo JSON:', error));
  }
  

  
  
  
  