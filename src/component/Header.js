import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class Header extends Component {
    render() {
        return (
            <View style={{flexDirection:'row', padding: 10, justifyContent:'center',alignItems:'center', backgroundColor:'yellow'}}>
                <Text style={{flex:1, textAlign:'center'}}>MY WORD</Text>
                <Text style={{fontSize:20, fontWeight:'bold', textAlign:'center'}}>+</Text>
            </View>
        );
    }
}