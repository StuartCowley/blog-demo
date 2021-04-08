import PropTypes from 'prop-types';

export const CommentType = PropTypes.shape({
    username: PropTypes.string,
    body: PropTypes.string,
});
