
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from 'react-navigation-stack';
// import of screens

import HomeScreen from '../screens/lottery/HomeScreen';

const LotteryStack = createStackNavigator({
    lotteryHome:{
        screen: HomeScreen
    }
});

export default LotteryStack;

