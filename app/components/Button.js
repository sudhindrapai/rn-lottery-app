import {Colors} from '../constants/Colors';
import {Fonts} from '../constants/Fonts';
import {Text, StyleSheet, Pressable, Platform ,TouchableOpacity, TouchableWithoutFeedback} from 'react-native';

const CustonButton = (props) => {

    let ButtonWrapper = TouchableOpacity;

    if (Platform.OS === "android" && Platform.Version > 21) {
        ButtonWrapper = TouchableWithoutFeedback
    }

    return(<Pressable onPress={props.clicked} style={{...styles.btn}}>
        <Text style={styles.buttonText}>{props.label}</Text>
    </Pressable>)
}

const styles = StyleSheet.create({
    btn:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 16,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: Colors.primary,
    },
    buttonText:{
        fontSize: 14,
        fontFamily: Fonts.fontMedium,
        color: Colors.white,
        textTransform:'uppercase'
    }
})

export default CustonButton