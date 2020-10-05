import React, { Component } from 'react';
import {TextInput, View, Text, StyleSheet } from 'react-native';

const style = StyleSheet.create({
    label: {
        fontSize: 18,
        paddingLeft:20,
        flex: 1
    },
    input: {
        color: "black",
        paddingHorizontal: 5,
        fontSize: 18,
        lineHeight: 23,
        height: 50,
        width: 100,
        flex: 2
    },
    container: {
        height: 50,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderBottomColor: '#007aff',
        borderBottomWidth: 1
    }
})

class Input extends Component {
    render(){
        const { 
            label, 
            placeholder, 
            secureTextEntry,
            value,
            onChangeText 
        }= this.props
        return(
            <View style={ style.container }>
                <Text style={ style.label }>{ label }</Text>
                <TextInput 
                    style={ style.input }
                    placeholder={ placeholder }
                    secureTextEntry={ secureTextEntry }
                    autoCorrect={ false } 
                    value={ value }
                    onChangeText={ onChangeText }
                    />

            </View>
        );
    }
}

export default Input;