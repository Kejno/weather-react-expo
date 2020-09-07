import AsyncStorage from '@react-native-community/async-storage';
import React, { useState, useEffect } from 'react'
import { getCurrentLocation, getWeatherByCoords, ISOtoCountry } from './helpers'
import { weatherUrl, dateTemplate } from './constants';

export const MainContext = React.createContext()

export const MainProvider = ({ children }) => {

  const infoTemplate = {
    loading: false,
    city: "",
    country: "",
    temp: "",
    humidity: "",
    desc: "",
    icon: "",
    coord: "",
    date: "",
  }


  const [info, setInfo] = useState(infoTemplate)

  useEffect(() => {
    fetchAll()
  }, [])

  const fetchAll = async () => {

    setInfo({ ...infoTemplate, loading: true })

    const storageInfo = JSON.parse(await AsyncStorage.getItem('info'))
      ? JSON.parse(await AsyncStorage.getItem('info'))
      : []

    try {

      const currentLocation = await getCurrentLocation()
      const getWeather = await getWeatherByCoords(currentLocation, weatherUrl);

      const { name, sys, main, weather, coord } = getWeather;
      const fullNameCountry = await ISOtoCountry(sys.country);

      const fetchedInfo = {
        city: name,
        country: fullNameCountry[0].altSpellings[4],
        temp: Math.round(+main.temp),
        humidity: getWeather.main.humidity,
        desc: weather[0].description,
        icon: weather[0].icon,
        date: dateTemplate,
        coord: {
          lat: coord.lat,
          lon: coord.lon
        }
      }

      setInfo({ ...fetchedInfo, loading: false })

      storageInfo.unshift(fetchedInfo);

      AsyncStorage.setItem('info', JSON.stringify(storageInfo))

    } catch (err) {
      alert(err.message)
    } finally {
      console.log('FINAL')
    }
  }

  return (
    <MainContext.Provider value={info}>

      {children}
    </MainContext.Provider>
  )
}
