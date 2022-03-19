import {useState} from "react";
import {View, StyleSheet} from 'react-native';
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
        <AuthWiewWrapper>
                <View style={styles.screen}>
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

export default ForgotPassword;