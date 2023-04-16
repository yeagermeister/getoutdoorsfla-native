//   These need set to global so they can be exported and available throughout the app 
let latitude;
let longitude;

// Helper function to get coordinates.  These will be used to get distances for our site cards, and plot the lcoation on the map.
export function getLocation() {
    if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function(position) {
                latitude = position.coords.latitude;
                longitude = position.coords.longitude;
                console.log("Latitude: " + latitude + ", Longitude: " + longitude);
            },
            function(error) {
                if (error.code === error.PERMISSION_DENIED) {
                    alert('Please turn on location services for this site to function.  We are not sharing your coordinates with Big Brother.')
                }
            }
        );
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}

export {latitude, longitude};
