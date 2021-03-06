// import { NavigationCosntainer } from '@react-navigation/native';
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from '../screens/commonScreens/login';
import SignUpScreen from '../screens/commonScreens/SignUp';
import ForgotPasswordScreen from '../screens/commonScreens/ForgotPassword';
import ResetPasswordScreen from '../screens/commonScreens/ResetPassword';
import UpdatePasswordScreen from '../screens/commonScreens/UpdatePassword';

const  AuthStack = createStackNavigator({
    login: {
        screen: LoginScreen,
        navigationOptions:{
            title: "login",
            headerShown: false
        }
    },
    singup: {
        screen: SignUpScreen,
        navigationOptions:{
            title: "Register",
            headerShown: true
        }
    },
    resetPassword: {
        screen: ResetPasswordScreen,
        navigationOptions:{
            title: "Reset Password"
        }
    },
    forgotPassword:{
        screen: ForgotPasswordScreen,
        navigationOptions:{
            title: "Forgot Password?",
            headerShown: true
        }
    },
    updatePassword: {
        screen: UpdatePasswordScreen,
        navigationOptions:{
            title: "Update Password"
        }
    }
});

export default AuthStack

