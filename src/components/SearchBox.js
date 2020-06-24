/**
 * Component: Search Box
 *
 * File: /src/components/SearchBox.js
 * Project: Baythium Note Maker
 * Organization: Baythium Ecosystem: https://baythium.com
 */

// eslint-disable-next-line
"use strict";

/* THIRD-PARTY IMPORTS */
import React, { useContext, useState } from 'react';
import { Input, AutoComplete } from 'antd';

/* CUSTOM IMPORTS */
import {
  NoteContext,
  NotesContext
} from '../Store';

/* ************************************************************************* */

/* CONSTANTS */
const { Search } = Input;

export default function SearchBox() {
  const [options, setOptions] = useState([]);

  const [notes] = useContext(NotesContext);
  const [, setNote] = useContext(NoteContext);

  const handleSearch = (value) => {
    const items = notes.filter(note => note.name.toLowerCase().includes(value.toLowerCase()));
    let result = [];

    items.forEach(item => result.push({ value: `${item.id}: ${item.name}` }))

    setOptions(
      !value
        ? []
        : result
    );
  }

  const onSelect = value => {
    const fragments = value.split(': ');
    setNote({})

    const foundNote = notes.find(note => {
      return note.id === Number(fragments[0])
    })

    console.log(`Working with id: ${foundNote.id}`);

    setNote(foundNote)
  };

  return(
    <AutoComplete
      options = { options }
      style = {{
        width: 200,
      }}
      onSelect = { onSelect }
      onSearch = { handleSearch }
    >
      <Search
        placeholder = "Search for notes"
        onSearch = { handleSearch }
        style = {{ width: 200 }}
      />
    </AutoComplete>
  )
}