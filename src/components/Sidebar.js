/* THIRD-PARTY IMPORTS */
import React, { useState, useContext } from 'react';
import {
  Button,
  Layout,
  Tooltip,
  Modal,
  Input,
  Badge
} from 'antd';
// import marked from 'marked';
import SimpleMDE from 'react-simplemde-editor';

import 'easymde/dist/easymde.min.css';

/* CUSTOM IMPORTS */

/* Assets */
import logo from '../assets/images/baythium-ecosystem-1.svg';
import '../styles/components/sidebar.css';

import NoteList from './NoteList';
import { NAME } from '../configs/app';

import { db } from '../index';
// import notes from '../data/notes';

import { NotesContext } from '../Store';

/* ************************************************************************* */

const { Sider } = Layout;

export default function Sidebar() {
  const cls = ['bth-sidebar'];

  const [modalVisibility, setModalVisibility] = useState(false);

  const [noteName, setNoteName] = useState('');
  const [noteContent, setNoteContent] = useState('');

  const [notes, setNotes] = useContext(NotesContext);

  const showModal = () => {
    setModalVisibility(true);
  };

  const handleModalOk = e => {
    addNote(noteName, noteContent);
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

  /*
   * Insert records
   *
   * WARNING: It throws an error when the primary already exists
   */
  const addNote = (name, content = null) => {
    /* Note object */
    const note = {
      name: name,
      content: content,
      created_at: +new Date(),
      updated_at: +new Date()
    }

    /* VARIANT 1 */
    db.notes.add(note).then((id) => {
      console.log(`New note has been created with id: ${id}`);

      /* Update notes within app */
      const newNotes = [...notes, Object.assign({}, note, {id})];
      setNotes(newNotes);

      /* Reset */
      setNoteName('');
      setNoteContent('');
    });

    /*
    VARIANT 2
    db.table(DB_NAME).add(note).then((id) => {
      const newNotes = [...notes, Object.assign({}, note, {id})];

      setState({ notes: newNotes });
    });
    */
  }

  return(
    <Sider theme="light"  className = { cls.join(' ') } breakpoint = "lg" collapsedWidth = "0">
      <div className="bth-sidebar__logo">
        <img src = { logo } alt = { NAME }/>
        <h1>{ NAME }</h1>
        <p>Built for developers in order to make technology open to the world</p>
      </div>
      <Tooltip placement="top" title="Creates a new note">
        <Button onClick={showModal} style={{ marginBottom: '16px' }} block>New Note</Button>
      </Tooltip>

      <Modal
        title="Creating a new note"
        visible={modalVisibility}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
      >
        <label>Name</label>
        <Input style={{ marginBottom: '16px' }} onChange={(e) => handleInputChange(e.target.value)}/>

        <label>Content</label>
        <SimpleMDE onChange={handleEditorChange}/>
      </Modal>
      
      <div>All Notes<Badge count={ notes.length } style={{ backgroundColor: '#f6d365', color: 'black', marginLeft: '8px', borderRadius: '4px' }} /></div>
      <NoteList/>
    </Sider>
  )
}