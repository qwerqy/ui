import { render, screen } from "@testing-library/react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./Card";

describe("Card component", () => {
  test("renders Card component with children", () => {
    render(
      <Card>
        <p>Card content</p>
      </Card>
    );
    const cardElement = screen.getByText(/Card content/i);
    expect(cardElement).toBeInTheDocument();
  });

  test("CardHeader renders correctly", () => {
    render(
      <CardHeader>
        <p>Header content</p>
      </CardHeader>
    );
    const headerElement = screen.getByText(/Header content/i);
    expect(headerElement).toBeInTheDocument();
  });

  test("CardTitle renders correctly", () => {
    render(<CardTitle>Card Title</CardTitle>);
    const titleElement = screen.getByText(/Card Title/i);
    expect(titleElement).toBeInTheDocument();
  });

  test("CardDescription renders correctly", () => {
    render(<CardDescription>Card Description</CardDescription>);
    const descriptionElement = screen.getByText(/Card Description/i);
    expect(descriptionElement).toBeInTheDocument();
  });

  test("CardContent renders correctly", () => {
    render(
      <CardContent>
        <p>Content</p>
      </CardContent>
    );
    const contentElement = screen.getByText(/Content/i);
    expect(contentElement).toBeInTheDocument();
  });

  test("CardFooter renders correctly", () => {
    render(
      <CardFooter>
        <p>Footer content</p>
      </CardFooter>
    );
    const footerElement = screen.getByText(/Footer content/i);
    expect(footerElement).toBeInTheDocument();
  });
});
