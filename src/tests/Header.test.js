import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import Header from "../components/Header";

describe("Header", () => {
  it("contains title", () => {
    render(<Header />);
    expect(screen.getByText("Blog Demo")).toBeInTheDocument();
  });

  it("shows theme buttons", () => {
    const { container } = render(<Header />);
    expect(container.lastChild).toMatchSnapshot();
  });
});