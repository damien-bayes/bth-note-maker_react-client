/**
 * Model: Note
 *
 * File: /src/models/note.js
 * Project: Baythium Note Maker
 * Organization: Baythium Ecosystem: https://baythium.com
 */

// eslint-disable-next-line
'use strict';

/* CUSTOM IMPORTS */
import { DB_NAME } from '../configs/dexie';
import { db } from '../index';

/* ************************************************************************* */

const note = {
  /**
   * Adds a new note to the local database
   * 
   * @param {*} name
   * @param {*} content
   */
  add(name, content = null) {
    /* Note object */
    const note = {
      name: name,
      content: content,
      created_at: +new Date(),
      updated_at: +new Date()
    }

    /*
     * Insert records
     *
     * WARNING: It throws an error when the primary already exists
     */
    db.table(DB_NAME).add(note).then((id) => {
      const newNotes = [...this.state.notes, Object.assign({}, note, {id})];

      this.setState({ notes: newNotes });
    });
  },

  /**
   * Deletes a note by id
   * 
   * @param {*} id
   */
  delete(id) {
    db.table(DB_NAME).delete(id).then(() => {
      const newNotes = this.state.notes.filter((note) => note.id !== id);

      this.setState({ notes: newNotes });
    })
  },

  /**
   * Updates an existing note by id
   * 
   * @param {*} id
   */
  update(id) {
    db.table(DB_NAME).update(id).then(() => {
      const noteToUpdate = this.state.notes.find((note) => note.id === id);
      const newNotes = [
        ...this.state.notes.filter((note) => note.id !== id),
        Object.assign({}, noteToUpdate)
      ];

      this.setState({ notes: newNotes });
    });
  }
}

export default note;