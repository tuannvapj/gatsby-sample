import React, {useState, useContext} from 'react';
import { Form, Input, Button} from '../components/common';
import {FirebaseContext} from '../components/Firebase'

const AddAuthor = () => {

    const {firebase} = useContext(FirebaseContext);
    const [authorName, setAuthorName] = useState('');
    const [succes, setSucces] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        firebase.createAuthor({authorName})
            .then(() => {
                setAuthorName('');
                setSucces(true);
            });
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Input onChange={(e) => {
                    e.persist();
                    setSucces(false);
                    setAuthorName(e.target.value);
                }} value={authorName} placeholder="Author name"/>
                {!!succes &&
                    <span>
                        Author created succesfully!
                    </span>
                }
                <Button type="submit" block>
                    Add new author
                </Button>
            </Form>
        </div>
    );
};

export default AddAuthor;