import { render, screen, fireEvent } from "@testing-library/react";
import { ToDoList } from "./toDoList";
import { dummyGroceryList } from "./constants";

test("read list on screen", () => {
    render(<ToDoList />);
 
    dummyGroceryList.forEach((item) => {
        const itemElement = screen.getByText(item.name);
        expect(itemElement).toBeInTheDocument();
      });
   
  });

test("updates the number of checked items correctly", () => {
    render(

        <ToDoList />
    );

    const checkboxes = screen.getAllByRole("checkbox");

    expect(screen.getByText("Items bought: 0")).toBeInTheDocument();

    fireEvent.click(checkboxes[0]);

    expect(screen.getByText("Items bought: 1")).toBeInTheDocument();

    fireEvent.click(checkboxes[1]);

    expect(screen.getByText("Items bought: 0")).toBeInTheDocument();

  
    });
