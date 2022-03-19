import {useState} from "react";
import {View, Text, StyleSheet, Image} from 'react-native';
import {Fonts} from '../../constants/Fonts';
import FormBuilder from "../../components/FormBuilder";
import Button from '../../components/Button'
import {updateFormInputState} from '../../utility/utility';
import AuthWiewWrapper from "../../components/AuthViewWrapper";
import {useDispatch, useSelector} from 'react-redux';
import * as action from '../../store/actions/index';


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
    
    const onLoaseFocus = () => {}

    const validateCompleteForm = () => {}

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
                    <View style={styles.loginImage}>
                    <Image source={require("../../images/loginImage.png")} resizeMode={"contain"} />
                    </View>
                    <View style={styles.screen}>
                        {form}
                        <Button label={"create an account"} clicked={validateCompleteForm} />
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
    image:{
        flex: 1,
        width: "100%"
    }
})

export default Login;