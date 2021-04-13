import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const LikeCounter = ({
    likeCounter,
    handleIncreaseCounter,
    handleDecreaseCounter,
}) => {
    return (
        <>
            <span>{likeCounter}</span>
            <button type="button" onClick={() => handleIncreaseCounter()}>
                +
            </button>
            {likeCounter > 0 && (
                <button type="button" onClick={() => handleDecreaseCounter()}>
                    -
                </button>
            )}
        </>
    );
};

export default LikeCounter;

LikeCounter.propTypes = {
    likeCounter: PropTypes.number.isRequired,
    handleIncreaseCounter: PropTypes.func.isRequired,
    handleDecreaseCounter: PropTypes.func.isRequired,
};
