/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';

import Charts from './pages/Charts';
import GetApiCall from './pages/networking/GetApiCall';
import PostApiCall from './pages/networking/PostApiCall';

import SampleLoginScreen from './screens/SampleLoginScreen';

import {name as appName} from './app.json';

//AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => Charts);
AppRegistry.registerComponent(appName, () => GetApiCall);
//AppRegistry.registerComponent(appName, () => PostApiCall);

//AppRegistry.registerComponent(appName, () => SampleLoginScreen);
