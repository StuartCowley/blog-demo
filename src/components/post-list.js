import React from 'react';

// components
import PostEntry from './post-entry';

const PostList = ({ posts, users }) => {
    return (posts || []).map(post => {
        const user = users.find(({ id }) => id === post.userId);
        return <PostEntry key={post.id} post={post} user={user} />;
    });
};

PostList.propTypes = {
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            userId: PropTypes.number,
            id: PropTypes.number,
            title: PropTypes.string,
            body: PropTypes.string,
        }),
    ).isRequired,
    users: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            username: PropTypes.string,
            email: PropTypes.string,
            address: PropTypes.shape({
                street: PropTypes.string,
                suite: PropTypes.string,
                city: PropTypes.string,
                zipcode: PropTypes.string,
                geo: PropTypes.shape({
                    lat: PropTypes.string,
                    lng: PropTypes.string,
                }),
            }),
            phone: PropTypes.string,
            website: PropTypes.string,
            company: PropTypes.shape({
                name: PropTypes.string,
                catchPhrase: PropTypes.string,
                bs: PropTypes.string,
            }),
        }),
    ).isRequired,
};

export default PostList;
