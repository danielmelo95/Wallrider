//var myLatlng = new google.maps.LatLng(-25.363882,131.044922);
var myLatLng = {lat: 48.152074, lng: 17.073362};
var map;
var infowindow;
var transport_type;
function myMap() {
    var mapProp= {
        center:new google.maps.LatLng(myLatLng),
        zoom:16,
    };
    map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

    // SET INFOWINDOW FOR FEI STU
    var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h3>Fakulta elektrotechniky a informatiky Slovenskej technickej univerzity v Bratislave</h3>'+
        '<div>'+
        '<p>Geografická šírka: 48.152074 <br>'+
        'Geografická dĺžkla: 17.073362 </p>'+
        '</div>';
    //SHOW INFOWINDOW FOR FEI STU
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });
    //CREATE AND FILL MARKER FOR FEI STU
    var marker = new google.maps.Marker({
        label: {
            color: 'black',
            fontWeight: 'bold',
            text: 'FEI STU'
            },
        position: myLatLng,
        map: map,
        title:"FEI STU"
    });
    //ONLCLICK FOR MARKER -> SHOW CONTENT THAT WAS SET EARLIER
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
    //SET REQUEST FOR MARKER 1000M AROUND MARKED POSITION
    var request = {
        location: myLatLng,
        radius: '1000',
        type: ['transit_station']
    };
    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, callback);

    //AUTOCOMPLETE FOR PLACE SEARCH
    var input = document.getElementById('pac-input');
    var autocomplete = new google.maps.places.Autocomplete(input);
    //DIRECTIONS VARS
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;
    directionsDisplay.setMap(map);


    var onChangeHandler = function() {
        calculateAndDisplayRoute(directionsService, directionsDisplay, place, newLatLng, document.getElementById('type_of_transport').value);
        transport_type = document.getElementById('type_of_transport').value;
        service.getDistanceMatrix(
            {
                origins: [newLatLng],
                destinations: [myLatLng],
                travelMode: transport_type
            }, callback1);
    };
    var place;
    var newLatLng;
    var service = new google.maps.DistanceMatrixService();

  /*  service.getDistanceMatrix(
        {
            origins: [newLatLng],
            destinations: [myLatLng],
            travelMode: 'DRIVING'
        }, callback);
*/
    document.getElementById('type_of_transport').addEventListener('change', onChangeHandler);

    autocomplete.bindTo('bounds', map);
    autocomplete.addListener('place_changed', function() {
        infowindow.close();
        //marker.setVisible(false);
        place = autocomplete.getPlace();
        newLatLng = new google.maps.LatLng(place.geometry.location.lat(), place.geometry.location.lng());

        //console.log(place.name+"   "+ newLatLng);
        if (!place.geometry) {
            // User entered the name of a Place that was not suggested and
            // pressed the Enter key, or the Place Details request failed.
            window.alert("No details available for input: '" + place.name + "'");
            return;
        }

        // If the place has a geometry, then present it on a map.
        if (place.geometry.viewport) {
            map.fitBounds(place.geometry.viewport);
        } else {
            map.setCenter(place.geometry.location);
            map.setZoom(17);  // Why 17? Because it looks good.
        }

    });

}

function calculateAndDisplayRoute(directionsService, directionsDisplay, place,latlng, type_of_t) {
    directionsService.route({
        origin: myLatLng,
        destination: place.name,
        travelMode: type_of_t
    }, function(response, status) {
        if (status === 'OK') {
            directionsDisplay.setDirections(response);
           // alert(google.maps.geometry.spherical.computeDistanceBetween ( new google.maps.LatLng(48.152074, 17.073362), latlng)/1000);
        } else {
            window.alert('Directions request failed due to ' + status);
        }
    });
}

function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
            var plsace = results[i];
            createMarker(results[i]);
        }
    }
}

function createMarker(place) {
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location
    });

    /*google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(place.name);
        infowindow.open(map, this);
    });*/
    var panorama = new google.maps.StreetViewPanorama(
        document.getElementById('pano'), {
            position: myLatLng,
            pov: {
                heading: 34,
                pitch: 10
            }
        });
    map.setStreetView(panorama);

}

function callback1(response, status) {
    if (status == 'OK') {
        var origins = response.originAddresses;
        var destinations = response.destinationAddresses;

        for (var i = 0; i < origins.length; i++) {
            var results = response.rows[i].elements;
            console.log(results);
            for (var j = 0; j < results.length; j++) {
                var element = results[j];
                var distance = element.distance.text;
                var duration = element.duration.text;
                var from = origins[i];
                var to = destinations[j];
            }
        }
        document.getElementById('distance_div').innerHTML ="Vzdialenosť: "+distance+"<br>Doba cestovania: "+duration;

        //alert(distance);
    }
}