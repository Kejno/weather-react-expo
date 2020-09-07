export const getCurrentLocation = () =>
  new Promise((resolve, reject) => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude: lat, longitude: lon } = position.coords
        resolve({ lat, lon })
      }, (error) => reject(error));
    } else {
      reject('Not supported')
    }
  })

export const getWeatherByCoords = async ({ lat, lon }, urlData) => {
  const url = `${urlData}&lat=${lat}&lon=${lon}&units=metric&lang=ru`
  try {
    const json = await fetch(url)
    return (await json.json())
  } catch (error) {
    console.error(error)
  }
}

export const ISOtoCountry = async (country) => {
  try {
    const url = `https://restcountries.eu/rest/v2/name/${country}?fullText=true`;
    const res = await fetch(url);
    return (await res.json());
  } catch (error) {
    console.error(error)
  }
}
