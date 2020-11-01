
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import insta from "./screens/in";
import facebook from "./screens/fb";
import { createAppContainer } from 'react-navigation';

export default class App extends React.Component {
  render(){
  return (
  <AppContainer/>
  );
}
}
var TabNavigator = createBottomTabNavigator({
  in:{screens:insta},
  fb:{screens:facebook}
})
var AppContainer=createAppContainer(TabNavigator);
