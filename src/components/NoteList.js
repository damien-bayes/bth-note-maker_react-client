/* THIRD-PARTY IMPORTS */
import React, { useContext } from 'react';
import { Menu, Badge } from 'antd';

/* CUSTOM IMPORTS */

/* Styles */
import '../styles/components/note-list.css';

import { truncate } from '../utils/string';

import {
  NoteContext,
  NotesContext
} from '../Store';

/* ************************************************************************* */

export default function NoteList() {
  const cls = ['bth-note-list'];

  const [, setNote] = useContext(NoteContext);
  const [notes] = useContext(NotesContext);

  const handleOnClick = e => {
    const foundNote = notes.find(note => {
      return note.id === Number(e.key)
    })

    setNote(foundNote)
  }

  return(
    <Menu
      className = { cls.join(' ') }
      theme="light"
      mode="inline"
      defaultSelectedKeys={[ notes.length ]}>
      {
        notes.map((note, index) =>
          <Menu.Item onClick={ handleOnClick } className='bth-note-list__item' key={ note.id }>
            <h6><Badge status="default"/>{ truncate(note.name, 18) }</h6>
          </Menu.Item> 
        )
      }
    </Menu>
  )
}