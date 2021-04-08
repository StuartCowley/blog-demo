import React from 'react';
import PropTypes from 'prop-types';

const CommentInput = ({ addComment }) => {
    return (
        <>
            <div>
                <textarea placeholder="comment" />
            </div>
            <div>
                <button
                    type="button"
                    onClick={() => {
                        addComment('comment');
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
