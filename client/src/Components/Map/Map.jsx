import React, { useRef, useEffect, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import useStyles from './Map.js'
import Marker from '../Marker.jsx'

mapboxgl.accessToken =
  "pk.eyJ1IjoicmFtaXphY2thcnlzaGFtaXIiLCJhIjoiY2tjajRzMXA5MWMyczJybnFoMzB0cGFveiJ9.dJGkd1gcu3cPQ_l46OQT7w";

const Map = ({ longitude, latitude }) => {

  const [viewport, setViewport] = useState({
    latitude: latitude.toFixed(5),
    longitude: longitude.toFixed(5)
    
  })
  
  const [marker, setMarker] = useState({
    latitude: latitude.toFixed(5),
    longitude: longitude.toFixed(5),
  })
  

  const classes = useStyles()
  //useRefs to store references to the map  object and the map html element
  const mapContainerRef = useRef();
  
  //Initialize map when component mounts

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      // This is where the coordinates render to Map, e.g.:
      // center: [40.60942, -74.27337]
      center: [longitude, latitude]
    })
    setMarker(marker);
    setViewport(viewport);

    //Get location of user
    map.addControl(new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true
      },
      trackUserLocation: true
    }));
    
    //Add navigation control
    // map.addControl(new mapboxgl.NavigationControl(), "bottom-left")
    // map.on('move', () => {
    //   setState(map.getCenter().lng.toFixed(4));
    //   setState(map.getCenter().lat.toFixed(4));
    //   setState(map.getZoom().toFixed(2));
    // });

    //Clean up on unmount
    return () => map.remove();
  }, []);

  return (
    <div>
      <div className={classes.mapContainer} ref={mapContainerRef}>
        <Marker
          setMarker={marker}
          setViewport={viewport}
          longitude={longitude}
          latitude={latitude}
        />
        <div className={classes.sidebar}>
          <div>
            Longitude: {longitude} | Latitude: {latitude} | Zoom:{" "}
            {viewport.zoom}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Map;