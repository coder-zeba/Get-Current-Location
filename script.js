function getInfo(){
    // console.log("button clicked")
    navigator.geolocation.getCurrentPosition(success,error)
}

function success(cp){
        lat = cp.coords.latitude
        lon = cp.coords.longitude
        
        console.log(lat)
        console.log(lon)
        // document.getElementById("gtmap").href=`https://www.google.com/maps/@${lat},${lon}`
        document.getElementById("gtInfo").href=`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`

        getLocationInfo(lat,lon)
}

function error(){
    console.log("Getting Error!")
}

async function getLocationInfo(lat,lon) { 
    const url = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        // document.getElementById('display').textContent=data.address.city
        document.getElementById('display').textContent=data.display_name
    } catch (error) {
        console.error('Error fetching weather:', error);
        alert('Failed to fetch data.');
    }
}