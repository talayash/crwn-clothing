import {FormInputLabel, Group, Input} from './form-input.styles';

// Form Input Component
const FormInput = ({ label, ...otherProps }) => {
    return (
        <Group>
            <Input {...otherProps} />
            {label && (
                <FormInputLabel shrink={otherProps.value.length}>
                    { label }
                </FormInputLabel>
            )}
        </Group>
    )
}

export default FormInput;