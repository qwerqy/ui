import { render, screen } from "@testing-library/react";
import { test } from "vitest";
import { cva } from "class-variance-authority";
import { Label } from "./Label";
import { cn } from "@utils/index";

test("Label renders correctly", () => {
  render(<Label>Hello World</Label>);

  const labelElement = screen.getByText("Hello World");
  expect(labelElement).toBeInTheDocument();
});

test("Label applies variant styles correctly", () => {
  const labelVariants = cva(
    "text-red-500" // Example variant class
  );

  render(<Label className={cn(labelVariants())}>Hello World</Label>);

  const labelElement = screen.getByText("Hello World");
  expect(labelElement).toHaveClass("text-red-500");
});
