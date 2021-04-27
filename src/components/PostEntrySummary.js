import React, { useState } from 'react';
import PropTypes, { string } from 'prop-types';

// types
import { PostType } from '../types/post.type';
import { UserType } from '../types/user.type';

// components
import LikeCounter from './LikeCounter';

import { PlainLink } from '../styles/GlobalStyles';

const PostEntrySummary = ({ post, user, theme, children }) => {
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
                <PlainLink theme={theme} to={`post/${post.id}`}>
                    {title}
                </PlainLink>
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
    theme: string.isRequired,
    children: PropTypes.node,
};

PostEntrySummary.defaultProps = {
    children: undefined,
};

export default PostEntrySummary;
