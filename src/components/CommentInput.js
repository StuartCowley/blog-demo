import React, { useContext } from 'react';
import PropTypes from 'prop-types';

// custom hook
import { useForm } from '../hooks/useForm';

// contexts
import { ThemeConfig, ThemeContext } from '../contexts/ThemeContext';

const CommentInput = ({ addComment, postId }) => {
    const [input, setInput, resetInput] = useForm({
        name: '',
        body: '',
        postId,
    });
    const { theme } = useContext(ThemeContext);

    const handleSubmit = event => {
        event.preventDefault();
        addComment({ ...input });
        resetInput(event);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input
                    style={ThemeConfig[theme]}
                    type="text"
                    name="name"
                    value={input.name}
                    onChange={setInput}
                    placeholder="name"
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
                <button type="submit">submit</button>
            </div>
        </form>
    );
};

CommentInput.propTypes = {
    addComment: PropTypes.func.isRequired,
    postId: PropTypes.number.isRequired,
};

export default CommentInput;
