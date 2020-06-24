/**
 * Index
 *
 * File: /src/index.js
 * Project: Baythium Note Maker
 * Organization: Baythium Ecosystem: https://baythium.com
 */

// eslint-disable-next-line
"use strict";

/* THIRD-PARTY IMPORTS */
import React from 'react';

/* NOTE: This module houses the main render() function */
import { render } from 'react-dom';

import Dexie from 'dexie';

/* CUSTOM IMPORTS */
import App from './App';

/* Access to implementing service workers for progressive web apps */
import * as serviceWorker from './serviceWorker';

import noteData from './data/notes';

import { Store } from './Store';

import { DB_NAME } from './configs/dexie';

/* ************************************************************************* */

/* Create an instance of Dexie in order to communicate with indexed database API */
export const db = new Dexie(DB_NAME);

/* Schema definition */
const schema = {
  notes: '++id, name, content, created_at, updated_at'
};

db.version(1).stores(schema);

/* Open the database */
db.open().catch((err) => {
  console.log(err.stack || err);
});

db.on('populate', function() {
  /* Start populating data */
  noteData.forEach(note => {
    db.notes.add({
      name: note.name,
      content: note.content,
      created_at: note.created_at,
      updated_at: note.updated_at
    });
  });
});

/* db.table(NOTES_TABLE_NAME).toArray() */

const Index = () => (
  <Store>
    <App/>
  </Store>
)

render(<Index/>, document.getElementById('root'))

/*
 * If you want your app to work offline and load faster, you can change
 * unregister() to register() below. Note this comes with some pitfalls.
 * 
 * Learn more about service workers: https://bit.ly/CRA-PWA
 */
serviceWorker.unregister();