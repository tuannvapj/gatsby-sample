import React, { useState, useContext } from 'react';

import { FirebaseContext } from '../components/Firebase';
import { Form, Input, Button, ErrorMessage } from '../components/common';

const Login = () => {

    const [formValue, setFormValues] = useState({email: '', password: ''});
    const [errorMessage, setErrorMessage] = useState('');
    const {firebase} = useContext(FirebaseContext);

    function handleSubmit(e) {
        e.preventDefault();

        firebase.login({email: formValue.email, password: formValue.password})
            .catch(error => {
                setErrorMessage(error.message)
                console.log(error);
            });
    }

    function handleInputChange(e) {
        e.persist();
        setFormValues(currentValue => ({
            ...currentValue,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <section>
            <Form onSubmit={handleSubmit}>
                <Input value={formValue.email} name="email" 
                        onChange={handleInputChange} placeholder="Email" type="email" />
                <Input value={formValue.password} name="password" 
                        onChange={handleInputChange} placeholder="Pasword" type="password" />
                {!!errorMessage &&
                    <ErrorMessage>{errorMessage}</ErrorMessage>
                }
                <Button type="submit" block>
                    Login
                </Button>
            </Form>
        </section>
    );
}

export default Login;