import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import CityList from './CityList';


const AppNavigator = createStackNavigator({
  Home: {
    screen: CityList
  }
});

export default createAppContainer(AppNavigator);
/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Constants.statusBarHeight,
  },

  item: {
    flex: 1,
    height: 50,
    justifyContent: 'center',

    borderWidth: 1,
    borderColor: 'orange',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  }
});*/