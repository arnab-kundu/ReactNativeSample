import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';
import Geolocation from 'react-native-geolocation-service';

import { API_KEY } from './utils/WeatherAPIKey';
import Weather from './components/Weather';

import { PermissionsAndroid } from 'react-native';

export default function WeatherApp() {
  const [temperature, setTemperature] = useState({})
  const [weather, setWeather] = useState('')
  const [icon, setIcon] = useState('')
  const [countryCode, setCountryCode] = useState('')
  const [isLoading, setLoading] = useState(true)

  function fetchLatlon() {
    console.log('fetchLatlon()');
    Geolocation.getCurrentPosition(
      async position => {
        console.log(position.coords);
        fetchWeather(position.coords.latitude, position.coords.longitude);
      },
      error => {
        console.log(error);
        this.setState({
          error: 'Error Getting Weather Conditions',
          isLoading: false
        });
      }
    );
  }


  const fetchWeather = async (lat, lon, units = 'metric') => {
    console.log(`lat: ${lat}, lon: ${lon}`);
    try {
      const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=${units}`)
      const responseJson = await response.json()
      const formattedJson = JSON.stringify(responseJson, null, 4)
      console.log("Response: " + formattedJson)
      console.log("Response: Temperature: " + responseJson.main.temp)
      console.log("Response: Sky: " + responseJson.weather[0].main)
      console.log("Response: Icon: " + responseJson.weather[0].icon)
      console.log("Response: CountryCode: " + responseJson.sys.country)
      setTemperature(responseJson.main)
      setWeather(responseJson.weather[0].main)
      setIcon(responseJson.weather[0].icon)
      setCountryCode(responseJson.sys.country)

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  // useEffect(() => {
  //   fetchWeather(22.6440364, 88.56, 'imperial');
  // }, []);

  // useEffect(() => {
  //   fetchWeather(22.6440364, 88.56);
  // }, []);

  useEffect(() => {
    fetchLatlon()
  }, [])

  PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    {
      title: "Location Accessing Permission",
      message: "App needs access to your location",
    }
  );

  return (
    <View style={styles.container}>
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Fetching The Weather</Text>
        </View>
      ) : (
        <Weather weather={weather} temperature={temperature} icon={icon} countryCode={countryCode} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFDE4'
  },
  loadingText: {
    fontSize: 30
  }
});
