import { useState, useContext } from "react";
import { UserContext } from "../../context/user.context";
import {
    createAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth,
    signInWithGooglePopup,
    signInAuthUserWithEmailAndPassword
} from '../../utils/firebase/firebase.utils';
import  FormInput  from '../form-input/form-input.component';
import Button from "../button/button.component";
import './sign-in-form.styles.scss'

// Form Field Template
const defaultFormFields = {
    email: '',
    password: '',
}

// Sign In Form Component
const SignInForm = () => {
    // Initialize necessary variables
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;
    const { setCurrentUser } = useContext(UserContext)

    // Reset form field values
    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    // Handle submit
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // Sign in with email and password
            const user = await signInAuthUserWithEmailAndPassword(email, password);
            // Set current user context
            setCurrentUser(user);
            resetFormFields();
        }
        catch(error){
            switch (error.code) {
                case 'auth/wrong-password': {
                    alert('Incorrect password for email!');
                    break;
                }
                case 'auth/user-not-found': {
                    alert('No user associated with this email!');
                    break;
                }
                default:
                    console.log(error);
            }
        }
    }

    // Handle changes
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({...formFields, [name]: value});
    };

    // Login function
    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    };

    // Return
    return(
        <div className={'sign-in-container'}>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>

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

                <div className='buttons-container'>
                    <Button type="submit">Sign In</Button>
                    <Button type="button" buttonType='google' onClick={signInWithGoogle}>Google Sign In</Button>
                </div>

            </form>
        </div>
    )
}
export default SignInForm;