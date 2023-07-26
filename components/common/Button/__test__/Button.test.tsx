import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "../Button";

test("Load button component", () => {
  render(<Button type="button">Click</Button>);
  screen.getByText("Click");

  expect(screen.getByText("Click"));
});
