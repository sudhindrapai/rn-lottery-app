import {useState, useEffect} from "react";
import {View, StyleSheet, Image, Text, Dimensions} from 'react-native';
import {Fonts} from '../../constants/Fonts';
import FormBuilder from "../../components/FormBuilder";
import Button from '../../components/Button'
import {updateFormInputState, updateTouchStatus} from '../../utility/utility';
import AuthWiewWrapper from "../../components/AuthViewWrapper";
import {useDispatch, useSelector} from 'react-redux';
import * as action from '../../store/actions/index';
import { Colors } from "../../constants/Colors";
import HeaderImage from "../../components/HeaderImage";


const Login = (props) => {

    const dispatch = useDispatch();

    const[formElement, setFormElement] = useState([
        {
            type:"INPUT",
            placeHolder:"Enter email address",
            label:"",
            id:"emailId",
            value:"",
            helperText: "",
            isMandatory: true,
            isTouched:false,
            maxLength:100,
            isError:false,
            isWarning: false,
            isSuccessMessage:false,
            isCustomValidationRequired: true,
            keyboardType: "email-address",
            customValidationType: "EMAIL"
        },
        {
            type:"PASSWORD",
            label:"",
            placeHolder:"Enter password",
            id:"password",
            value:"",
            helperText: "",
            isMandatory: true,
            isTouched:false,
            maxLength:100,
            isError:false,
            isWarning: false,
            isSuccessMessage:false,
            isCustomValidationRequired: false,
            keyboardType: "default",
            customValidationType: "EMAIL"
        }
    ]);

    const  updateInput = (text, id) => {
        setFormElement(updateFormInputState(text, id, formElement))
    }
    
    const onLoaseFocus = (value) => {
        console.log(value,"dfa")
    }

    const validateCompleteForm = () => {
        let loginObj = {};
        for (let element of formElement) {
            loginObj["emailId"] = element.id === "emailId" ? element.value : loginObj.emailId;
            loginObj["password"] = element.id === "password" ? element.value : loginObj.password;
            loginObj["rememberMe"] = true;
        }
        dispatch(action.createLogin(loginObj));
    }

    const redirectToForgotPassword = () => {
        props.navigation.navigate("forgotPassword")
    };

    const redirectToSignup = () => {
        props.navigation.navigate("singup")
    };

    const form = formElement.map((element) => {
        return <FormBuilder 
            type = {element.type}
            placeHolder={element.placeHolder}
            id={element.id}
            label={element.label} 
            helperText={element.helperText} 
            isMandatory={element.isMandatory} 
            value={element.value} 
            onInputChange={updateInput}
            onLoaseFocus={onLoaseFocus}
            keyboardType={element.keyboardType} 
            isError={element.isError} 
            isWarning={element.isWarning} 
            isSuccess={element.isSuccess}
            isMultiLineInput={props.isMultiLineInput}
         />
    })

    return (
        <AuthWiewWrapper>
            <HeaderImage />
                    <View style={styles.loginImage}>
                    <Image source={require("../../images/loginImage.png")} resizeMode={"contain"} />
                    </View>
                    <View style={styles.screen}>
                        {form}
                        <View style={styles.forgotPassword}>
                            <Text onPress={redirectToForgotPassword} >
                                Forgot password?
                            </Text>
                        </View>
                        <View style={styles.actionbutton}>
                        <Button label={"create an account"} variant={"gold"} clicked={validateCompleteForm} />
                        </View>
                        <View style={styles.singupContainer}>
                            <Text style={styles.signupDummyText} >Dont't have an account? </Text>
                            <View style={styles.ml5}>
                                <Text style={styles.signupText} onPress={redirectToSignup} >Sign Up</Text> 
                            </View>
                        </View>
                    </View>
        </AuthWiewWrapper>
    )
};

Login.navigationOptions = (navData) => {
    return{
        headerShown: false,
        screenOptions:{
            headerShown:false
        }
    }
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
    },
    loginImage:{
        display: "flex",
        alignItems: "center",
        justifyContent:"center",
        marginTop: 50
    },
    actionbutton:{
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 10
    },
    forgotPassword:{
        width: "100%",
        alignItems: "flex-end",
        justifyContent: "center",
        marginVertical: 15,
        maxWidth: Dimensions.get("window").width - 45
    },
    singupContainer:{
        width: "100%",
        flexDirection: "row",
        maxWidth: Dimensions.get("window").width - 45,
        alignItems: "flex-end",
        justifyContent: "flex-end"
    },
    signupDummyText:{
        fontSize: 14,
        color: Colors.textInputBorder
    },
    signupText:{
        color: Colors.textColor,
    },
    ml5:{
        marginLeft: 5,
    }
})

export default Login;