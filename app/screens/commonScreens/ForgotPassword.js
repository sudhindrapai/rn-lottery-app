import {useState} from "react";
import {View, StyleSheet, Text, Dimensions} from 'react-native';
import {Fonts} from '../../constants/Fonts';
import FormBuilder from "../../components/FormBuilder";
import Button from '../../components/Button'
import {updateFormInputState} from '../../utility/utility';
import AuthWiewWrapper from "../../components/AuthViewWrapper";
import {useDispatch, useSelector} from 'react-redux';
import * as action from '../../store/actions/index';

const ForgotPassword = (props) => {

    const dispatch = useDispatch();

    const[formElement, setFormElement] = useState([
        {
            type:"INPUT",
            label:"Email Address",
            id:"emailId",
            placeHolder:"email-address@gmail.com",
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
    ]);

    const  updateInput = (text, id) => {
        setFormElement(updateFormInputState(text, id, formElement))
    }
    
    const onLoaseFocus = () => {}

    const validateCompleteForm = () => {}

    const form = formElement.map((element) => {
        return <FormBuilder 
            type = {element.type}
            id={element.id}
            label={element.label} 
            placeHolder={element.placeHolder}
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
                    <Text style={styles.forgotPasswordText} >
                    Please enter your registered email address to reset the password
                    </Text>
                    {form}
                    <View style={styles.actionBtnContainer}>
                    <Button label={"RESET PASSWORD"} clicked={validateCompleteForm} />
                    </View>
                </View>
                </AuthWiewWrapper>
    )
};

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: "#ffffff"
    },
    forgotPasswordText:{
        width: "100%",
        maxWidth: Dimensions.get("window").width-45,
        marginVertical: 20,
        fontSize: 14,
        color: "#828282"
    },
    actionBtnContainer:{
        width: "100%",
        maxWidth: Dimensions.get("window").width-45,
        marginVertical: 10
    }
})

export default ForgotPassword;