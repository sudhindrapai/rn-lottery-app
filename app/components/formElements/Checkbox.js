import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';
import { Feather } from '@expo/vector-icons'; 

const Checkbox = (props) => {

    const onSelectOption = (id) => {
        let updatedArray = [...props.value];
        updatedArray.forEach((obj) => {
            obj["isSelected"] = parseInt(obj.id) === parseInt(id) ? !obj.isSelected : obj.isSelected
        });
        props.onValueChange(updatedArray,props.id);
    }

    const selectedCheckbox = <Feather name="check-square" size={24} color="black" />;
    const emptyCheckbox = <View style={styles.emptyCheckbox}></View>
    return((props.value).map((option) => {
        return(<TouchableOpacity onPress={() => {onSelectOption(option.id)}} >
            <Text>{option.label}</Text>
            <View>
                {option.isSelected ? selectedCheckbox : emptyCheckbox}
            </View>
            </TouchableOpacity>)
    }))
}

const styles = StyleSheet.create({
    emptyCheckbox:{
        height: 22,
        width: 22,
        borderWidth: 2,
        borderRadius: 4,
        borderColor: '#000000'
    }
})

export default Checkbox;