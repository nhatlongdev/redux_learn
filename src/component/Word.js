import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

class Word extends Component {
        render() {
            const {en, vn, memorized, id, isShow} = this.props.item;
            const textDecorationLine = memorized? 'line-through' : 'none';
            const showTextVn = isShow? vn : '--------------------';
        return (
            <View style={styles.container}>
                <Text style={{textDecorationLine}}>{this.props.item.en}</Text>
                <Text>{showTextVn}</Text>
                <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                    <TouchableOpacity onPress={()=>this.props.dispatch({type:'MEMORIZED', id})}>
                        <Text style={styles.text_button}>{memorized? 'Forget' : 'Memorized'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.dispatch({type:'SHOW', id})}>
                        <Text style={styles.text_button}>{isShow? 'Hidden': 'Show'}</Text>  
                    </TouchableOpacity>    
                </View>
            </View>
        );
    }
}

export default connect()(Word);

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        padding: 5,
        margin: 5,
    },
    text_button:{
        backgroundColor:'grey',
        padding:2,
        margin:5,
    }
})