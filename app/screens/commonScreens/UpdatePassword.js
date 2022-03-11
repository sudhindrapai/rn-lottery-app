import {useState} from "react";
import {View, Text, StyleSheet, ScrollView, SafeAreaView, KeyboardAvoidingView} from 'react-native';
import {Fonts} from '../../constants/Fonts';
import FormBuilder from "../../components/FormBuilder";
import Button from '../../components/Button'
import {updateFormInputState} from '../../utility/utility';

import {useDispatch, useSelector} from 'react-redux';
import * as action from '../../store/actions/index';

const UpdatePassword = (props) => {

    const dispatch = useDispatch();

    const[formElement, setFormElement] = useState([
        {
            type:"PASSWORD",
            label:"Old Password",
            id:"OldPassword",
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
            customValidationType: ""
        },
        {
            type:"PASSWORD",
            label:"New Password",
            id:"NewPassword",
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
            customValidationType: ""
        },
        {
            type:"PASSWORD",
            label:"Confirm Password",
            id:"ConfirmPassword",
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
            customValidationType: ""
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
        <ScrollView>
            <SafeAreaView>
                <View style={styles.screen}>
                    {form}
                    <Button label={"create an account"} clicked={validateCompleteForm} />
                </View>
            </SafeAreaView>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})

export default UpdatePassword;