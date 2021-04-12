import React, { useContext } from 'react';
import PropTypes from 'prop-types';

// custom hook
import { useForm } from '../hooks/useForm';

// contexts
import { ThemeConfig, ThemeContext } from '../contexts/ThemeContext';

const CommentInput = ({ addComment }) => {
    const [input, setInput, resetInput] = useForm({ username: '', body: '' });
    const { theme } = useContext(ThemeContext);

    const handleSubmit = event => {
        event.preventDefault();
        resetInput();
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input
                    style={ThemeConfig[theme]}
                    type="text"
                    name="username"
                    value={input.username}
                    onChange={setInput}
                    placeholder="username"
                />
            </div>
            <div>
                <textarea
                    style={ThemeConfig[theme]}
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
