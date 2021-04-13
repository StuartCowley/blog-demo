import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const LikeCounter = ({ likeCounter, handleClick }) => {
    return (
        <>
            <span>{likeCounter}</span>
            <button type="button" onClick={() => handleClick()}>
                +
            </button>
        </>
    );
};

export default LikeCounter;

LikeCounter.propTypes = {
    likeCounter: PropTypes.number.isRequired,
    handleClick: PropTypes.func.isRequired,
};
