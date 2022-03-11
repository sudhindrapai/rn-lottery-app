import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const PaymentStatus = (props) => {
    return(<View style={styles.screen}>
        <Text>
            Payment Status
        </Text>
    </View>)
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        alignItmes: "center",
        justifyContent: "center"
    }
})

export default PaymentStatus