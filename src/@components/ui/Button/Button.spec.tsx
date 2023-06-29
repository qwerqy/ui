import { render, fireEvent, screen } from "@testing-library/react";
import { vi } from "vitest";
import { Button } from "./Button";

describe("Button component", () => {
  test("renders button with default variant and size", async () => {
    render(<Button />);
    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("bg-primary");
    expect(button).toHaveClass("text-primary-foreground");
    expect(button).toHaveClass("h-10");
    expect(button).toHaveClass("px-4");
    expect(button).toHaveClass("py-2");
  });

  test("calls onClick callback when clicked", async () => {
    const handleClick = vi.fn();

    render(<Button onClick={handleClick} />);

    const button = screen.getByRole("button");

    await fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("renders button with different variant and size", async () => {
    render(<Button variant={"secondary"} size={"sm"} />);
    const button = screen.getByRole("button");

    expect(button).toHaveClass("bg-secondary");
    expect(button).toHaveClass("text-secondary-foreground");
    expect(button).toHaveClass("h-9");
    expect(button).toHaveClass("rounded-md");
    expect(button).toHaveClass("px-3");
  });

  test("renders button as child of Slot component when asChild is true", async () => {
    render(
      <Button asChild>
        <button>SLOT</button>
      </Button>
    );
    const button = screen.getByRole("button");

    expect(button.tagName).toBe("BUTTON");
  });
});
