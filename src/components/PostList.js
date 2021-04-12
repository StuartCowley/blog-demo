import React from 'react';
import PropTypes from 'prop-types';

// types
import { PostType } from '../types/post.type';
import { UserType } from '../types/user.type';

// components
import PostEntry from './PostEntry';

const PostList = ({ posts, users, removePost }) => {
    return (posts || []).map(post => {
        const user = users.find(({ id }) => id === post.userId);
        return (
            <div key={post.id}>
                <PostEntry post={post} user={user}>
                    <button type="button" onClick={() => removePost(post.id)}>
                        remove
                    </button>
                </PostEntry>
            </div>
        );
    });
};

PostList.propTypes = {
    posts: PropTypes.arrayOf(PostType).isRequired,
    users: PropTypes.arrayOf(UserType).isRequired,
    removePost: PropTypes.func.isRequired,
};

export default PostList;
