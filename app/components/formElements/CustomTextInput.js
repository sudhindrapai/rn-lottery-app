import {Fonts} from '../../constants/Fonts';
import { Colors } from '../../constants/Colors';
import {TextInput, View, Text, StyleSheet, Dimensions} from 'react-native';

const CustomTextInput = (props) => {
    const {label,
        isMandatory, 
        value, 
        onValueChange, 
        onLoaseFocus, 
        keyboardType, 
        helperText, 
        isError, 
        isWarning,
        id,
        placeholder,
        isSuccess} = props;
        
        let messageStyle = 
        isError ? styles.errorMessage : isWarning ? styles.warningMessage : isSuccess ? styles.successMessage : {};

        const onInputText = (text) => {
            onValueChange(text,id)
        }

        const onFocusLoase = () => {
            onLoaseFocus(id)
        }

    return <View>
        {label.trim().length > 0 && <Text style={styles.inputLabel}>{label}{isMandatory && "*"}</Text>}
        <TextInput style={styles.textInput} 
        value={value} 
        placeholder={placeholder}
        onChangeText={onInputText} 
        onBlur={onFocusLoase} 
        keyboardType = {keyboardType} />
        {helperText.trim().length > 0 &&
        <Text style={{...styles.message, ...messageStyle}}>
            {helperText}
        </Text>}
    </View>
}

const styles = StyleSheet.create({
    inputContainer:{
        width: "100%",
        alignItems: 'flex-start',
        justifyContent: "flex-start",
        marginBottom: 3
    },
    inputLabel:{
        fontFamily: Fonts.fontRegular,
        fontSize: 15,
        marginBottom: 6
    },
    textInput:{
        minWidth: Dimensions.get("window").width - 45,
        borderColor: Colors.borderColor,
        color: Colors.textColor,
        fontSize: 14,
        borderWidth: 1,
        borderRadius: 4,
        lineHeight: 21,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 8
    },
    message:{

    }
});

export default CustomTextInput