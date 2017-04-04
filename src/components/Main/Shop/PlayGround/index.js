import React, { Component } from 'react';
import { 
    ScrollView, StyleSheet, TouchableOpacity 
} from 'react-native';
import Card from './Card';
import ListCategory from './ListCategory';
import ListProduct from './ListProduct';

export default class PlayGround extends Component {
    render() {
        const { homepage } = styles;
        return (
            <ScrollView style={homepage}>
                <TouchableOpacity>
                    <Card />
                </TouchableOpacity>
                <ListCategory />
                <ListProduct />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    homepage: {
        backgroundColor: '#E3E2E0',
        flex: 1
    }
});
