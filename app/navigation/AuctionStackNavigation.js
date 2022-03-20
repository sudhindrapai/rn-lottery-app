// import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from 'react-navigation-stack';
import {View,Text} from 'react-native'

import AuctionHomeScreen from '../screens/auction/AuctionHomeScreen';

import HeaderImage from '../components/HeaderImage';

const AuctionStack = createStackNavigator({
    auctionHomeScreen:{
        screen: AuctionHomeScreen,
        navigationOptions:{
            title: "afd",
            headerBackground: () => <View><HeaderImage /></View>
        }
    }
});

export default AuctionStack

