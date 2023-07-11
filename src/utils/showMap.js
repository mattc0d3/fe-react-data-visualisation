const showMap = (event) => {
    // const map = event.target.getElementsByClassName('map-container')[0]
    const map = event.target.querySelector("div.map-container")
    console.log(map, "<<<<< map")
    console.log(map.style.display, "<<<< map.style.display")
    if (map.style.display === "none" || !map.style.display) {
        console.log("entered if")
        map.style.display = "block";
      } else {
        map.style.display = "none";
      }
}

export default showMap