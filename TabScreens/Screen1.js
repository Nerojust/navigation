import React, {Component} from "react";
import {Button, Text, View} from "react-native";

export default class Screen1 extends Component {
    render() {
        return (
            <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                <Text>Screen 1</Text>
                <Button
                    title="Screen1"
                    onPress={() => this.props.navigation.navigate('Screen2')}
                />
            </View>
        );
    }
}