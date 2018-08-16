import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { addWord, isAdding} from '../redux/actionCreators';

class Form extends Component {
    constructor(props){
        super(props);
        this.state=({
            en:'',
            vn:'',
        });
        this.onAdd = this.onAdd.bind(this);
    }

    onAdd(){
        const {en, vn} = this.state;
        this.props.addWord(en,vn);
        this.props.isAdding();
    }

    render() {
        return (
            <View >
                <TextInput
                    style={styles.textInput}
                    value={this.state.en}
                    onChangeText={text=>this.setState({
                        en:text
                    })}
                    placeholder='English'
                />
                <TextInput
                    style={styles.textInput}
                    value={this.state.vn}
                    onChangeText={text=>this.setState({
                        vn:text
                    })}
                    placeholder='Meaning'
                />
                <TouchableOpacity onPress={()=>
                    this.onAdd()
                }>
                        <Text style={styles.text_add}>Add</Text>  
                </TouchableOpacity>
                
            </View>
        );
    }
}

export default connect(null, {addWord, isAdding})(Form);

const styles = StyleSheet.create({
    textInput:{
        backgroundColor:'white',
        height: 50,
        margin: 10,
    },
    text_add:{
        textAlign:'center', 
        fontWeight:'bold', 
        fontSize:16
    }
})