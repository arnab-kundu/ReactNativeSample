/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';

import Charts from './pages/Charts';
import GetApiCall from './pages/networking/GetApiCall';
import PostApiCall from './pages/networking/PostApiCall';
import WeatherApp from './pages/weather/WeatherApp';
//import SampleLoginScreen from './screens/SampleLoginScreen';
import DatabaseApp from './database/SqliteDatabaseApp';
//import StackNavigationApp from './StackNavigationApp';
import { TrainStatusApp } from './pages/networking/TrainStatusApp';
import { ImageZoomApp } from './pages/zoom/ImageZoomApp';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => Charts);
AppRegistry.registerComponent(appName, () => GetApiCall);
AppRegistry.registerComponent(appName, () => PostApiCall);
AppRegistry.registerComponent(appName, () => WeatherApp);
AppRegistry.registerComponent(appName, () => DatabaseApp);
AppRegistry.registerComponent(appName, () => TrainStatusApp);
//AppRegistry.registerComponent(appName, () => ImageZoomApp);
//AppRegistry.registerComponent(appName, () => StackNavigationApp);

//AppRegistry.registerComponent(appName, () => SampleLoginScreen);
