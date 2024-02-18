import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import PropTypes from 'prop-types';
import { weatherConditions } from '../utils/WeatherConditions';

const Weather = ({ weather, temperature, icon, countryCode }) => {
  if (weather != null) {
    return (
      <View style={[styles.weatherContainer, { backgroundColor: weatherConditions[weather].color }]}>
        <View style={styles.headerContainer}>
          <Image style={styles.weatherConditionIcon} source={{ uri: `https://openweathermap.org/img/w/${icon}.png` }} />
          <Text style={styles.tempText}>{temperature.temp}˚C</Text>
        </View>

        <View style={styles.header2Container}>
          <Text style={styles.tempMinMax}>{temperature.temp_min}˚C - {temperature.temp_max}˚C</Text>
          <Text style={styles.tempMinMax}>{temperature.humidity}%</Text>
        </View>

        <View style={styles.bodyContainer}>
          <View style={styles.flagContainer}>
            <Text style={styles.title}>{weatherConditions[weather].title}</Text>
            <Image style={styles.countryFlagImage} source={{ uri: `https://flagsapi.com/${countryCode}/flat/64.png` }} />
          </View>
          <Text style={styles.subtitle}>{weatherConditions[weather].subtitle}</Text>
        </View>
      </View>
    );
  } else {
    return (
      <View>
        <Text>Oh no, something went wrong</Text>
      </View>
    )
  };
};

Weather.propTypes = {
  weather: PropTypes.string,
  temperature: PropTypes.number.isRequired
};

const styles = StyleSheet.create({
  weatherContainer: {
    flex: 1
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  header2Container: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    paddingRight: 25,
  },
  tempText: {
    fontSize: 72,
    paddingEnd: 25,
    color: '#fff'
  },
  tempMinMax: {
    fontSize: 20,
    color: '#EEE'
  },
  bodyContainer: {
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 25,
    marginBottom: 40
  },
  flagContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 60,
    flex: 1,
    color: '#fff',

  },
  subtitle: {
    fontSize: 24,
    color: '#fff'
  },
  weatherConditionIcon: {
    padding: 80,
    width: 72,
    height: 72,
  },
  countryFlagImage: {
    width: 64,
    height: 64,
    marginEnd: 25,
  },
});

export default Weather;
