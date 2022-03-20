import {Colors} from '../constants/Colors';
import {Fonts} from '../constants/Fonts';
import {Text, StyleSheet, Pressable, Platform ,TouchableOpacity, TouchableWithoutFeedback, Dimensions} from 'react-native';

const CustonButton = (props) => {

    let ButtonWrapper = TouchableOpacity;

    if (Platform.OS === "android" && Platform.Version > 21) {
        ButtonWrapper = TouchableWithoutFeedback
    }

    let variantStyle = styles.btn;

    if (props.variant == 'gold') {
        variantStyle = styles.bgGold
    }

    return(<Pressable onPress={props.clicked} style={{...styles.btn, ...variantStyle}}>
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
    },
    bgGold:{
        backgroundColor: Colors.colorGold,
        width: "100%",
        maxWidth: Dimensions.get("window").width - 45
    }
})

export default CustonButton