import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import NewsLaterSignup from "../NewsLaterSignup";

test("Test Start NewsLaterSignup", () => {
  render(<NewsLaterSignup title="News Later Test" />);

  expect(screen.getByText("News Later Test"));
});
