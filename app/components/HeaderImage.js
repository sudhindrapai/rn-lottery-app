import {Image, StyleSheet} from 'react-native';

const HeaderImage = () => {
    return(<Image source={require("../images/headerLogo.png")} resizeMode={"contain"} style={styles.image} />)
};

const styles = StyleSheet.create({
    image:{
        height: 50,
        width: 70,
        width: "100%",
        marginTop: 30,
        alignItems: "center",
        justifyContent: "center"
    }
})

export default HeaderImage