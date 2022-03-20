import {ScrollView,SafeAreaView, KeyboardAvoidingView, ImageBackground, StyleSheet} from 'react-native';

const AuthWiewWrapper = (props) => {
    return (
    <ImageBackground source={require("../assets/authScreenBgImage.png")} 
            resizeMode={"contain"} style={styles.wrapperImage}>
        <SafeAreaView>
            <ScrollView>
                <KeyboardAvoidingView keyboardVerticalOffset={10}>
                    {props.children}
                </KeyboardAvoidingView>
            </ScrollView>
        </SafeAreaView>
    </ImageBackground>)
}

const styles = StyleSheet.create({
    wrapperImage:{
        flex:1,
        height:"100%",
        backgroundColor: "#ffffff"
    }
});

export default AuthWiewWrapper