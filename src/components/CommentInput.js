import React, { useContext } from 'react';
import PropTypes from 'prop-types';

// custom hook
import { useForm } from '../hooks/useForm';

// contexts
import { ThemeConfig, ThemeContext } from '../contexts/ThemeContext';

const CommentInput = ({ addComment, postId }) => {
    const [input, setInput, resetInput] = useForm({
        name: '',
        email: '',
        body: '',
        postId,
        identityConsent: false,
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
                <input
                    style={ThemeConfig[theme]}
                    type="text"
                    name="email"
                    value={input.email}
                    onChange={setInput}
                    placeholder="email"
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
                <label htmlFor="identityConsent">
                    <input
                        type="checkbox"
                        name="identityConsent"
                        id="identityConsent"
                        onChange={setInput}
                    />
                    Show my name and email
                </label>
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
