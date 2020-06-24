/**
 * Component: Workspace
 *
 * File: /src/components/Workspace.js
 * Project: Baythium Note Maker
 * Organization: Baythium Ecosystem: https://baythium.com
 */

// eslint-disable-next-line
"use strict";

/* THIRD-PARTY IMPORTS */
import React, { useContext, useState } from 'react';
import {
  Layout,
  Button,
  Row,
  Popconfirm,
  Modal,
  Input
} from 'antd';
import marked from 'marked';
import SimpleMDE from 'react-simplemde-editor';

import 'easymde/dist/easymde.min.css';

/* CUSTOM IMPORTS */
import '../styles/components/workspace.css';

import {
  NoteContext,
  NotesContext
} from '../Store';

import { db } from '../index';

/* ************************************************************************* */

/* CONSTANTS */
const { Content } = Layout;

export default function Workspace() {
  /* Contexts */
  const [note] = useContext(NoteContext);
  const [notes, setNotes] = useContext(NotesContext);

  /* States */
  const [modalVisibility, setModalVisibility] = useState(false);

  const [noteName, setNoteName] = useState('');
  const [noteContent, setNoteContent] = useState('');

  const popConfirm = _ => deleteNote();

  const deleteNote = () => {
    db.notes.delete(note.id).then(_ => {
      /* Update notes within app */
      const newNotes = notes.filter((n) => n.id !== note.id);
      setNotes(newNotes);

      // window.location.reload();
    })
  }

  const showModal = () => {
    setModalVisibility(true);
  }

  const handleModalOk = e => {
    updateNote();
    setModalVisibility(false);
  }

  const handleModalCancel = e => {
    setModalVisibility(false);
  }

  const handleEditorChange = value => {
    setNoteContent(value);
  }

  const handleInputChange = value => {
    setNoteName(value);
  }

  /**
   * Updates an existing note by id
   * 
   * @param {*} id
   */
  const updateNote = () => {
    console.log(`Start updating <${note.id}>: ${note.name}`);

    /* @see: https://dexie.org/docs/Table/Table.update() */
    db.notes.update(note.id, {
      name: noteName,
      content: noteContent,
      updated_at: +new Date()
    }).then(function (updated) {
      if (updated) {
        console.log(`Note with the key ${note.id} was updated.`);

        const noteToUpdate = notes.find((n) => n.id === note.id);
        const newNotes = [
          ...notes.filter((n) => n.id !== note.id),
          Object.assign({}, noteToUpdate)
        ];

        setNotes(newNotes);
      }
      else {
        console.log(`Nothing was updated - there were no note with the primary key: ${note.id}`);
      }

    });
  }

  return(
    <Content>
      <div className = "site-layout-background" style = {{ padding: 24, minHeight: 1000 }}>
        <Row justify="end">
          <Button onClick={showModal}>Edit</Button>
          <Modal
            title={ `Note Editing: ${note.name}` }
            visible={modalVisibility}
            onOk={handleModalOk}
            onCancel={handleModalCancel}
          >
            <label>Name</label>
            <Input style={{ marginBottom: '16px' }} defaultValue={ note.name } onChange={(e) => handleInputChange(e.target.value)}/>

            <label>Content</label>
            <SimpleMDE onChange={handleEditorChange} value={ note.content }/>
          </Modal>

          <Popconfirm
            title="Are you sure to delete this note?"
            onConfirm={popConfirm}
            okText="Yes"
            cancelText="No"
          >
            <Button type="danger" data-id={ note.id }>Delete</Button>
          </Popconfirm>
        </Row>

        <div dangerouslySetInnerHTML={{ __html: marked(note.content) }}/>
      </div>
    </Content>
  )
}