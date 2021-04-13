import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import LikeCounter from "../components/LikeCounter";

describe('LikeCounter', () => {
  const increaseCounter = jest.fn();
  const decreaseCounter = jest.fn();
  
  const counts = [0, 1, 2, 10];
  it.each(counts)('display %s likes when expected', (count) => {
    render(
      <LikeCounter
        likeCounter={count}
        handleIncreaseCounter={increaseCounter}
        handleDecreaseCounter={decreaseCounter}
      />
    );
    expect(screen.getByText(count)).toBeInTheDocument();
  });

  it('calls updateCounter prop when clicked', () => {
    const likesCount = 0;

    render(
      <LikeCounter
        likeCounter={likesCount}
        handleIncreaseCounter={increaseCounter}
        handleDecreaseCounter={decreaseCounter}
      />
    );
    fireEvent.click(screen.getByText("+"));
    expect(increaseCounter).toHaveBeenCalledTimes(1);
  });
});
