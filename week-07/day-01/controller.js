/// Functions dealing with both Data Model and User Interface ///
  var Controller = (function(){

   function hanldeMarkerClickEvent(clickEvent) {
    var latitude = View.getLatitude(clickEvent);
    var longitude = View.getLongitude(clickEvent);
    var markerId = Model.createMarkerId(latitude, longitude);
    var boxId = Model.createMarkerId(latitude,longitude);
    var marker = Model.getMarkerById(markerId); 
    View.removeMarkerFromTheMap(marker.marker);
    Model.removeMarkerFromModel(markerId);
    View.removeBox(boxId);
  }



  function handleSubmitEvent(submitEvent) {
    submitEvent.preventDefault();
    var latitude = View.getLatitudeFromInputElement();
    var longitude = View.getLongitudeFromInputElement();
    var description = View.getDescriptionFromInputElement();
    var googleMapsMarker = View.createMarkerOnTheMap(View.getMap(), latitude, longitude, hanldeMarkerClickEvent);
    var markerId = Model.createMarkerId(latitude, longitude);
    View.createPositionBoxElement(latitude, longitude, markerId);
    Model.addMarkerToTheModel(markerId, {
      latitude: latitude,
      longitude: longitude,
      description: description,
      marker: googleMapsMarker
    });
  }

  function inIt(){
    View.createMap();
    View.listenToTheSubmitEventOnFormElement(handleSubmitEvent);
  }

  return {
    hanldeMarkerClickEvent:hanldeMarkerClickEvent,
    inIt: inIt
  };

  })();

  