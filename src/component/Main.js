import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';
import Word from './Word';
import Header from './Header';
import Form from './Form';

class Main extends Component {
    render() {
        const {isAdding} = this.props;
        return (
            <View style={styles.container}>
                <Header/>
                {
                    isAdding? <Form/> : null
                }
                
                <FlatList
                    data={this.props.arrWords}
                    renderItem={({item, index})=><Word item={item} index={index}/>}
                    keyExtractor={(item) => item.toString()}
                />
            </View>
        );
    }
}

function mapStateToProps(state){
    return {
        arrWords:state.arrWords,
        isAdding: state.isAdding,
    };
}

export default connect(mapStateToProps)(Main);

const styles = StyleSheet.create({
    container:{
        backgroundColor:'grey'
    }
})