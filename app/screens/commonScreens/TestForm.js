import {useState} from "react";
import {View, Text, StyleSheet, ScrollView, SafeAreaView, KeyboardAvoidingView,Button} from 'react-native';
import {Fonts} from '../../constants/Fonts'
import FormBuilder from "../../components/FormBuilder";
import {updateFormInputState} from '../../utility/utility';

import {useDispatch, useSelector} from 'react-redux';
import * as action from '../../store/actions/index';

const Login = (props) => {

    const dispatch = useDispatch();

    const accessToken = useSelector(state => state.auth.accessToken)

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
        },
        {
            type:"INPUT",
            label:"Contact Number",
            id:"contactNumber",
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
            type:"DATEPICKER",
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
            keyboardType: "default",
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
            isCustomValidationRequired: true,
            keyboardType: "default",
            customValidationType: "EMAIL"
        },
        {
            type:"TEXTAREA",
            label:"Address",
            id:"emailId1",
            value:"",
            helperText: "",
            isMandatory: true,
            isTouched:false,
            maxLength:100,
            isError:false,
            isWarning: false,
            isSuccess:false,
            isCustomValidationRequired: true,
            keyboardType: "default",
            customValidationType: "EMAIL",
            isMultiLineInput: true
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
            customValidationType: "EMAIL",
            isMultiLineInput: false
        },
        {
            type:"CHECKBOX",
            label:"Gendar",
            id:"gendar1",
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
            customValidationType: "EMAIL",
            isMultiLineInput: false
        }
    ]);

    const  updateInput = (text, id) => {
        setFormElement(updateFormInputState(text, id, formElement))
    }
    
    const onLoaseFocus = () => {}

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
            <Text style={{fontFamily:Fonts.fontBold}}>
                Login {accessToken}
            </Text>
            {form}
            <Button title={"create an account"} onPress={() => {
                // props.navigation.navigate('signupScreen')
                dispatch(action.createLogin())
            }} />
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

export default Login;