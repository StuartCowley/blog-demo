import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import LikeCounter from "../components/LikeCounter";

describe('LikeCounter', () => {
  const updateCounter = jest.fn();
  const counts = [0, 1, 2, 10];
  it.each(counts)('display %s likes when expected', (count) => {
    render(<LikeCounter likeCounter={count} handleClick={updateCounter} />);
    expect(screen.getByText(count)).toBeInTheDocument();
  });

  it('calls updateCounter prop when clicked', () => {
    const updateCounter = jest.fn();
    const likeCounter = 0;

    render(<LikeCounter likeCounter={likeCounter} handleClick={updateCounter} />);
    fireEvent.click(screen.getByText("+"));
    expect(updateCounter).toHaveBeenCalledTimes(1);
  });
});
