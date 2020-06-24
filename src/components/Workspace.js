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
  // NotesContext
} from '../Store';

import { db } from '../index';

/* ************************************************************************* */

const { Content } = Layout;

export default function Workspace() {
  const [note, setNote] = useContext(NoteContext);
  // const [notes, setNotes] = useContext(NotesContext);

  const [modalVisibility, setModalVisibility] = useState(false); 

  const popConfirm = (e) => {
    console.log(e);
  }

  const showModal = () => {
    setModalVisibility(true);
  };

  const handleModalOk = e => {
    updateNote();
    setModalVisibility(false);
  }

  const handleModalCancel = e => {
    setModalVisibility(false);
  }

  const handleEditorChange = value => {
    setNote({ content: value });
  }

  /**
   * Updates an existing note by id
   * 
   * @param {*} id
   */
  const updateNote = () => {
    console.log('Start updating...', note.id)

    db.notes.update(note.id, {
      name: note.name,
      content: note.content,
      updated_at: +new Date()
    }).then(function (updated) {
      if (updated) {
        console.log(`Note with the key ${note.id} was updated.`);
      }
      else {
        console.log(`Nothing was updated - there were no note with the primary key: ${note.id}`);
      }
        
    });

    /*
    db.table(NOTES_TABLE_NAME).update(id).then(() => {
      const noteToUpdate = notes.find((note) => note.id === id);
      const newNotes = [
        ...notes.filter((note) => note.id !== id),
        Object.assign({}, noteToUpdate)
      ];

      setNotes(newNotes);
    });
    */
  }

  return(
    <Content>
      <div className = "site-layout-background" style = {{ padding: 24, minHeight: 1000 }}>
        <Row justify="end">
          <Button onClick={showModal}>Edit</Button>
          <Modal
            title="Note Editing"
            visible={modalVisibility}
            onOk={handleModalOk}
            onCancel={handleModalCancel}
          >
            <label>Name</label>
            <Input style={{ marginBottom: '16px' }} value={ note.name } />

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