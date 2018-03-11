import React, { Component } from 'react';
import { 
    Image, 
    Dimensions,
    TouchableOpacity,
    StyleSheet,
     } from 'react-native';
import {
     View,
     Text
      } from 'native-base';

class CategoryBlock extends Component {
    
    render() {
        return (
            <View style={styles.CategoryViewStyle}>
             <View style={styles.InnerView}>
            <Image
               resizeMode='contain'
               source={{uri:this.props.image}}
               style={styles.ImageStyle}
               />
               <Text>{this.props.title}</Text>
               <Text>{this.props.offerText}</Text>
            </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    CategoryViewStyle:{
        flex: 1,
        paddingHorizontal: 15,
        paddingVertical: 8
    },
    InnerView:{
        width:150,
        height:100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ImageStyle:{
        width:150,
        height:100
    }
})
export default CategoryBlock
