export function someAction (/* context */) {
}

export function GET_DATA_SERVICEPOINT (context) {
    let myHeaders = new Headers();
    myHeaders.append("DHL-API-Key", process.env.YOUR_API_KEY);

    let requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    }
    let userLatitude = context.getters.getLocationUser[0];
    let userLongitude = context.getters.getLocationUser[1];
    fetch(
      `https://api.dhl.com/location-finder/v1/find-by-geo?latitude=${userLatitude}&longitude=${userLongitude}&locationType=servicepoint&radius=2500&limit=20`,
      requestOptions
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        context.commit("LOAD_COORDENADE_SERVICE_POINT",[data.locations[0].place.geo.latitude, data.locations[0].place.geo.longitude]);
        context.commit("LOAD_NAME_SERVICE_POINT",data.locations[0].name);
        context.commit("LOAD_OPEN_HOUR_SERVICE_POINT",data.locations[0].openingHours[0].opens);
        context.commit("LOAD_CLOSE_HOUR_SERVICE_POINT",data.locations[0].openingHours[0].closes);
        context.commit("LOAD_ADDRESS_SERVICE_POINT",data.locations[0].place.address.streetAddress);
        context.commit("LOAD_DISTANCE_SERVICE_POINT",data.locations[0].distance);
      });
  
}