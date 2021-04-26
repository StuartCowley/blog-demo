import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// types
import { PostType } from '../types/post.type';
import { UserType } from '../types/user.type';

// components
import LikeCounter from './LikeCounter';

const PostEntrySummary = ({ post, user, children }) => {
    const { title, body } = post;
    const { name } = user;

    const [likeCounter, setLikeCounter] = useState(0);

    const increaseCounter = () => {
        setLikeCounter(previousCounter => previousCounter + 1);
    };

    const decreaseCounter = () => {
        setLikeCounter(previousCounter => previousCounter - 1);
    };

    return (
        <article>
            <h2>
                <Link to={`post/${post.id}`}>{title}</Link>
            </h2>
            <h3>by {name}</h3>
            <p>{body}</p>
            <div>
                <LikeCounter
                    likeCounter={likeCounter}
                    handleIncreaseCounter={increaseCounter}
                    handleDecreaseCounter={decreaseCounter}
                />
                {children || ''}
            </div>
        </article>
    );
};

PostEntrySummary.propTypes = {
    post: PostType.isRequired,
    user: UserType.isRequired,
    children: PropTypes.node,
};

PostEntrySummary.defaultProps = {
    children: undefined,
};

export default PostEntrySummary;
