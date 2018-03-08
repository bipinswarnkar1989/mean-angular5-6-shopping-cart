import React, { Component } from 'react';
import { DrawerNavigator, DrawerItems,  } from 'react-navigation';
import MainScreen from './MainScreen';
import {
    View,
    Text,
    StyleSheet,
    Dimensions
    } from 'react-native';

class CustomDrawerContentComponent extends Component {
    render(){
        return (
            <View>
               <Text>Drawer</Text>
            </View>
        )
    }
}

const AppNavigator = DrawerNavigator({
    MainScreen:{ 
        screen: MainScreen 
    },

},
{
    initialRouteName:'MainScreen',
    contentComponent: props => <CustomDrawerContentComponent {...props}/>,
    contentOptions: {
        activeBackgroundColor: '#f7f7f7',
        activeTintColor: '#7b7b7b',
        inactiveTintColor : '#7b7b7b',
        labelStyle: {
            fontSize: 16,
            fontWeight: '500',
            fontFamily: 'AvenirNext-Regular'
        },
        style: {
            marginVertical: 0,
            borderBottomWidth: 2,
            borderBottomColor :'red'
        },
    },
    drawerPosition: 'left' ,
    drawerWidth: Dimensions.get('window').width - 69,
}
);

class AppNavigation extends Component {
    render() {
        return (
            <AppNavigator/>
        )
    }
}

export default AppNavigation;