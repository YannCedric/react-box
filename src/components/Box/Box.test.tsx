import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Box } from "./Box";

describe("Box", () => {
  test("renders the Box component", () => {
    render(
      <Box>
        <p>Hello</p>
      </Box>
    );
  });

  test("renders the child", () => {
    const { getByText } = render(
      <Box>
        <p>child</p>
      </Box>
    );

    expect(getByText("child")).toBeInTheDocument();
  });
});
