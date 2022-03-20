const emailRegex = new RegExp(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/);
const characterRegex = new RegExp(/^[a-zA-Z. ]*$/);
const numberRegex = new RegExp(/^[0-9]*$/)

export const validateEmail = (email)  => {
   return emailRegex.test(email);
}

export const characterValidation = (value) => {
    let updatedString  = value.split("").map((character) => {
        if (characterRegex.test(character)) {
            return character;
        } else {
            return "";
        }
    }).join("");
    return updatedString;
}

export const numberValidation = (value) => {
    let updatedString  = value.split("").map((character) => {
        if (numberRegex.test(character)) {
            return character;
        } else {
            return "";
        }
    }).join("");
    return updatedString;
}

export const mobileNumberValidation = (value) => {
    let updatedNumbers = numberValidation(value);
    let message = "";

    if (updatedNumbers.length < 10) {
        message = "Invalid mobile number;"
    }

    return {
        value: updatedNumbers.slice(0,10),
        errorMessage: message
    }
}

// method to return updated form input value state
export const updateFormInputState = (value, id, formElements) => {
    let updatedArry = formElements.map((formObj) => {
        if (formObj.id === id) {
            let obj = Object.assign(formObj);
            let validatedObj = validateFormElement(obj.customValidationType, value, obj.isMandatory, formObj.isCustomValidationRequired);
             obj["value"] = validatedObj.value;
             obj["isTouched"] = true;
             obj["helperText"] = validatedObj.errorMessage;
            obj["isError"] = validatedObj.errorMessage.length > 0;
             return obj;
        } else {
            return formObj;
        }
    });
    return updatedArry
};

// method will validate the input with empty and custom validation
const validateFormElement = (validationType, value, isRequired, customValidationRequired) => {
    let updatedValue = value;
    let validatedObj = {
        value: updatedValue,
        isValidInput: false,
        errorMessage: ""
    }
    if (isRequired && updatedValue.length === 0) {
        return {
            value: updatedValue,
            isValidInput: false,
            errorMessage: "value should not be empty",
        }
    }

    if (customValidationRequired && updatedValue.length > 0) {
        switch (validationType) {
            case "EMAIL":
                return validatedObj = {
                    value: updatedValue,
                    isValidInput: validateEmail(updatedValue),
                    errorMessage: validateEmail(updatedValue) ? "" : "Invalid email id"
                }
            case "CHARACTER_VALIDATION":
                return validatedObj = {
                    value: characterValidation(updatedValue),
                    isValidInput: true,
                    errorMessage: ""
                }
            case "MOBILE_NUMBER":
                let mobileValidateObj = mobileNumberValidation(updatedValue);
                return{
                    value: mobileValidateObj.value,
                    isValidInput: mobileValidateObj.errorMessage.length > 0,
                    errorMessage: mobileValidateObj.errorMessage
                }
                default: return validatedObj;
        }
    }
    return validatedObj
}

const updateTouchStatus = (id, values) => {
    
};

// method to validate complete form
export const validateForm = (formElements) => {
    let isValidForm = true;
    for (let element of formElements) {
        if (element.isRequired || element.isCustomValidationRequred && element.errorMessage.length > 0) {
            isValidForm = false;
            break;
        }
    }
    return isValidForm
} 
