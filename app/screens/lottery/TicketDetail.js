import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const TicketDetails = (prps) => {
    return(<View style={styles.screen} >
        <Text>
            Ticket Detail
        </Text>
    </View>)
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})

export default TicketDetails