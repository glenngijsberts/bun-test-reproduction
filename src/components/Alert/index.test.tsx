import React from "react";
import { render } from "@testing-library/react";
import { Alert } from ".";

describe("Alert", () => {
  it("matches snapshot", () => {
    const { container } = render(<Alert />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
