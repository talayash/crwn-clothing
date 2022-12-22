import {useContext, useState} from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import  FormInput  from '../form-input/form-input.component';
import Button from "../button/button.component";
import './sign-up-form.styles.scss';
import { UserContext } from "../../context/user.context";

// Form Field Template
const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}
// Sign Up Form Component
const SignUpForm = () => {
    // Initialize necessary variables
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;
    const { setCurrentUser } = useContext(UserContext);

    // Reset form field values
    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    // Handle submit
    const handleSubmit = async (event) => {
        event.preventDefault();

        if(password !== confirmPassword) {
            alert('Password do not match!');
            return;
        }

        try {
            // Sign in with email and password
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            // Add additional information to database (display name and timestamp)
            await createUserDocumentFromAuth(user, { displayName });
            // Set current user into context
            setCurrentUser(user);
            resetFormFields();
        }
        catch(error){
            console.error('User creation encountered an error.' ,error);
        }
    }

    // Handle changes
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({...formFields, [name]: value});
    };

    // Return
    return(
        <div className={'sign-up-container'}>
            <h2>Don't have an account?</h2>
            <span>Sign Up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label='Display Name'
                    type="text"
                    required
                    onChange={handleChange}
                    name="displayName"
                    value={displayName}
                />

                <FormInput
                    label='Email'
                    type="email"
                    required
                    onChange={handleChange}
                    name="email"
                    value={email}
                />

                <FormInput
                    label='Password'
                    type="password"
                    required
                    onChange={handleChange}
                    name="password"
                    value={password}
                />

                <FormInput
                    label='Confirm Password'
                    type="password"
                    required
                    onChange={handleChange}
                    name="confirmPassword"
                    value={confirmPassword}
                />

                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    )
}
export default SignUpForm;