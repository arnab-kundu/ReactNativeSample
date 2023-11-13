/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import BezierLineChart from './pages/BezierLineChart';
import {name as appName} from './app.json';

//AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => BezierLineChart);
