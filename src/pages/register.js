import React from 'react';
import { Form, Input, Button } from '../components/common';

const Register = () => {

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Input placeholder="Email" type="email" required />
            <Input placeholder="Password" type="password" required minLength={3} />
            <Input placeholder="Confirm Password" type="password" required minLength={3} />
            <Button type="submit" block>Register</Button>
        </Form>
    )
}

export default Register;