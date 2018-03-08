import React, { Component } from 'react';
import {
     View,
     Text,
     StyleSheet
     } from 'react-native';
import { Container, Content, Icon } from 'native-base';
import AppHeader from './AppHeader';

export default class MainScreen extends Component {

    render() {
        return (
            <View>
               <AppHeader navigation={this.props.navigation}/>
            <Container style={styles.container}>
            <Content padder>
          <Text>
            This is Content Section
          </Text>
        </Content>
            </Container>
            </View>
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