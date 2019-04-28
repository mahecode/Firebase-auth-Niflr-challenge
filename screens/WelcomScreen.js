import React, { Component } from 'react';
import { View, Text, StyleSheet , ScrollView } from 'react-native';
import { Card, Title, Button } from 'react-native-paper';

import Navbar from '../components/Navbar/Navbar';

class WelcomeScreen extends Component {
    render() {
        const dataSets = [
            {
            name: 'Milk',
            uri: 'https://cdn.theatlantic.com/assets/media/img/mt/2018/11/Image_from_iOS-1/lead_720_405.png?mod=1543441002',
        }, 
        {
            name: 'Eggs',
            uri: 'https://png.pngtree.com/element_origin_min_pic/16/12/14/2af581cea3f063319eca15ecc50f1b1c.jpg',
        },
        {
            name: 'Bakery',
            uri: 'https://images.all-free-download.com/images/graphicthumb/bakery_logo_design_bread_basket_barley_icons_decor_6831626.jpg'
        },
        {
            name: 'Curd',
            uri: 'https://cdn4.vectorstock.com/i/thumb-large/44/63/cottage-cheese-icon-cartoon-style-vector-7994463.jpg'
        }
    ]

    let renderingCards = dataSets.map( (ele, key) => {
        return(
            <View key={key} style={{margin: 30}}>
                <Card elevation={6}>
                    <Card.Content>
                        <Title style={{textAlign: 'center'}}>{ele.name}</Title>
                    </Card.Content>
                    <Card.Cover source={{ uri: ele.uri }} />
                    <Card.Actions>
                        <Button>Cancel</Button>
                        <Button>Ok</Button>
                    </Card.Actions>
                </Card>
            </View>
        )
    })
        return (
            <View style={{flex: 1}}>
                <Navbar navigation={this.props.navigation} />
                <ScrollView>
                    {renderingCards}
                </ScrollView>
            </View>
        )
    }
}


export default WelcomeScreen;