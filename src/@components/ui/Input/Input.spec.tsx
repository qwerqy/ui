import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Input } from "./Input";

describe("Input", () => {
  test("renders the input element", () => {
    render(<Input />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
  });

  test("applies the provided className", () => {
    const className = "custom-class";
    render(<Input className={className} />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toHaveClass(className);
  });

  test("applies the provided type", async () => {
    const type = "password";
    render(<Input type={type} placeholder="Enter password" />);

    await waitFor(() => {
      const inputElement = screen.getByPlaceholderText("Enter password");
      expect(inputElement).toHaveAttribute("type", type);
    });
  });

  test("triggers the onChange event", async () => {
    const onChange = vi.fn();
    render(<Input onChange={onChange} placeholder="Enter text" />);
    const inputElement = screen.getByPlaceholderText("Enter text");
    userEvent.type(inputElement, "Hello, World!");

    await waitFor(() => {
      expect(onChange).toHaveBeenCalledTimes(13);
    });
  });
});
