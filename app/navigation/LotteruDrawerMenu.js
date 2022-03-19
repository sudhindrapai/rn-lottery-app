import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import LoginScreen from '../screens/commonScreens/login';
import SignUp from '../screens/commonScreens/SignUp';
import ForgotPassword from '../screens/commonScreens/ForgotPassword';
import TabNavigation from './LotteryTabNavigation';
import UpdatePassword from '../screens/commonScreens/UpdatePassword';
import ResetPassword from '../screens/commonScreens/ResetPassword';

const MainNavigator = createDrawerNavigator({
    home: {
        screen: TabNavigation
    },
    login: {
        screen: LoginScreen
    },
    signUp:{
        screen: SignUp
    },
    forgotPassword:{
        screen: ForgotPassword
    },
    updatePassword:{
        screen: UpdatePassword
    },
    resetPassword: {
        screen: ResetPassword
    }
}, {
    contentOptions:{
        activeTintColor: "red",
        labelStyle: {
            fontSize: 18
        }
    }
});

export default createAppContainer(MainNavigator)