import React from "react";
import {View, Text, StyleSheet} from 'react-native';
import HeaderButton from '../../components/HeaderButton';
import  {HeaderButtons, Item} from 'react-navigation-header-buttons';


const HomeScreen = (props) => {
    return (<View style={styles.screen}>
        <Text>
            Home Screen
        </Text>
    </View>);
};

HomeScreen.navigationOptions = (navData) => {
    return {
    headerTitle: "Home page",
    headerLeft: <HeaderButtons HeaderButtonComponent={HeaderButton} >
        <Item title="menu" iconName={"ios-menu"} onPress={() => {
            navData.navigation.toggleDrawer()
        }} />
    </HeaderButtons>
    }
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        alignItems:"center",
        justifyContent:"center"
    }
})

export default HomeScreen