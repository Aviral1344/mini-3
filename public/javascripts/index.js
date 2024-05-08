mapboxgl.accessToken =
  "pk.eyJ1IjoiYXZpMTM0NCIsImEiOiJjbHY3eGIwcHIwYzE5MmxxaWwyMzFlcnN2In0.ssp6nnC-NbtxSad_qIaKfw";

data = [
    [25.4927569,81.8611763,"Ganga Gate"],
    [25.4927798,81.8615855,"STPI Gate"],
    [25.4936128,81.8620892,"Administrative Building"],
    [25.49405,81.8616381,"Mnnit Logo"],
    [25.4936284,81.8627548,"Academic Building"],
    [25.4943278,81.862803,"Biotech Area"],
    [25.4943241,81.8623851,"Yamuna Cafe"],
    [25.4943111,81.8616742,"Yamuna Gate"],
    [25.4926551,81.862706,"The Wall"],
    [25.4923845,81.8627534,"Dean Academic"],
    [25.492109,81.8627611,"Design Centre"],
    [25.4917447,81.86277,"Computer Centre"],
    [25.4910001,81.8627484,"SVBH Gate"],
    [25.4910559,81.8633791,"Computer Department"],
    [25.490954,81.8637774,"P.G. Girl Hostel"],
    [25.490831,81.8643536,"SMS"],
    [25.4918483,81.8652504,"NCC Building"],
    [25.491872,81.8660697,"Dewsis Cafe"],
    [25.4922581,81.8663925,"M.P. Hall"],
    [25.4929065,81.8664154,"Gymkhana Ground"],
    [25.494265,81.8663642,"Boys Hostel Underpass"],
    [25.4942795,81.8658614,"COURT 97"],
    [25.4943038,81.8646349,"Atheletics Ground"],
    [25.4941223,81.8646656,"WORKSHOP LAB"],
    [25.4932948,81.8646531,"Electrical Department Gate"],
    [25.4926427,81.8646301,"I LOVE MNNIT"],
    [25.4922781,81.8646058,"CAFE 96"],
    [25.4926561,81.8642658,"CENTRAL LIBRARY"],
    [25.4926716,81.8635362,"South Gate Academic Area"],
    [25.4942251,81.8673497,"Tilak Hostel Park"],
    [25.493726,81.86808,"PATEL GATE"],
    [25.494488,81.8679231,"Tilak Hostel"],
    [25.4947895,81.8684968,"Malviya Hostel"],
    [25.4948826,81.8676815,"SAC"],
    [25.4952753,81.8677309,"Tandon Hostel"],
    [25.4961732,81.8685826,"New Hostel"],
    [25.4963879,81.8681097,"Tandon Gate"]
]

