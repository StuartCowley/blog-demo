import React from 'react';
import PropTypes from 'prop-types';

import { StyledButtonSmall, StyledLikeWrapper } from '../styles/GlobalStyles';

const LikeCounter = ({
    likeCounter,
    handleIncreaseCounter,
    handleDecreaseCounter,
}) => {
    return (
        <StyledLikeWrapper>
            <span className="like-wrapper__counter">{likeCounter}</span>
            <StyledButtonSmall
                className="like-wrapper__button"
                type="button"
                onClick={() => handleIncreaseCounter()}
            >
                +
            </StyledButtonSmall>
            {likeCounter > 0 && (
                <StyledButtonSmall
                    className="like-wrapper__button"
                    type="button"
                    data-testid="decreaseButton"
                    onClick={() => handleDecreaseCounter()}
                >
                    -
                </StyledButtonSmall>
            )}
        </StyledLikeWrapper>
    );
};

export default LikeCounter;

LikeCounter.propTypes = {
    likeCounter: PropTypes.number.isRequired,
    handleIncreaseCounter: PropTypes.func.isRequired,
    handleDecreaseCounter: PropTypes.func.isRequired,
};
