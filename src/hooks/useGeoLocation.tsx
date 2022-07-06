import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { cityLocation } from "../variables/cityLocation";

const options = {
  enableHighAccuracy: true,
  timeout: 6000,
  maximumAge: 0,
};

const locationDataDefault = {
  lat: "",
  lng: "",
  isError: false,
};
export const useGeoLocation = () => {
  const { pathname } = useLocation();

  const [locationData, setLocationData] = useState(locationDataDefault);

  const getGeoLocation = () => {
    navigator.geolocation.getCurrentPosition(success, error, options);

    // eslint-disable-next-line no-undef
    function success(position: GeolocationPosition) {
      const { latitude, longitude } = position.coords;

      setLocationData({
        ...locationData,
        lat: latitude.toFixed(2),
        lng: longitude.toFixed(2),
      });
    }

    function error() {
      setLocationData({
        ...locationData,
        isError: true,
      });
    }
  };

  useEffect(() => {
    setLocationData(locationDataDefault);
    switch (pathname) {
      case "/your-city":
        getGeoLocation();
        break;
      case "/new-york":
        setLocationData({
          ...locationData,
          ...cityLocation.newYork,

          // lat: cityLocation.newYork.lat,
          // lng: cityLocation.newYork.lng,
        });
        break;
      case "/paris":
        setLocationData({
          ...locationData,
          ...cityLocation.paris,
        });
        break;
      case "/tokio":
        setLocationData({
          ...locationData,
          ...cityLocation.tokio,
        });
        break;
      case "/pedralbes":
        setLocationData({
          ...locationData,
          ...cityLocation.pedralbes,
        });
        break;
      case "/bariloche":
        setLocationData({
          ...locationData,
          ...cityLocation.bariloche,
        });
        break;
      default:
        break;
    }
  }, [pathname]);

  return {
    locationData,
  };
};
