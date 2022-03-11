// import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from 'react-navigation-stack';

import AuctionHomeScreen from '../screens/auction/AuctionHomeScreen';

const AuctionStack = createStackNavigator({
    auctionHomeScreen:{
        screen: AuctionHomeScreen,
        navigationOptions:{
            title: "Auction Home screen"
        }
    }
});

export default AuctionStack

