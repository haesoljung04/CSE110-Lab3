import { render, screen, fireEvent } from "@testing-library/react";
import { StickyNotes } from "./stickyNotes";

describe("Create StickyNote", () => {
 test("renders create note form", () => {
   render(<StickyNotes />);

   const createNoteButton = screen.getByText("Create Note");
   expect(createNoteButton).toBeInTheDocument();
 });

 test("creates a new note", () => {
   render(<StickyNotes />);

    // Please make sure your sticky note has a title and content input field with the following placeholders.
   const createNoteTitleInput = screen.getByPlaceholderText("Note Title");
   const createNoteContentTextarea =
     screen.getByPlaceholderText("Note Content");
   const createNoteButton = screen.getByText("Create Note");

   fireEvent.change(createNoteTitleInput, { target: { value: "New Note" } });
   fireEvent.change(createNoteContentTextarea, {
     target: { value: "Note content" },
   });
   fireEvent.click(createNoteButton);

   const newNoteTitle = screen.getByText("New Note");
   const newNoteContent = screen.getByText("Note content");

   expect(newNoteTitle).toBeInTheDocument();
   expect(newNoteContent).toBeInTheDocument();
 });
});

describe("Read StickyNote", () => {
  test("Checks if all stickynotes are present upon app start", () => {
    render(<StickyNotes />);

   const note1Title = screen.getByText("Note 1");
   const note1Content = screen.getByText("This is note 1");

   expect(note1Title).toBeInTheDocument();
   expect(note1Content).toBeInTheDocument();


   const note2Title = screen.getByText("Note 2");
   const note2Content = screen.getByText("This is note 2");

   expect(note2Title).toBeInTheDocument();
   expect(note2Content).toBeInTheDocument();
  });
});

describe("Update StickyNote", () => {
  test("Checks if note 1 is updated", () => {
    render(<StickyNotes />);

    const note1Title = screen.getByText("Note 1");
    const note1Content = screen.getByText("This is note 1");

    expect(note1Title).toBeInTheDocument();
    expect(note1Content).toBeInTheDocument();

    fireEvent.input(note1Title, { target: { innerHTML: "Updated Note 1" } });
    fireEvent.input(note1Content, { target: { innerHTML: "Updated content for note 1" } });

    fireEvent.blur(note1Title);
    fireEvent.blur(note1Content);

    expect(screen.getByText("Updated Note 1")).toBeInTheDocument();
    expect(screen.getByText("Updated content for note 1")).toBeInTheDocument();
  });
});

describe("Delete StickyNote", () => {
  test("Checks if note 1 is deleted", () => {
    render(<StickyNotes />);

    const note1Title = screen.getByText("Note 1");
    const note1Content = screen.getByText("This is note 1");

    expect(note1Title).toBeInTheDocument();
    expect(note1Content).toBeInTheDocument();

    const deleteButton = screen.getAllByText("X")[0];
    fireEvent.click(deleteButton);

    expect(screen.queryByText("Note 1")).not.toBeInTheDocument();
    expect(screen.queryByText("This is note 1")).not.toBeInTheDocument();
  });
});