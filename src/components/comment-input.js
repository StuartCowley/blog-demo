import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CommentInput = ({ addComment }) => {
    const defaultEmptyInput = { username: '', inputValue: '' };
    const [input, setInput] = useState(defaultEmptyInput);

    const updateComment = (name, value) => {
        setInput(prev => ({ ...prev, [name]: value }));
    };

    return (
        <>
            <div>
                <input
                    type="text"
                    name="username"
                    value={input.username}
                    onChange={event =>
                        updateComment(event.target.name, event.target.value)
                    }
                    placeholder="username"
                />
            </div>
            <div>
                <textarea
                    name="inputValue"
                    value={input.inputValue}
                    onChange={event =>
                        updateComment(event.target.name, event.target.value)
                    }
                    placeholder="comment"
                />
            </div>
            <div>
                <button
                    type="button"
                    onClick={() => {
                        addComment(input);
                        setInput(defaultEmptyInput);
                    }}
                >
                    submit
                </button>
            </div>
        </>
    );
};

CommentInput.propTypes = {
    addComment: PropTypes.func.isRequired,
};

export default CommentInput;
