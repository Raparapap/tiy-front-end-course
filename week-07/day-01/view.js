var View = (function view(){
	var map;
/// Functions dealing with UI > to be exported to a .js file ///
  function getMap(){
  	return map;
  }

  function createMap() {
    map = new google.maps.Map(document.querySelector('[data-js-map]'), {
      center: {
        lat: 51.50,
        lng: 0.12
      },
      zoom: 2
    });
  }
  
  function getLatitude(mapEvent){
  	return mapEvent.latLng.lat();
  }

  function getLongitude(mapEvent){
  	return mapEvent.latLng.lng();
  }

  function getLatitudeFromInputElement(){
  	return $('[data-js-latitude-input]').val();
  }

  function getLongitudeFromInputElement(){
  	return $('[data-js-longitude-input]').val()
  }

  function getDescriptionFromInputElement(){
  	return $('[data-js-description]').val();
  }
  function removeMarkerFromTheMap(marker) {
    marker.setMap(null);
  }

  function listenToTheSubmitEventOnFormElement(handleEvent){
  	$('form').on('submit', handleEvent);
  }

  function createMarkerOnTheMap(map, latitude, longitude, hanldeMarkerClickEvent) {
    var marker = new google.maps.Marker({
      position: {
        lat: parseFloat(latitude),
        lng: parseFloat(longitude)
      },
      map: map
    });
    marker.addListener('click', hanldeMarkerClickEvent);
    return marker;
  }

  function createPositionBoxElement(latitude,longitude,boxId){
    var source = $("#box-template").html();
    var template = Handlebars.compile(source);
    var context = {
      boxId: boxId
    };
    var html = template(context);
  $('form').after(html);
  }

  function removeBox(boxId) {
  $('[data-box-id="' + boxId + '"]').remove();
  }

  $(function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 10,
      values: [ 0, 10 ],
      slide: function( event, ui ) {
        $( "#rating" ).val(ui.values[ 0 ] + " - " + ui.values[ 1 ] );
      }
    });
    $( "#rating" ).val($( "#slider-range" ).slider( "values", 0 ) +
      " - " + $( "#slider-range" ).slider( "values", 1 ) );
  });

  return {
  	createMap: createMap,
  	removeMarkerFromTheMap: removeMarkerFromTheMap,
  	createMarkerOnTheMap: createMarkerOnTheMap,
  	createPositionBoxElement: createPositionBoxElement,
  	removeBox: removeBox,
  	getMap: getMap,
  	getLatitude: getLatitude,
  	getLongitude: getLongitude,
  	getLatitudeFromInputElement: getLatitudeFromInputElement,
  	getLongitudeFromInputElement: getLongitudeFromInputElement,
  	getDescriptionFromInputElement: getDescriptionFromInputElement,
  	listenToTheSubmitEventOnFormElement: listenToTheSubmitEventOnFormElement
  }

})();