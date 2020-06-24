/**
 * Store
 *
 * File: /src/Store.js
 * Project: Baythium Note Maker
 * Organization: Baythium Ecosystem: https://baythium.com
 */

// eslint-disable-next-line
"use strict";

/* THIRD-PARTY IMPORTS */
import React, { useState } from 'react';

/* CUSTOM IMPORTS */
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