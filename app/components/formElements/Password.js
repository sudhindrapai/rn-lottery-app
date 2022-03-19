import {Colors} from '../../constants/Colors';
import {Fonts} from '../../constants/Fonts';
import {useState} from 'react';
import {TextInput, View, Text, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

const eyeOn = <Ionicons name={"eye"} size={24} color={"black"} />;
const eyeOff = <Ionicons name={"eye-off"} size={24} color={"black"} />;

const Password = (props) => {
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
        placeHolder,
        isSuccess} = props;

        const [isVisible, setIsVisible] = useState(true)
        
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
        <View style={styles.passwordInput}>
        <TextInput style={styles.textInput}
        placeholder={placeHolder} 
        secureTextEntry={isVisible}
        value={value} 
        onChangeText={onInputText} 
        onBlur={onFocusLoase} 
        keyboardType = {keyboardType} />
        <TouchableOpacity onPress={() => {
            setIsVisible(!isVisible);
        }} >
            {isVisible ? eyeOn : eyeOff}
        </TouchableOpacity>
        </View>
        {helperText.trim().length > 0 &&
        <Text style={{...styles.message, ...messageStyle}}>
            {helperText}
        </Text>}
    </View>
}

const styles = StyleSheet.create({
    passwordInput:{
        flexDirection: "row",
        alignItems: "center",
        borderColor: Colors.textInput,
        borderWidth: 1,
        borderRadius: 4,
        width: Dimensions.get("window").width - 45
    },
    inputContainer:{
        alignItems: 'flex-start',
        justifyContent: "flex-start",
        width: "100%"
    },
    textInput:{
        minWidth: Dimensions.get("window").width - 85,
        color: Colors.textColor,
        fontSize: 14,
        borderRadius: 4,
        lineHeight: 21,
        paddingVertical: 8,
        paddingHorizontal: 16
    },
    inputLabel:{
        fontFamily: Fonts.fontRegular,
        fontSize: 15,
        marginBottom: 6,
        textTransform: "capitalize"
    },
    message:{

    }
});

export default Password