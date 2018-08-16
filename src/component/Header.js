import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import {isAdding} from '../redux/actionCreators';

class Header extends Component {
    render() {
        return (
            <View style={{flexDirection:'row', padding: 10, justifyContent:'center',alignItems:'center', backgroundColor:'yellow'}}>
                <Text style={{flex:1, textAlign:'center'}}>MY WORD</Text>
                <TouchableOpacity onPress={()=>
                        this.props.isAdding()
                    }>
                        <Text style={{fontSize:20, fontWeight:'bold', textAlign:'center'}}>+</Text>
                </TouchableOpacity>
                
            </View>
        );
    }
}

export default connect(null, {isAdding})(Header);