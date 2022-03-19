
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from '../screens/lottery/HomeScreen';

const LotteryStack = createStackNavigator({
    lotteryHome:{
        screen: HomeScreen
    }
});

export default LotteryStack;

