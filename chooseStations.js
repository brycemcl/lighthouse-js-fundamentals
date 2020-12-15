const filterStations = (arrayToFilter) => {
  return arrayToFilter.filter(station => (station[1] >= 20 && ((station[2] === "school") || (station[2] === "community centre"))))
}
const mapStations = (arrayToMap) => {
  return arrayToMap.map(station => (station[0]))
}
const chooseStations = (arrayToChoose) => {
  return mapStations(filterStations(arrayToChoose))
}


const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

console.log(chooseStations(stations));