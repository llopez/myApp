var app = {
  initialize: function() {
    this.bindEvents();
  },
  bindEvents: function() {
    document.addEventListener('deviceready', this.onDeviceReady, false);
  },
  onDeviceReady: function() {
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 17,
      disableDefaultUI: true
    });
    var marker = new google.maps.Marker({
      map: map
    });
    navigator.geolocation.watchPosition(function(p){
      var point = {lat: p.coords.latitude, lng: p.coords.longitude};
      map.panTo(point);
      marker.setPosition(point);
    }, function(){});
  }
};
