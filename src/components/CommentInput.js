import React, { useContext, useState, useEffect } from 'react';
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

    const [checkbox, setCheckbox] = useState(false);

    const handleCheckbox = () => {
        setCheckbox(!checkbox);
    };

    useEffect(() => {
        console.log(checkbox);
    }, [checkbox]);

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
                <label htmlFor="identityConsent">
                    <input
                        type="checkbox"
                        name="identityConsent"
                        id="identityConsent"
                        onChange={() => handleCheckbox()}
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
