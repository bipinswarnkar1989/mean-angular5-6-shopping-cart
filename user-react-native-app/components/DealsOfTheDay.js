import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Image,
} from 'react-native';
import {
    Card,
    CardItem,
    Thumbnail, 
    Body, 
    Left,
    Right,
    Button, 
    Icon,
    Text
} from 'native-base';

class DealsOfTheDay extends Component {
    state = {  }
    render() {
        return (
            <View>
            <Card>
        <CardItem>
          <Left>
              <Icon name='clock' style={{color:'red'}}/>
              <Text>
               Deals of the Day!
               </Text>
          </Left>
          <Right>
          <Button textStyle={{fontWeight:'normal'}} small rounded info>
            <Text uppercase={false} style={{padding:10}}>View All</Text>
          </Button>
          </Right>
        </CardItem>
        <CardItem>
          
        </CardItem>
            </Card>
            </View>
        )
    }
}

export default DealsOfTheDay