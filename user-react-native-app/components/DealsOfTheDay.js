import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Image,
    FlatList
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
import CategoryBlock from './CategoryBlock';

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
        <CardItem style={{flex:1}}>
        <FlatList
          data={[
            {
                key: 1,
                image:'https://rukminim1.flixcart.com/image/400/400/sticker/d/3/y/ds-12529-6-destudio-150-hanging-heart-with-leaf-wall-covering-original-imaem8ffmvhjpqur.jpeg?q=70',
                title:'Home Decor Range',
                offerText:'Under 699 INR',
                titleSubText:'Decals, Clocks & Paintings'
            },
            {
                key: 2,
                image:'https://rukminim1.flixcart.com/image/400/400/sticker/d/3/y/ds-12529-6-destudio-150-hanging-heart-with-leaf-wall-covering-original-imaem8ffmvhjpqur.jpeg?q=70',
                title:'Home Decor Range',
                offerText:'Under 699 INR',
                titleSubText:'Decals, Clocks & Paintings'
            },
            {
                key: 3,
                image:'https://rukminim1.flixcart.com/image/400/400/sticker/d/3/y/ds-12529-6-destudio-150-hanging-heart-with-leaf-wall-covering-original-imaem8ffmvhjpqur.jpeg?q=70',
                title:'Home Decor Range',
                offerText:'Under 699 INR',
                titleSubText:'Decals, Clocks & Paintings'
            },
            {
                key: 4,
                image:'https://rukminim1.flixcart.com/image/400/400/sticker/d/3/y/ds-12529-6-destudio-150-hanging-heart-with-leaf-wall-covering-original-imaem8ffmvhjpqur.jpeg?q=70',
                title:'Home Decor Range',
                offerText:'Under 699 INR',
                titleSubText:'Decals, Clocks & Paintings'
            },
          ]}
          renderItem={({item}) => 
          <View key={item.key} style={styles.GridViewBlockStyle}>
          <CategoryBlock 
          image={item.image}
          title={item.title}
          offerText={item.offerText}
          titleSubText={item.titleSubText}
         />
         </View>
        }
        numColumns={2}
        />
          
        </CardItem>
            </Card>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    GridViewBlockStyle:{
        justifyContent:'center',
        flex:1,
        alignItems:'center',
        height:150,
        margin:5,

    }
})

export default DealsOfTheDay