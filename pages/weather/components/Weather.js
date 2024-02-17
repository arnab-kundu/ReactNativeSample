import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import PropTypes from 'prop-types';
import { weatherConditions } from '../utils/WeatherConditions';

const Weather = ({ weather, temperature, icon }) => {
  if (weather != null) {
    return (
      <View style={[styles.weatherContainer, { backgroundColor: weatherConditions[weather].color }]}>
        <View style={styles.headerContainer}>
          <Image style={styles.tinyLogo} source={{ uri: 'https://openweathermap.org/img/w/'+icon+'.png' }} />
          <Text style={styles.tempText}>{temperature}˚</Text>
        </View>
        <View style={styles.bodyContainer}>
          <Text style={styles.title}>{weatherConditions[weather].title}</Text>
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
  tempText: {
    fontSize: 72,
    color: '#fff'
  },
  bodyContainer: {
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 25,
    marginBottom: 40
  },
  title: {
    fontSize: 60,
    color: '#fff'
  },
  subtitle: {
    fontSize: 24,
    color: '#fff'
  },
  tinyLogo: {
    padding: 90,
    width: 72,
    height: 72,
  },
});

export default Weather;