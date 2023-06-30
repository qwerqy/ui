import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Alert, AlertTitle, AlertDescription } from "./Alert";

describe("Alert", () => {
  it("renders Alert with the default variant correctly", () => {
    render(
      <Alert>
        <AlertTitle>Default Title</AlertTitle>
        <AlertDescription>Default Description</AlertDescription>
      </Alert>
    );

    // Check if the Alert, Title, and Description are rendered
    expect(screen.getByRole("alert")).toBeInTheDocument();
    expect(screen.getByText("Default Title")).toBeInTheDocument();
    expect(screen.getByText("Default Description")).toBeInTheDocument();
  });

  it("renders Alert with the destructive variant correctly", () => {
    render(
      <Alert variant="destructive">
        <AlertTitle>Destructive Title</AlertTitle>
        <AlertDescription>Destructive Description</AlertDescription>
      </Alert>
    );

    // Check if the Alert, Title, and Description are rendered
    expect(screen.getByRole("alert")).toBeInTheDocument();
    expect(screen.getByText("Destructive Title")).toBeInTheDocument();
    expect(screen.getByText("Destructive Description")).toBeInTheDocument();
  });
});
