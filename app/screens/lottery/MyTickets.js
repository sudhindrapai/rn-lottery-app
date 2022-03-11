import React from "react";
import {View, Text, StyleSheet} from 'react-native';

const MyTickets = (props) => {
    return (<View style={styles.screen} >
        <Text>
            My Tickets
        </Text>
    </View>)
};

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        alignItems:"center",
        justifyContent:"center"
    }
})

export default MyTickets