import React, {useState, useContext} from 'react';
import { Form, Input, Button, ErrorMessage } from '../components/common';
import {FirebaseContext} from '../components/Firebase';

const Register = () => {

    const [formValues, setFormValues] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        username: ''
    });
    const [errorMessage, setErrorMessage] = useState('');

    const {firebase} = useContext(FirebaseContext);

    function handleInputChange(e) {
        e.persist();
        setErrorMessage('');
        setFormValues(currentValue => ({
            ...currentValue,
            [e.target.name]: e.target.value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (formValues.password === formValues.confirmPassword){
            firebase.register({
                username: formValues.username,
                email: formValues.email, 
                password: formValues.password
            }).catch(error => {
                setErrorMessage(error.message);
            });
        } else {
            setErrorMessage('Passwor and Confir Password fields must match.');
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Input onChange={handleInputChange} value={formValues.username} placeholder="User Name" type="text" required name='username'/>
            <Input onChange={handleInputChange} value={formValues.email} placeholder="Email" type="email" required name='email'/>
            <Input onChange={handleInputChange} value={formValues.password} placeholder="Password" type="password" required name='password' minLength={6} />
            <Input onChange={handleInputChange} value={formValues.confirmPassword} placeholder="Confirm Password" type="password" required name='confirmPassword' minLength={6} />
            {!!errorMessage &&
                <ErrorMessage>{errorMessage}</ErrorMessage>
            }
            <Button type="submit" block>Register</Button>
        </Form>
    )
}

export default Register;