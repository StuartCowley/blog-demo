import React, { useState } from 'react';
import PropTypes from 'prop-types';

// types
import { PostType } from '../types/post.type';
import { UserType } from '../types/user.type';

// components
import LikeCounter from './LikeCounter';

import { PlainLink, StyledArticle } from '../styles/GlobalStyles';

const PostEntrySummary = ({ post, user, children, theme }) => {
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
        <StyledArticle>
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
        </StyledArticle>
    );
};

PostEntrySummary.propTypes = {
    post: PostType.isRequired,
    user: UserType.isRequired,
    theme: PropTypes.string.isRequired,
    children: PropTypes.node,
};

PostEntrySummary.defaultProps = {
    children: undefined,
};

export default PostEntrySummary;
