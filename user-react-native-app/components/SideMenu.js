import React, { Component } from 'react';
import {
	Container,
	Header,
	Content,
	List,
	ListItem,
	Text,
	View,
    Button,
    Left, Body, Right,
    Card, CardItem, Thumbnail,
    Icon,
    Switch
} from 'native-base';
import { Image } from 'react-native';
import EncyptoIcon from 'react-native-vector-icons/Entypo';

export default class SideMenu extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		let list = [{
			title:"Electronics",
			onPress: () => {
				this.props.navigator.replace("Match")
            },
            icon:"tablet-mobile-combo"
		},{
			title:"Fashion",
			onPress: () => {
				this.props.navigator.replace("History")
            },
            icon:"tablet-mobile-combo"
		}];
		return (
			<Container>
                 <Content>
                 <View transparent style={{ backgroundColor:"#dc4239", height: 24 }} />
                <Card>
                <CardItem>
                    <Left>
                    <Thumbnail source={{uri: 'https://avatars3.githubusercontent.com/u/19688480?s=400&v=4'}} />
                        <Body>
                            <Text>Bipin Swarnkar </Text>
                        </Body>
                    </Left>
                </CardItem>
                </Card>
				<View>
					<List dataArray={list} 
						renderRow={(item) => 
							
                            <ListItem icon onPress={item.onPress.bind(this)}>
                            <Left>
                              <EncyptoIcon name={item.icon} />
                            </Left>
                            <Body>
                              <Text>{item.title}</Text>
                            </Body>
                            <Right>
                            <Icon name="arrow-forward" />
                            </Right>
                          </ListItem>
						}
					/>
				</View>
                </Content>
			</Container>

		)
	}
}