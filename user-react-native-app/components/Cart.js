import React, { Component } from 'react';
import {
     View,
     Text,
     StyleSheet
     } from 'react-native';
import { Container, Content, Icon, Header, Left, Body, Right, Button, Title } from 'native-base';
import AppHeader from './AppHeader';

export default class Cart extends Component {

    render() {
        return (
            <Container>
            <View transparent style={{ backgroundColor:"#dc4239", height: 24 }} />
            <AppHeader navigation={this.props.navigation}/>
          <Content padder>
          <Text>Cart Content</Text>
        </Content>
        </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
  });