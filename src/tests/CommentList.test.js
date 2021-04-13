import React from "react";
import { render } from "@testing-library/react";
import CommentList from "../components/CommentList";

const comments = [
  {
    body: "Test comment body 1",
    username: "Test comment username 1",
    uuid: `Test id 123`,
  },
  {
    body: "Test comment body 2",
    username: "Test comment username 2",
    uuid: "Test id 124",
  }
];

describe("CommentList", () => {
  it("renders as expected", () => {
    const { asFragment } = render(
      <CommentList comments={comments} />
    );
    const component = asFragment();
    expect(component).toMatchSnapshot();
  });

  it("render expected number of comments", () => {
    const { getAllByTestId } = render(
      <CommentList comments={comments} />
    );

    expect(getAllByTestId("comment")).toHaveLength(2);
  });
});