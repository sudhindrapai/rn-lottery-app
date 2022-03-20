import {Platform} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import {Colors} from '../constants/Colors'


import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'

// import of other navigation
import LotteryStackNavigation from './LotteryStackNavigation';
import AuctionStackNavigation from './AuctionStackNavigation';
import AuthStack from './AuthStackNavigation';

const tabMenuOptions = {
    home:{
        screen: LotteryStackNavigation,
        navigationOptions:{
            tabBarLabel: "HOME",
            tabBarIcon: (tabInfo) => {
                return <Entypo name="home" size={24} color={tabInfo.tintColor} />
            },
            tabBarColor: "#ffffff"
        }
    },
    lottery:{
        screen: LotteryStackNavigation,
        navigationOptions:{
            tabBarLabel: "Lottery",
            tabBarIcon: (tabInfo) => {
                return <MaterialCommunityIcons name="puzzle" size={24} color={tabInfo.tintColor} />
            },
            tabBarColor: "#ffffff"
        }
    },
    auction: {
        screen: AuctionStackNavigation,
        navigationOptions:{
            tabBarLabel: "Auction",
            tabBarIcon: (tabInfo) => {
                return <Ionicons name="hammer-sharp" size={24} color={tabInfo.tintColor} />
            },
            tabBarColor: "#ffffff"
        }
    },
    purchases: {
        screen: AuctionStackNavigation,
        navigationOptions:{
            tabBarLabel: "Purchases",
            tabBarIcon: (tabInfo) => {
                return <Entypo name="wallet" size={24} color={tabInfo.tintColor} />
            },
            tabBarColor: "#ffffff"
        }
    },
    profile:{
        screen: AuthStack,
        navigationOptions:{
            tabBarLabel: "Profile",
            tabBarIcon: (tabInfo) => {
                return <Entypo name="user" size={24} color={tabInfo.tintColor} />
            },
            tabBarColor: "#ffffff"
        }
    }
}


const TabOptions = Platform.OS === "android"?  
createMaterialBottomTabNavigator(tabMenuOptions,{
    activeColor: Colors.primary,
    inactiveColor: Colors.textInputBorder,
    shifting: true,
    labeled: true
}) : 
createBottomTabNavigator(tabMenuOptions, {
        tabBarOptions:{
            activeTintColor: Colors.primary
        }
});

export default TabOptions;
