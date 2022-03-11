import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Fonts from '../../constants/Fonts';

const AuctionHomeScreen = (props) => {
    return (<View style={styles.screen} >
        <Text onPress={() => {props.navigation.navigate({
            name:"login"
        })}}>
            Auction Home screen
        </Text>
    </View>)
};

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        alignItems: "center",
        justifyContent:"center",
        fontFamily: "Poppins_600SemiBold"
    }
})

export default AuctionHomeScreen

