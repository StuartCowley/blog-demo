import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CommentInput = ({ addComment }) => {
    const [input, setInput] = useState('');

    const updateComment = value => {
        setInput(value);
    };

    return (
        <>
            <div>
                <textarea
                    value={input}
                    onChange={event => updateComment(event.target.value)}
                    placeholder="comment"
                />
            </div>
            <div>
                <button
                    type="button"
                    onClick={() => {
                        addComment(input);
                        setInput('');
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
