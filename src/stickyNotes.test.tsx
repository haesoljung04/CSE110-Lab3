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
  test("creates a new note", () => {
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