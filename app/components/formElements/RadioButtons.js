import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const RadioButton = (props) => {

    const onSelectOption = (id) => {
        let updatedArray = [...props.value];
        updatedArray.forEach((obj) => {
            obj["isSelected"] = parseInt(obj.id) === parseInt(id)
        });
        props.onValueChange(updatedArray,props.id);
    }

    return (props.value).map((radioOption) => {
        return <TouchableOpacity onPress={() => {onSelectOption(radioOption.id)}}>
            <Text>{radioOption.label}</Text>
            <View>{radioOption.isSelected ? 
                <Ionicons name="radio-button-on-sharp" size={24} color="black" />: 
                <Ionicons name="radio-button-off-sharp" size={24} color="black" />}
            </View>
        </TouchableOpacity>
    })
}

export default RadioButton