import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';
import Geolocation from 'react-native-geolocation-service';

import { API_KEY } from './utils/WeatherAPIKey';
import Weather from './components/Weather';

export default function WeatherApp() {
  const [temperature, setTemperature] = useState(0)
  const [weather, setWeather] = useState('')
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
    console.log(lat);
    console.log(lon);
    try {
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`
      )
        .then(res => {
          console.warn("Status: " + res.status)
          console.warn("Body: " + res.body)
          res.json()
        })
        .then(json => {
          setTemperature(json.main.temp)
          setWeather(json.weather[0].main)
          
          console.warn(json);
          console.log("Response: " + json.main.temp);
          console.log("Response: " + json.weather[0].main);
        })
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchWeather(12.2, 12.34);
  }, {});

  return (
    <View style={styles.container}>
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Fetching The Weather</Text>
        </View>
      ) : (
        <Weather weather={weather} temperature={temperature} />
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
