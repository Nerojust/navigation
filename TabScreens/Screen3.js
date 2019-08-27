import React, {Component} from "react";
import {Button, Text, View} from "react-native";

export default class Screen1 extends Component {
    render() {
        return (
            <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                <Text>Screen3</Text>
                <Button
                    title="Screen3"
                    onPress={() => this.props.navigation.navigate('OtherStack')}
                />
            </View>
        );
    }
}