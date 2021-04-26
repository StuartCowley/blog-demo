import React from 'react';
import PropTypes from 'prop-types';
import { CommentType } from '../types/comment.type';

const CommentList = ({ comments }) => {
    return (
        <ul>
            {comments.map(comment => (
                <li key={comment.id} data-testid="comment">
                    <p>
                        <strong>{comment.name}: </strong>
                        {comment.body}
                    </p>
                </li>
            ))}
        </ul>
    );
};

CommentList.propTypes = {
    comments: PropTypes.arrayOf(CommentType).isRequired,
};

export default CommentList;
