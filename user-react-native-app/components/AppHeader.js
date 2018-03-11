import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import {
    StyleSheet,
    View,
    NativeModules, findNodeHandle
} from 'react-native';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const { UIManager } = NativeModules;

export default class AppHeader extends Component {
 
  onError () {
    console.log('Popup Error')
  }
  
  onMenuPressed = (labels) => {
    const actions=['Login', 'Register'];
    UIManager.showPopupMenu(           // UIM.showPopupMenu(reactTag, items, error, success);
      findNodeHandle(this.refs.menu),
      actions,
      () => {},
      (result, index) => {
        alert(actions[index])
      },
    );
  };
  render() {
    const { labels } = this.props;
    return (
        <Header
        style={{ backgroundColor: "#dc4239" }}
        androidStatusBarColor="#dc2015"
        iosBarStyle="light-content"
       >
         <Left>
           {this.props.navigation.state.routeName === 'MainScreen' && 
           <Button transparent onPress={() => this.props.navigation.navigate('DrawerOpen')}>
              <Icon name='menu' />
              </Button>
           }
           {this.props.navigation.state.routeName !== 'MainScreen' && 
           <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name='arrow-back' />
              </Button>
           }  
         </Left>
         <Body>
           <Title>{this.props.navigation.state.routeName === 'MainScreen' ? 'eKart' : this.props.navigation.state.routeName}</Title>
         </Body>
         <Right>
           <Button transparent>
             <Icon name='search' />
           </Button>
           <Button transparent>
             <Icon name='cart' />
           </Button>
           <View
              ref={c => this.menu = c}>
           <Button
            transparent
            onPress={() => this.onMenuPressed(labels)}
          >
          <MIcon name="dots-vertical" size={20} color="white"  ref="menu"  />
          </Button>
          </View>
         </Right>
       </Header>
    );
  }
}

const styles = StyleSheet.create({
  
})



