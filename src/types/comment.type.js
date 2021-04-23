import PropTypes from 'prop-types';

export const CommentType = PropTypes.shape({
    uuid: PropTypes.string,
    username: PropTypes.string,
    body: PropTypes.string,
});
