
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Instagram from "./screens/Instagram";
import Facebook from "./screens/Facebook";
import { createAppContainer } from 'react-navigation';

export default class App extends React.Component {
  render(){
  return (
  <AppContainer/>
  );
}
}
var TabNavigator = createBottomTabNavigator({
  in:{screens:Instagram},
  fb:{screens:Facebook}
})
var AppContainer=createAppContainer(TabNavigator);
