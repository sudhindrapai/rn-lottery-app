import {useState, useMemo} from "react";
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from "react-native";

// {
//     type:"SELECT",
//     label:"Select",
//     id:"select",
//     value:[
//         {
//             id: "11",
//             label:"Male",
//             value:"Male",
//             isSelected: true
//         },
//         {
//             id: "21",
//             label:"Female",
//             value:"female",
//             isSelected: false
//         },
//         {
//             id: "31",
//             label:"Other",
//             value:"Others",
//             isSelected: false
//         }
//     ],
//     helperText: "",
//     isMandatory: true,
//     isTouched:false,
//     maxLength:100,
//     isError:false,
//     isWarning: false,
//     isSuccessMessage:false,
//     isCustomValidationRequired: true,
//     keyboardType: "default",
//     customValidationType: "EMAIL"
// },

const SelectInput = (props) => {

    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

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
        isSuccess} = props;

        let messageStyle = 
        isError ? styles.errorMessage : isWarning ? styles.warningMessage : isSuccess ? styles.successMessage : {};

        const onInputText = (text) => {
            onValueChange(text,id)
        }

        const onFocusLoase = () => {
            onLoaseFocus(id)
        }

        const dropdownOption = (itemObj) => {
            return <TouchableOpacity style={styles.dropdownOption}>
                <Text>{itemObj.item.label}</Text>
                </TouchableOpacity>
        }

        let slectDropdown = isDropdownVisible ? 
        <FlatList data={value} renderItem={dropdownOption} />: null;

        const SelectedValueObj = value.filter(option => option.isSelected)[0];
        let selectedView = null;
        console.log(SelectedValueObj,Object.keys(SelectedValueObj).length,'Object.keys(SelectedValueObj).length')
        if (Object.keys(SelectedValueObj).length > 0) {
            selectedView = <TouchableOpacity style={styles.selectDropdown} onPress={() => {setIsDropdownVisible(!isDropdownVisible)}}>
                <Text>{SelectedValueObj.label}</Text>
            </TouchableOpacity>;
        } else {
            selectedView = <TouchableOpacity style={styles.selectDropdown} onPress={() => {setIsDropdownVisible(!isDropdownVisible)}}>
            <Text>-- Select --</Text>
        </TouchableOpacity>;
        }

    return <View>
        {label.trim().length > 0 && <Text style={styles.inputLabel}>{label}{isMandatory && "*"}</Text>}
        <View>
        {selectedView}
        {slectDropdown}
        </View>
        {helperText.trim().length > 0 &&
        <Text style={{...styles.message, ...messageStyle}}>
            {helperText}
        </Text>}
    </View>

}

const styles = StyleSheet.create({
    dropdownOption:{},
    selectDropdown:{
        width: 200,
        borderColor: "#fb2629",
        borderWidth:2
    }
})

export default SelectInput