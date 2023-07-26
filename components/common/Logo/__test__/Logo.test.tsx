import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Logo from "../Logo";

test("Logo test start", () => {
  render(<Logo title="Hekto" />);
  screen.getByText("Hekto");
  expect(screen.getByText("Hekto"));
});