scenes = {
  'Ganga Gate' : {"type": "equirectangular", "panorama": "./images/Ganga Gate.jpg","autoLoad" : true},

  'STPI Gate' : {"type": "equirectangular", "panorama": "./images/STPI Gate.jpg","autoLoad" : true}, 

  'Administrative Building'  : {"type": "equirectangular", "panorama": "./images/Administrative Building.jpg","autoLoad" : true}, 

  'Mnnit Logo' : {"type": "equirectangular", "panorama": "./images/Mnnit Logo.jpg","autoLoad" : true},

  'Academic Building' : {"type": "equirectangular", "panorama": "./images/Academic Building.jpg","autoLoad" : true},

  'Biotech Area' : {"type": "equirectangular", "panorama": "./images/Biotech Area.jpg","autoLoad" : true},

  'Yamuna Cafe' : {"type": "equirectangular", "panorama": "./images/Yamuna Cafe.jpg","autoLoad" : true},

  'Yamuna Gate' : {"type": "equirectangular", "panorama": "./images/Yamuna Gate.jpg","autoLoad" : true},

  'The Wall' : {"type": "equirectangular", "panorama": "./images/The Wall.jpg","autoLoad" : true},

  'Dean Academic' : {"type": "equirectangular", "panorama": "./images/Dean Academic.jpg","autoLoad" : true},

  'Design Centre' : {"type": "equirectangular", "panorama": "./images/Design Centre.jpg","autoLoad" : true},

  'Computer Centre' : {"type": "equirectangular", "panorama": "./images/Computer Centre.jpg","autoLoad" : true},

  'SVBH Gate' : {"type": "equirectangular", "panorama": "./images/SVBH Gate.jpg","autoLoad" : true,"hotSpots": [
    {
        "pitch": 0,
        "yaw": 60,
        "type": "info",
        "text": "Computer Science Department",
        "clickHandlerFunc": function() {changePanorama("Computer Department");}
    }
  ]},

  'Computer Department' : {"type": "equirectangular", "panorama": "./images/Computer Department.jpg","autoLoad" : true, "hotSpots": [
    {
        "pitch": 15,
        "yaw": 180,
        "type": "info",
        "text": "Swami Vivekanand Boys Hostel",
        "clickHandlerFunc": function() {changePanorama("SVBH Gate");}
    }
]},

  'P.G. Girl Hostel' : {"type": "equirectangular", "panorama": "./images/P.G. Girl Hostel.jpg", "autoLoad":true},

  'SMS' : {"type": "equirectangular", "panorama": "./images/SMS.jpg","autoLoad" : true},

  'NCC Building' : {"type": "equirectangular", "panorama": "./images/NCC Building.jpg","autoLoad" : true},

  'Dewsis Cafe' : {"type": "equirectangular", "panorama": "./images/Dewsis Cafe.jpg","autoLoad" : true},

  'M.P. Hall' : {"type": "equirectangular", "panorama": "./images/M.P. Hall.jpg","autoLoad" : true},

  'Gymkhana Ground' : {"type": "equirectangular", "panorama": "./images/Gymkhana Ground.jpg","autoLoad" : true},

  'Boys Hostel Underpass' : {"type": "equirectangular", "panorama": "./images/Boys Hostel Underpass.jpg","autoLoad" : true, hotSpots : [
    {
      "pitch": 0,
      "yaw": 0,
      "type": "scene",
      "text": "court 97",
      "clickHandlerFunc": function() {changePanorama("COURT 97");}
    },
    {
      "pitch": 0,
      "yaw": 180,
      "type": "scene",
      "text": "Tilak Hostel Park",
      "clickHandlerFunc": function() {changePanorama("Tilak Hostel Park");}
    },
    {
      "pitch": -2,
      "yaw": -85,
      "type": "scene",
      "text": "Gymkhana Ground",
      "clickHandlerFunc": function() {changePanorama("Gymkhana Ground");}
    }
  ]},

  'COURT 97' : {"type": "equirectangular", "panorama": "./images/COURT 97.jpg","autoLoad" : true, "hotSpots": [
    {
      "pitch": 0,
      "yaw": 195,
      "type": "scene",
      "text": "Boys Underpass",
      "clickHandlerFunc": function() {changePanorama("Boys Hostel Underpass");}
    },
    {
      "pitch": -2,
      "yaw": 15,
      "type": "scene",
      "text": "Athletics Ground",
      "clickHandlerFunc": function() {changePanorama("Atletics Ground");}
    },
  ]},

  'Atheletics Ground' : {"type": "equirectangular", "panorama": "./images/Atheletics Ground.jpg","autoLoad" : true},

  'WORKSHOP LAB' : {"type": "equirectangular", "panorama": "./images/WORKSHOP LAB.jpg","autoLoad" : true},

  'Electrical Department Gate' : {"type": "equirectangular", "panorama": "./images/Electrical Department Gate.jpg","autoLoad" : true},

  'I LOVE MNNIT' : {"type": "equirectangular", "panorama": "./images/I LOVE MNNIT.jpg","autoLoad" : true},

  'CAFE 96' : {"type": "equirectangular", "panorama": "./images/CAFE 96.jpg","autoLoad" : true},

  'CENTRAL LIBRARY' : {"type": "equirectangular", "panorama": "./images/CENTRAL LIBRARY.jpg","autoLoad" : true},

  'South Gate Academic Area' : {"type": "equirectangular", "panorama": "./images/South Gate Academic Area.jpg","autoLoad" : true},

  'Tilak Hostel Park' : {"type": "equirectangular", "panorama": "./images/Tilak Hostel Park.jpg","autoLoad" : true, "hotSpots": [
    {
      "pitch": -15,
      "yaw": -55,
      "type": "scene",
      "text": "Student Activity Center",
      "clickHandlerFunc": function() {changePanorama("SAC");}
    },
    {
      "pitch": -1,
      "yaw": 32,
      "type": "scene",
      "text": "Patel Gate",
      "clickHandlerFunc": function() {changePanorama("PATEL GATE");}
    },
    {
      "pitch": 2,
      "yaw": 192,
      "type": "scene",
      "text": "Boys Underpass",
      "clickHandlerFunc": function() {changePanorama("Boys Hostel Underpass");}
    },
  ]},

  'PATEL GATE' : {"type": "equirectangular", "panorama": "./images/PATEL GATE.jpg","autoLoad" : true, "hotSpots": [
    {
      "pitch": -10,
      "yaw": 0,
      "type": "scene",
      "text": "Tilak Hostel Park",
      "clickHandlerFunc": function() {changePanorama("Tilak Hostel Park");}
    }
  ]},

  'Tilak Hostel' : {"type": "equirectangular", "panorama": "./images/Tilak Hostel.jpg","autoLoad" : true},

  'Malviya Hostel' : {"type": "equirectangular", "panorama": "./images/Malviya Hostel.jpg","autoLoad" : true,"hotSpots": [
    {
        "pitch": -15,
        "yaw": 10,
        "type": "scene",
        "text": "Tandon Hostel",
        "clickHandlerFunc": function() {changePanorama("Tandon Hostel");}
    }
  ]},

  'SAC' : {"type": "equirectangular", "panorama": "./images/SAC.jpg","autoLoad" : true,"hotSpots": [
    {
      "pitch": 7,
      "yaw": 160,
      "type": "scene",
      "text": "Tandon Hostel",
      "clickHandlerFunc": function() {changePanorama("Tandon Hostel");}
    },
    {
      "pitch": -10,
      "yaw": -60,
      "type": "scene",
      "text": "Tilak Hostel",
      "clickHandlerFunc": function() {changePanorama("Tilak Hostel");}
  },
  {
    "pitch": -4,
    "yaw": 5,
    "type": "scene",
    "text": "Towards Campus",
    "clickHandlerFunc": function() {changePanorama("Tilak Hostel Park");}
  }
  ]},

  'Tandon Hostel' : {"type": "equirectangular", "panorama": "./images/Tandon Hostel.jpg","autoLoad" : true,"hotSpots": [
    {
        "pitch": 12,
        "yaw": 188,
        "type": "scene",
        "text": "Malviya Hostel",
        "clickHandlerFunc": function() {changePanorama("Malviya Hostel");}
    },
    {
      "pitch": 0,
      "yaw": 270,
      "type": "scene",
      "text": "SAC",
      "clickHandlerFunc": function() {changePanorama("SAC");}
  }
  ]},

  'New Hostel' : {"type": "equirectangular", "panorama": "./images/New Hostel.jpg","autoLoad" : true,"hotSpots": [
    {
        "pitch": 10,
        "yaw": 190,
        "type": "scene",
        "text": "Tandon Gate",
        "clickHandlerFunc": function() {changePanorama("Tandon Gate");}
    }
  ]},

  'Tandon Gate' : {"type": "equirectangular", "panorama": "./images/Tandon Gate.jpg","autoLoad" : true,"hotSpots": [
    {
        "pitch": 0,
        "yaw": 240,
        "type": "info",
        "text": "New Hostel",
        "clickHandlerFunc": function() {changePanorama("New Hostel");}
    }
  ]}
}



