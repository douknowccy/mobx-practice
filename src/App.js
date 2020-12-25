import "./App.css";
import React from "react";
import { NewNoteForm } from "./NewNoteForm";
import { useNotesStore } from "./NotesContext";
import { useObserver } from "mobx-react";
function App() {
  const notesStore = useNotesStore();
  return useObserver(() => {
    console.log(notesStore.notes[0]);
    return (
      <>
        <ul>
          {notesStore.notes.map((note) => {
            return (
              <li onClick={() => notesStore.removeNote(note.id)} key={note.id}>
                {note.text}
              </li>
            );
          })}
        </ul>
        <NewNoteForm />
      </>
    );
  });
}

export default App;
