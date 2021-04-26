import PropTypes from 'prop-types';

export const CommentType = PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    body: PropTypes.string,
    email: PropTypes.string,
});