var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/satellite-v9", // Satellite map style
  center: [81.86275619216651, 25.492636748260814], // Centered on MNNIT Allahabad (example coordinates)
  zoom: 17, // Adjust the initial zoom level as needed
  minZoom: 17, // Set the minimum zoom level
  maxZoom: 20, // Set the maximum zoom level
  showAttribution: false
});


const popup = new mapboxgl.Popup({
  closeButton: false,
  closeOnClick: false,
});


// Add markers for each coordinate
data.forEach((coordinate) => {
  var lng = coordinate[1];
  var lat = coordinate[0];
  var locationName = coordinate[2];

  var marker = new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map);

  marker.getElement().addEventListener("mouseenter", function (e) {
    // Change the cursor style as a UI indicator.
    map.getCanvas().style.cursor = "pointer";


    // Populate the popup and set its coordinates based on the marker.
    popup.setLngLat([lng , lat + 0.0001]).setHTML(locationName).addTo(map);
  });

  
  marker.getElement().addEventListener("mouseleave", function () {
    map.getCanvas().style.cursor = "";
    popup.remove();
  });

  // Add click event listener to each marker
  marker.getElement().addEventListener("click", function () {
    /*
    var panorama = new google.maps.StreetViewPanorama(
      document.getElementById("street-view"),
      {
        position: { lat: lat, lng: lng },
        pov: { heading: 165, pitch: 0 }, // Set the heading and pitch of the panorama
        zoom: 1, // Adjust the zoom level of the panorama
      }
    );
    */
  
    document.getElementById("myNav").style.width = "100%";
    pannellum.viewer('panorama', scenes[locationName]);
  });
});

const pano = document.getElementById("panorama")

function changePanorama(locationName) {
  pano.innerHTML= ` `
  pannellum.viewer('panorama', scenes[locationName]);
}

const close = document.getElementById("closer");
close.addEventListener('click', ()=> {
    pano.innerHTML= ` `
    document.getElementById("myNav").style.width = "0%";
});

function changeMapStyle(style) {
  map.setStyle("mapbox://styles/mapbox/" + style);
}

// document.getElementById('satellite-btn').addEventListener('click', function() {
//     changeMapStyle('satellite-v9');
// });

document.getElementById("dark-btn").addEventListener("click", function () {
  changeMapStyle("dark-v10");
});

document.getElementById("outdoors-btn").addEventListener("click", function () {
  changeMapStyle("outdoors-v11");
});

document
  .getElementById("satellite-streets-btn")
  .addEventListener("click", function () {
    changeMapStyle("satellite-streets-v11");
  });
