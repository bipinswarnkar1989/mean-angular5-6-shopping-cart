import React, { Component } from 'react';
import {
     View,
     Text,
     StyleSheet,
     ScrollView
     } from 'react-native';
import {
     Container,
     Content, 
     Icon, 
     Header, 
     Left, 
     Body, 
     Right, 
     Button, 
     Title ,
    Thumbnail,
     } from 'native-base';
import AppHeader from './AppHeader';
import Feeds from './Feeds';
import DealsOfTheDay from './DealsOfTheDay';

export default class MainScreen extends Component {

    render() {
        return (
            <Container>
            <View transparent style={{ backgroundColor:"#dc4239", height: 24 }} />
            <AppHeader navigation={this.props.navigation}/>
          <Content padder>
          <View style={{flex:1}}>
            <ScrollView 
               horizontal={true}
               showsHorizontalScrollIndicator={false}
               contentContainerStyle={styles.contentContainer}
               >
             <View style={styles.top_img_menus}>
             <Thumbnail 
                square
                source={require('../assets/special_offers.png')}
                />
                <Text>Offers</Text>
            </View>
            <View style={styles.top_img_menus}>
             <Thumbnail 
                square
                source={require('../assets/mobiles.jpg')}
                />
                <Text>Mobiles</Text>
            </View>
            <View style={styles.top_img_menus}>
             <Thumbnail 
                square
                source={require('../assets/special_offers.png')}
                />
                <Text>Fashion</Text>
            </View>
            <View style={styles.top_img_menus}>
             <Thumbnail 
                square
                source={require('../assets/special_offers.png')}
                />
                <Text>Offers</Text>
            </View>
            <View style={styles.top_img_menus}>
             <Thumbnail 
                square
                source={require('../assets/special_offers.png')}
                />
                <Text>Offers</Text>
            </View>
            <View style={styles.top_img_menus}>
             <Thumbnail 
                square
                source={require('../assets/special_offers.png')}
                />
                <Text>Offers</Text>
            </View>
            <View style={styles.top_img_menus}>
             <Thumbnail 
                square
                source={require('../assets/special_offers.png')}
                />
                <Text>Offers</Text>
            </View>
            <View style={styles.top_img_menus}>
             <Thumbnail 
                square
                source={require('../assets/special_offers.png')}
                />
                <Text>Offers</Text>
            </View>
            </ScrollView>
            </View>
            <View>
                <Feeds/>
            </View>
            <View style={styles.DealsOfTheDayStyle}>
              <DealsOfTheDay/>
            </View>
          
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
    contentContainer: {
       alignItems:'center',
       paddingEnd:5,
       paddingStart:5
    },
    top_img_menus: {
      alignItems:'center',
      justifyContent: 'space-between',
      paddingHorizontal: 8
    },
    DealsOfTheDayStyle:{
        backgroundColor:'#dc4239'
    }
  });