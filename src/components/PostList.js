import React from 'react';
import PropTypes from 'prop-types';

// types
import { PostType } from '../types/post.type';
import { UserType } from '../types/user.type';

// components
import PostEntrySummary from './PostEntrySummary';

const PostList = ({ posts, users, removePost, theme }) => {
    return (posts || []).map(post => {
        const user = users.find(({ id }) => id === post.userId);
        return (
            <div className="post-entry" key={post.id}>
                <PostEntrySummary post={post} user={user} theme={theme}>
                    <button type="button" onClick={() => removePost(post.id)}>
                        remove
                    </button>
                </PostEntrySummary>
            </div>
        );
    });
};

PostList.propTypes = {
    posts: PropTypes.arrayOf(PostType).isRequired,
    users: PropTypes.arrayOf(UserType).isRequired,
    removePost: PropTypes.func.isRequired,
    theme: PropTypes.string.isRequired,
};

export default PostList;
