import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import LikeCounter from "../components/LikeCounter";

describe('LikeCounter', () => {
  it('calls updateCounter prop when clicked', () => {
    const updateCounter = jest.fn();
    const likeCounter = 0;

    render(<LikeCounter likeCounter={likeCounter} handleClick={updateCounter} />);
    fireEvent.click(screen.getByText("+"));
    expect(updateCounter).toHaveBeenCalledTimes(1);
  });
  
});
