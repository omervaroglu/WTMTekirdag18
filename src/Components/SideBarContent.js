import React, { Component } from 'react';
import { Text, View } from 'react-native';


class SideBarContent extends Component {
    render() {
        return (
            <View>
                <Text>Etkinlik Takvimi</Text>
                <Text>Konuşmacılar</Text>
                <Text>Sponsorlar</Text>
            </View>
        );
    }
}

export default SideBarContent;
