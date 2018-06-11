const PUBLIC_KEY = "&key=MW9S-E7SL-26DU-VV8V";
const BASE_URI = "http://api.bart.gov/api/";
const JSON_KEY = "&json=y";


export const getStations = function () {
  const fullPath = BASE_URI + "stn.aspx?cmd=stns" + PUBLIC_KEY + JSON_KEY;
  let value = fetch(fullPath);
  return (value);
};
