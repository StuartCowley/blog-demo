import React, { useState, useEffect } from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

// types
import { PostType } from '../types/post.type';
import { UserType } from '../types/user.type';

// components
import CommentInput from './CommentInput';
import CommentList from './CommentList';

const PostEntry = ({ post, user, children }) => {
    const { title, body } = post;
    const { name } = user;

    const [likeCounter, setLikeCounter] = useState(0);
    const [comments, setComments] = useState([]);

    const updateCounter = () => {
        setLikeCounter(previousCounter => previousCounter + 1);
    };

    const addComment = comment => {
        setComments(prev => [...prev, { uuid: v4(), ...comment }]);
    };

    useEffect(() => {
        return () => {
            console.log(
                `component PostEntry for post ${post.id}, has been unmounted`,
            );
        };
    }, []);

    return (
        <article>
            <h2>{title}</h2>
            <h3>by {name}</h3>
            <p>{body}</p>
            <div>
                <span>{likeCounter}</span>
                <button type="button" onClick={() => updateCounter()}>
                    +
                </button>
                {children}
            </div>
            <CommentInput addComment={addComment} />
            <CommentList comments={comments} />
        </article>
    );
};

PostEntry.propTypes = {
    post: PostType.isRequired,
    user: UserType.isRequired,
    children: PropTypes.node.isRequired,
};

export default PostEntry;
