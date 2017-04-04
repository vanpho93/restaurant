import React, { Component } from 'react';
import { View, StyleSheet, Navigator } from 'react-native';
import CardDetail from './CartDetail';
import Checkout from './Checkout';

const renderScene = (route, navigator) => {
    if (route.name === 'CART_DETAIL') return <CardDetail navigator={navigator} />;
    return <Checkout navigator={navigator} />;
};

class Cart extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Navigator 
                    initialRoute={{ name: 'CART_DETAIL' }}
                    renderScene={renderScene}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: '#C0DCF3'
    }
});

export default Cart;