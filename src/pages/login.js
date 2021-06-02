import React, { useState, useContext } from 'react';
import { FirebaseContext } from '../components/Firebase';

const Login = () => {

    const [formValue, setFormValues] = useState({email: '', password: ''});
    const {firebase} = useContext(FirebaseContext);

    function handleSubmit(e) {
        e.preventDefault();

        firebase.login({email: formValue.email, password: formValue.password});
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
            <form onSubmit={handleSubmit}>
                <input value={formValue.email} name="email" 
                        onChange={handleInputChange} placeholder="Email" type="email" />
                <input value={formValue.password} name="password" 
                        onChange={handleInputChange} placeholder="Pasword" type="password" />
                <button type="submit">
                    Login
                </button>
            </form>
        </section>
    );
}

export default Login;