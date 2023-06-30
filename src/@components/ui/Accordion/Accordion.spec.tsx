import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./Accordion";

describe("Accordion", () => {
  test("renders accordion with two items", () => {
    render(
      <Accordion type="single">
        <AccordionItem value={"item-1"}>
          <AccordionTrigger>Item 1</AccordionTrigger>
          <AccordionContent>Content for item 1</AccordionContent>
        </AccordionItem>
        <AccordionItem value={"item-2"}>
          <AccordionTrigger>Item 2</AccordionTrigger>
          <AccordionContent>Content for item 2</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
  });

  test("expands and collapses content on trigger click", async () => {
    render(
      <Accordion type="single">
        <AccordionItem value={"item-1"}>
          <AccordionTrigger>Item 1</AccordionTrigger>
          <AccordionContent data-testid={"accordion-content"}>
            Content for item 1
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    const trigger = screen.getByText("Item 1");
    const content = screen.queryByText(/Content for item 1/);

    // Initially content should not be visible
    expect(content).not.toBeInTheDocument();

    // Clicking the trigger should expand the content
    fireEvent.click(trigger);

    expect(screen.getByText(/Content for item 1/)).toBeInTheDocument();

    // Clicking the trigger again should collapse the content
    fireEvent.click(trigger);
    expect(content).not.toBeInTheDocument();
  });

  test("allows multiple items to be open simultaneously", () => {
    render(
      <Accordion type="multiple">
        <AccordionItem value={"item-1"}>
          <AccordionTrigger>Item 1</AccordionTrigger>
          <AccordionContent>Content for item 1</AccordionContent>
        </AccordionItem>
        <AccordionItem value={"item-2"}>
          <AccordionTrigger>Item 2</AccordionTrigger>
          <AccordionContent>Content for item 2</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    const trigger1 = screen.getByText("Item 1");
    const trigger2 = screen.getByText("Item 2");

    // Click both triggers
    fireEvent.click(trigger1);
    fireEvent.click(trigger2);

    const content1 = screen.getByText("Content for item 1");
    const content2 = screen.getByText("Content for item 2");

    // Both contents should be visible
    expect(content1).toBeVisible();
    expect(content2).toBeVisible();
  });

  test("disables accordion item when disabled prop is passed", () => {
    render(
      <Accordion disabled type="single">
        <AccordionItem value={"item-1"}>
          <AccordionTrigger>Item 1</AccordionTrigger>
          <AccordionContent>Content for item 1</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    const trigger = screen.getByText("Item 1");
    const content = screen.queryByText("Content for item 1");

    // Clicking the disabled trigger should not expand the content
    fireEvent.click(trigger);
    expect(content).not.toBeInTheDocument();
  });
});
