import { render, screen } from "@testing-library/react";
import "@testing-library/react";
import PageHeading from "../PageHeading";

test("Start Page Heading Test", () => {
  render(<PageHeading title="About Us Page" />);
  screen.getByText("About Us Page");
  expect(screen.getByText("About Us Page"));
});
