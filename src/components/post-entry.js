import PropTypes from 'prop-types';

    const { title, body } = post;
    const { name } = user;
    return (
        <article>
            <h2>{title}</h2>
            <h3>by {name}</h3>
            <p>{body}</p>
        </article>
    );
};

PostEntry.propTypes = {
    post: PropTypes.shape({
        userId: PropTypes.number,
        id: PropTypes.number,
        title: PropTypes.string,
        body: PropTypes.string,
    }).isRequired,
    user: PropTypes.shape({
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
    }).isRequired,
};

export default PostEntry;
