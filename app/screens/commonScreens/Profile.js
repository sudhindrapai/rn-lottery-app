import {useState} from "react";
import {View, Text, StyleSheet, ScrollView, SafeAreaView, KeyboardAvoidingView} from 'react-native';
import {Fonts} from '../../constants/Fonts';
import FormBuilder from "../../components/FormBuilder";
import Button from '../../components/Button'
import {updateFormInputState} from '../../utility/utility';

import {useDispatch, useSelector} from 'react-redux';
import * as action from '../../store/actions/index';

const Profile = (props) => {

    const dispatch = useDispatch();

    const[formElement, setFormElement] = useState([
        {
            type:"INPUT",
            label:"First Name",
            id:"FirstName",
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
        },
        {
            type:"DATEPICKER",
            label:"Date Of Birth",
            id:"dateOfBirth",
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
            type:"INPUT",
            label:"Mobile Number",
            id:"mobileNumber",
            value:"",
            helperText: "",
            isMandatory: true,
            isTouched:false,
            maxLength:100,
            isError:false,
            isWarning: false,
            isSuccessMessage:false,
            isCustomValidationRequired: true,
            keyboardType: "number-pad",
            customValidationType: "MOBILE_NUMBER"
        },
        {
            type:"RADIOGROUP",
            label:"Gendar",
            id:"gendar",
            value:[
                {
                    id: 1,
                    label:"Male",
                    value:"Male",
                    isSelected: true
                },
                {
                    id: 2,
                    label:"Female",
                    value:"female",
                    isSelected: false
                },
                {
                    id: 3,
                    label:"Other",
                    value:"Others",
                    isSelected: false
                }
            ],
            helperText: "",
            isMandatory: true,
            isTouched:false,
            maxLength:100,
            isError:false,
            isWarning: false,
            isSuccess:false,
            isCustomValidationRequired: false,
            keyboardType: "default",
            customValidationType: "",
            isMultiLineInput: false
        },
        {
            type:"INPUT",
            label:"Country",
            id:"country",
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
            label:"State",
            id:"state",
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
            label:"City",
            id:"city",
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
            label:"Pin/Zip Code",
            id:"pinCode",
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

export default Profile;