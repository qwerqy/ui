import { render, screen } from "@testing-library/react";
import { Badge } from "./Badge";

describe("Badge", () => {
  const baseClass =
    "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2";

  it("should render with default variant", () => {
    render(<Badge />);
    const badge = screen.getByTestId("badge");
    expect(badge).toBeInTheDocument();
    expect(badge.className).toContain(baseClass);
    expect(badge.className).toContain(
      "border-transparent bg-primary text-primary-foreground hover:bg-primary/80"
    );
  });

  it("should render with secondary variant", () => {
    render(<Badge variant="secondary" />);
    const badge = screen.getByTestId("badge");
    expect(badge).toBeInTheDocument();
    expect(badge.className).toContain(baseClass);
    expect(badge.className).toContain(
      "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
    );
  });

  it("should render with destructive variant", () => {
    render(<Badge variant="destructive" />);
    const badge = screen.getByTestId("badge");
    expect(badge).toBeInTheDocument();
    expect(badge.className).toContain(baseClass);
    expect(badge.className).toContain(
      "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80"
    );
  });

  it("should render with outline variant", () => {
    render(<Badge variant="outline" />);
    const badge = screen.getByTestId("badge");
    expect(badge).toBeInTheDocument();
    expect(badge.className).toContain(baseClass);
    expect(badge.className).toContain("text-foreground");
  });

  it("should render with additional className", () => {
    render(<Badge className="extra-class" />);
    const badge = screen.getByTestId("badge");
    expect(badge).toBeInTheDocument();
    expect(badge.className).toContain("extra-class");
  });

  it("should render with children", () => {
    render(<Badge>Badge Content</Badge>);
    expect(screen.getByText("Badge Content")).toBeInTheDocument();
  });
});
