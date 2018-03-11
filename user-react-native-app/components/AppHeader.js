import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import {
    StyleSheet,
    View
} from 'react-native';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class AppHeader extends Component {
  render() {
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
           <Button
            transparent
            onPress={() => this.props.navigation.navigate("Cart")}
          >
          <MIcon name="dots-vertical" size={20} color="white" />
          </Button>
         </Right>
       </Header>
    );
  }
}

const styles = StyleSheet.create({
  
})



