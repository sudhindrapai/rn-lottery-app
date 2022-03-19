import {useState, useEffect} from "react";
import {View, StyleSheet,ActivityIndicator} from 'react-native';
import {Fonts} from '../../constants/Fonts';
import FormBuilder from "../../components/FormBuilder";
import Button from '../../components/Button'
import {updateFormInputState} from '../../utility/utility';
import AuthWiewWrapper from "../../components/AuthViewWrapper";
import {useDispatch, useSelector} from 'react-redux';
import * as action from '../../store/actions/index';

const initialStateArray = [
    {
        type:"INPUT",
        label:"Email id",
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
        label:"password",
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
    },
    {
        type:"INPUT",
        label:"First Name",
        id:"firstName",
        value:"",
        helperText: "",
        isMandatory: true,
        isTouched:false,
        maxLength:100,
        isError:false,
        isWarning: false,
        isSuccessMessage:false,
        isCustomValidationRequired: true,
        keyboardType: "default",
        customValidationType: "CHARACTER_VALIDATION"
    },
    {
        type:"INPUT",
        label:"Last Name",
        id:"lastName",
        value:"",
        helperText: "",
        isMandatory: true,
        isTouched:false,
        maxLength:100,
        isError:false,
        isWarning: false,
        isSuccessMessage:false,
        isCustomValidationRequired: true,
        keyboardType: "default",
        customValidationType: "CHARACTER_VALIDATION"
    }
]

const SignUp = (props) => {

    const dispatch = useDispatch();

    let isLoading = useSelector(state => state.signup.isLoading);
    let isSignedUp = useSelector(state => state.signup.isSignup)

    const[formElement, setFormElement] = useState(initialStateArray);

    useEffect(() => {
        if (isSignedUp === true) {
            props.navigation.navigate({
                routeName:"lotteryHome"
            });
        }
    },[isSignedUp]);

    useEffect(() => {
        setFormElement(initialStateArray)
    },[])

    const  updateInput = (text, id) => {
        setFormElement(updateFormInputState(text, id, formElement))
    }
    
    const onLoaseFocus = () => {}

    const validateCompleteForm = () => {
        const createAccountObj = {
            emailId:"",
            password:"",
            firstName:"",
            lastName:""
        };
        formElement.forEach((element) => {
            createAccountObj["emailId"] = element.id === "emailId" ? element.value : createAccountObj.emailId
            createAccountObj["password"] = element.id === "password"? element.value : createAccountObj.password
            createAccountObj["firstName"] = element.id === "firstName" ? element.value : createAccountObj.firstName;
            createAccountObj["lastName"] = element.id === "lastName" ? element.value : createAccountObj.lastName
        })
        dispatch(action.createAnAccount(createAccountObj))
    }

    const form = formElement.map((element) => {
        return <FormBuilder 
            type = {element.type}
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
                 <View style={styles.screen}>
                 {isLoading && <ActivityIndicator size={"large"} color="#0000ff" /> }
                    {form}
                    <Button label={"create an account"} clicked={validateCompleteForm} />
                </View>
                </AuthWiewWrapper>
    )
};

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})

export default SignUp;