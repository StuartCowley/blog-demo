import React from 'react';
import PropTypes from 'prop-types';

// types
import { PostType } from '../types/post.type';
import { UserType } from '../types/user.type';

// components
import PostEntry from './PostEntry';

const PostList = ({ posts, users }) => {
    return (posts || []).map(post => {
        const user = users.find(({ id }) => id === post.userId);
        return <PostEntry key={post.id} post={post} user={user} />;
    });
};

PostList.propTypes = {
    posts: PropTypes.arrayOf(PostType).isRequired,
    users: PropTypes.arrayOf(UserType).isRequired,
};

export default PostList;
