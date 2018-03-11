import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    ScrollView,
    Image
} from 'react-native';
import {
    Card
} from 'native-base';

class Feeds extends Component {
    
    render() {
        return (
            <View>
        <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
        >
         <View style={styles.imageContainer}>
         <Image
          style={styles.ImageStyle}
          source={{uri: 'https://raw.githubusercontent.com/nathvarun/React-Native-Layout-Tutorial-Series/master/Project%20Files/03.%20Instagram%20Stories%20Header/assets/feed_images/1.jpg'}}
        />
         </View>
         <View style={styles.imageContainer}>
         <Image
          style={styles.ImageStyle}
          source={{uri: 'https://raw.githubusercontent.com/nathvarun/React-Native-Layout-Tutorial-Series/master/Project%20Files/03.%20Instagram%20Stories%20Header/assets/feed_images/1.jpg'}}
        />
         </View>
         <View style={styles.imageContainer}>
         <Image
          style={styles.ImageStyle}
          source={{uri: 'https://raw.githubusercontent.com/nathvarun/React-Native-Layout-Tutorial-Series/master/Project%20Files/03.%20Instagram%20Stories%20Header/assets/feed_images/1.jpg'}}
        />
         </View>
         <View style={styles.imageContainer}>
         <Image
          style={styles.ImageStyle}
          source={{uri: 'https://raw.githubusercontent.com/nathvarun/React-Native-Layout-Tutorial-Series/master/Project%20Files/03.%20Instagram%20Stories%20Header/assets/feed_images/1.jpg'}}
        />
         </View>
         
        </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    contentContainerStyle:{
        alignItems:'center',
        paddingVertical: 20
        
    },
    imageContainer:{
        paddingRight:5
    },
    ImageStyle:{
        width: 180, 
        height: 120, 
        flex:1,
        borderRadius:8
    }
})

export default Feeds