// api 
// https:api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0
// https:api.nasa.gov/insight_weather/?api_key=XNujlaqZTxrTScokTMsEaL5Hc3Zelz9ROZiuRGHQ&feedtype=json&ver=1.0

const marsApi_key = "XNujlaqZTxrTScokTMsEaL5Hc3Zelz9ROZiuRGHQ";
const marsUrl = "https://api.nasa.gov/insight_weather/?api_key=" + marsApi_key + "&feedtype=json&ver=1.0";

const fetchMARSData = async () => {
    try {
      const response = await fetch(`${marsUrl}${marsApi_key}`)
      const data = await response.json()
      console.log('NASA MARS data', data)
      displayData(data)
    } catch (error) {
      console.log(error)
    }
  }

//   fetchMARSData()