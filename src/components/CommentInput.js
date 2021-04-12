import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from '../hooks/useForm';

const CommentInput = ({ addComment }) => {
    const [input, setInput, resetInput] = useForm({ username: '', body: '' });

    const handleSubmit = event => {
        event.preventDefault();
        resetInput();
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input
                    type="text"
                    name="username"
                    value={input.username}
                    onChange={setInput}
                    placeholder="username"
                />
            </div>
            <div>
                <textarea
                    name="body"
                    value={input.body}
                    onChange={setInput}
                    placeholder="comment"
                />
            </div>
            <div>
                <button type="submit" onClick={() => addComment(input)}>
                    submit
                </button>
            </div>
        </form>
    );
};

CommentInput.propTypes = {
    addComment: PropTypes.func.isRequired,
};

export default CommentInput;
