import React from 'react';
import PropTypes from 'prop-types';

// custom hook
import { useForm } from '../hooks/useForm';

const Create = ({ addPost }) => {
    const [{ title, body }, setInput, resetInput] = useForm({
        title: '',
        body: '',
    });

    const handleSubmit = event => {
        event.preventDefault();
        addPost({ title, body, userId: 1 });
        resetInput(event);
    };

    return (
        <>
            <h2>Add a new Blog Post</h2>
            <form onSubmit={handleSubmit}>
                <input
                    name="title"
                    type="text"
                    placeholder="Blog Post Title"
                    value={title}
                    onChange={setInput}
                />
                <textarea
                    name="body"
                    placeholder="Blog Post Content"
                    value={body}
                    onChange={setInput}
                />
                <button type="submit">submit</button>
            </form>
        </>
    );
};

Create.propTypes = {
    addPost: PropTypes.func.isRequired,
};

export default Create;
