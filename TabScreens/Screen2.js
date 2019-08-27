import React, {Component} from "react";
import {Button, Text, View} from "react-native";

export default class Screen2 extends Component {
    render() {
        return (
            <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                <Text>Screen 2</Text>
                <Button
                    title="Screen2"
                    onPress={() => this.props.navigation.navigate('Screen3')}
                />
            </View>
        );
    }
}