import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import {
    StyleSheet,
    View
} from 'react-native';
export default class AppHeader extends Component {
  render() {
    return (
      <Container>
          <View transparent style={{ backgroundColor:"#dc4239", height: 24 }} />
        <Header
         style={{ backgroundColor: "#dc4239" }}
         androidStatusBarColor="#dc2015"
         iosBarStyle="light-content"
        >
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate('DrawerOpen')}>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='search' />
            </Button>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Right>
        </Header>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  
})



