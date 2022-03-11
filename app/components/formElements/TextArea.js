import {TextInput, View, Text, StyleSheet} from 'react-native';

const CustomTextAreaInput = (props) => {
    const {label,
        isMandatory, 
        isMultiLineInput,
        value, 
        onValueChange, 
        onLoaseFocus, 
        keyboardType, 
        helperText, 
        isError, 
        isWarning,
        id,
        isSuccess} = props;
        
        let messageStyle = 
        isError ? styles.errorMessage : isWarning ? styles.warningMessage : isSuccess ? styles.successMessage : {};

        const onInputText = (text) => {
            onValueChange(text,id)
        }

        const onFocusLoase = () => {
            onLoaseFocus(id)
        }

        console.log(props)

    return <View>
        {label.trim().length > 0 && <Text style={styles.inputLabel}>{label}{isMandatory && "*"}</Text>}
        <TextInput style={styles.textInput} 
        value={value} 
        onChangeText={onInputText} 
        onBlur={onFocusLoase} 
        keyboardType = {keyboardType} multiline={isMultiLineInput} numberOfLines={5} />
        {helperText.trim().length > 0 &&
        <Text style={{...styles.message, ...messageStyle}}>
            {helperText}
        </Text>}
    </View>
}

const styles = StyleSheet.create({
    inputContainer:{
        alignItems: 'flex-start',
        justifyContent: "flex-start",
        marginBottom: 3
    },
    textInput:{
        textAlignVertical: "top",
        minWidth: 200,
        borderColor: '#fb2629',
        borderWidth: 1,
        borderRadius: 4,
        paddingVertical: 4,
        paddingHorizontal: 8,
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    inputLabel:{

    },
    message:{

    }
});

export default CustomTextAreaInput