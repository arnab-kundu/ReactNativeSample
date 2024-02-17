import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';
import Geolocation from 'react-native-geolocation-service';

import { API_KEY } from './utils/WeatherAPIKey';
import Weather from './components/Weather';

export default function WeatherApp() {
  const [temperature, setTemperature] = useState(0)
  const [weather, setWeather] = useState('')
  const [icon, setIcon] = useState('')
  const [isLoading, setLoading] = useState(true)

  function componentDidMount() {
    Geolocation.getCurrentPosition(
      position => {
        this.fetchWeather(position.coords.latitude, position.coords.longitude);
      },
      error => {
        console.log(error);
        this.setState({
          error: 'Error Getting Weather Condtions',
          isLoading: false
        });
      }
    );
  }

  const fetchWeather = async (lat, lon) => {
    console.log(`lat: ${lat}, lon: ${lon}`);
    try {
      const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`)
      const responseJson = await response.json()
      const formattedJson = JSON.stringify(responseJson, null)
      console.log("Response: " + formattedJson)
      console.log("Response: Temperature: " + responseJson.main.temp)
      console.log("Response: Sky: " + responseJson.weather[0].main)
      console.log("Response: Icon: " + responseJson.weather[0].icon)
      setTemperature(responseJson.main.temp)
      setWeather(responseJson.weather[0].main)
      setIcon(responseJson.weather[0].icon)

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchWeather(22.6440364,88, 3040141,11);
  }, {});

  return (
    <View style={styles.container}>
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Fetching The Weather</Text>
        </View>
      ) : (
        <Weather weather={weather} temperature={temperature} icon={icon} />
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
