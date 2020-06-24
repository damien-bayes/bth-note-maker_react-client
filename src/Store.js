import React, { useState } from 'react';

import noteData from './data/notes';

export const NotesContext = React.createContext(noteData);
export const NoteContext = React.createContext({});

export const Store = ({children}) => {
  const [notes, setNotes] = useState(noteData);
  const [note, setNote] = useState(noteData[0]);

  return(
    <NotesContext.Provider value={[notes, setNotes]}>
      <NoteContext.Provider value={[note, setNote]}>
        {children}
      </NoteContext.Provider>
    </NotesContext.Provider>
  )
}