import {Platform} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 


import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'

// import of other navigation
import LotteryStackNavigation from './LotteryStackNavigation';
import AuctionStackNavigation from './AuctionStackNavigation';
import AuthStack from './AuthStackNavigation';

// import HomeScreen from '../screens/lottery/HomeScreen';
// import AuctionHomeScreen from '../screens/auction/AuctionHomeScreen';
// import LoginScreen from '../screens/commonScreens/login';
// import RegisterScreen from '../screens/commonScreens/SignUp'


const tabMenuOptions = {
    home:{
        screen: LotteryStackNavigation,
        navigationOptions:{
            tabBarLabel: "HOME",
            tabBarIcon: (tabInfo) => {
                return <Entypo name="home" size={24} color={tabInfo.tintColor} />
            },
            tabBarColor: "#fb2629"
        }
    },
    lottery:{
        screen: LotteryStackNavigation,
        navigationOptions:{
            tabBarLabel: "Lottery",
            tabBarIcon: (tabInfo) => {
                return <MaterialCommunityIcons name="puzzle" size={24} color={tabInfo.tintColor} />
            },
            tabBarColor: "#fb2629"
        }
    },
    auction: {
        screen: AuctionStackNavigation,
        navigationOptions:{
            tabBarLabel: "Auction",
            tabBarIcon: (tabInfo) => {
                return <Ionicons name="hammer-sharp" size={24} color={tabInfo.tintColor} />
            },
            tabBarColor: "#fb2629"
        }
    },
    purchases: {
        screen: AuctionStackNavigation,
        navigationOptions:{
            tabBarLabel: "Purchases",
            tabBarIcon: (tabInfo) => {
                return <Entypo name="wallet" size={24} color={tabInfo.tintColor} />
            },
            tabBarColor: "#fb2629"
        }
    },
    profile:{
        screen: AuthStack,
        navigationOptions:{
            tabBarLabel: "Profile",
            tabBarIcon: (tabInfo) => {
                return <Entypo name="user" size={24} color={tabInfo.tintColor} />
            },
            tabBarColor: "#fb2629"
        }
    }
}


const TabOptions = Platform.OS === "android"?  
createMaterialBottomTabNavigator(tabMenuOptions,{
    activeColor: 'white',
    shifting: true
}) : 
createBottomTabNavigator(tabMenuOptions, {
        tabBarOptions:{
            activeTintColor: '#4ac2a2'
        }
});

export default TabOptions;
