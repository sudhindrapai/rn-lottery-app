import {View, StyleSheet} from 'react-native';
import CustomTextInput from './formElements/CustomTextInput';
import Password from './formElements/Password';
import CustomTextAreaInput from './formElements/TextArea';
import RadioButton from './formElements/RadioButtons';
import Checkbox from './formElements/Checkbox';
import SelectInput from './formElements/SelectInput';
import DatePicker from './formElements/DatePicker';

const FormBuilder = (props) => {
    let formElement = null;
    
 switch (props.type){
        case 'INPUT':
            formElement = <View style={styles.inputSection} ><CustomTextInput 
            id={props.id}
            label={props.label} 
            helperText={props.helperText} 
            isMandatory={props.isMandatory} 
            value={props.value} 
            onValueChange={props.onInputChange}
            onLoaseFocus={props.onLoaseFocus}
            keyboardType={props.keyboardType} 
            isError={props.isError} 
            isWarning={props.isWarning} 
            isSuccess={props.isSuccess} />
            </View>
            break;
            case 'PASSWORD':
                formElement = <Password 
                id={props.id}
            label={props.label} 
            isMultiLineInput={props.isMultiLineInput}
            helperText={props.helperText} 
            isMandatory={props.isMandatory} 
            value={props.value} 
            onValueChange={props.onInputChange}
            onLoaseFocus={props.onLoaseFocus}
            keyboardType={props.keyboardType} 
            isError={props.isError} 
            isWarning={props.isWarning} 
            isSuccess={props.isSuccess} />;
                break;
                case 'SELECT':
                    formElement = <SelectInput 
            id={props.id}
            label={props.label} 
            helperText={props.helperText} 
            isMandatory={props.isMandatory} 
            value={props.value} 
            onValueChange={props.onInputChange}
            onLoaseFocus={props.onLoaseFocus}
            keyboardType={props.keyboardType} 
            isError={props.isError} 
            isWarning={props.isWarning} 
            isSuccess={props.isSuccess} />
                    break;
            case 'TEXTAREA':
                formElement = <CustomTextAreaInput 
                id={props.id}
            label={props.label} 
            isMultiLineInput={props.isMultiLineInput}
            helperText={props.helperText} 
            isMandatory={props.isMandatory} 
            value={props.value} 
            onValueChange={props.onInputChange}
            onLoaseFocus={props.onLoaseFocus}
            keyboardType={props.keyboardType} 
            isError={props.isError} 
            isWarning={props.isWarning} 
            isSuccess={props.isSuccess} />;
            break;
            case 'RADIOGROUP':
                formElement = <RadioButton 
                id={props.id}
            label={props.label} 
            helperText={props.helperText} 
            isMandatory={props.isMandatory} 
            value={props.value} 
            onValueChange={props.onInputChange}
            onLoaseFocus={props.onLoaseFocus}
            keyboardType={props.keyboardType} 
            isError={props.isError} 
            isWarning={props.isWarning} 
            isSuccess={props.isSuccess} />;
                break;
                case 'CHECKBOX':
                    formElement = <Checkbox 
                    id={props.id}
            label={props.label} 
            helperText={props.helperText} 
            isMandatory={props.isMandatory} 
            value={props.value} 
            onValueChange={props.onInputChange}
            onLoaseFocus={props.onLoaseFocus}
            keyboardType={props.keyboardType} 
            isError={props.isError} 
            isWarning={props.isWarning} 
            isSuccess={props.isSuccess} />;
            break;
            case "DATEPICKER":
                formElement = <DatePicker />;
                break;
        default:
            formElement = null;
    }

    return formElement
};

const styles = StyleSheet.create({
    inputSection:{
        marginVertical: 10
    }
})

export default FormBuilder