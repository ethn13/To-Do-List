import { elements } from '../base';

export const renderForm = () => {
    elements.inputForm.style.transform = "scale(1.1)";
}

export const clearForm = () => {
    elements.inputTitle.value = '';
    elements.inputDescription.value = '';
    elements.inputForm.style.transform = "scale(0)";
}

export const getInputTitle = () => {
    return elements.inputTitle.value;
}

export const getInputDescription = () => {
    return elements.inputDescription.value;
}