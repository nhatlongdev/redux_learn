import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';
import Word from './Word';
import Header from './Header';

class Main extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header/>
                <FlatList
                    data={this.props.arrWords}
                    renderItem={({item})=><Word item={item}/>}
                    keyExtractor={(item) => item.toString()}
                />
            </View>
        );
    }
}

function mapStateToProps(state){
    return {
        arrWords:state.arrWords
    };
}

export default connect(mapStateToProps)(Main);

const styles = StyleSheet.create({
    container:{
        backgroundColor:'grey'
    }
})