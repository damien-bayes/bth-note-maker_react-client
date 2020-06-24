/**
 * App
 *
 * File: /src/App.js
 * Project: Baythium Note Maker
 * Organization: Baythium Ecosystem: https://baythium.com
 */

// eslint-disable-next-line
"use strict";

/* THIRD-PARTY IMPORTS */
import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {
  Layout,
  Menu
} from 'antd';

/* CUSTOM IMPORTS */

/* Styles */
import './styles/app.css';

/* Components */
import Sidebar from './components/Sidebar';
import SearchBox from './components/SearchBox';

/* Routes */
import Home from './routes/Home';
import About from './routes/About';

import { NotesContext } from './Store';
import { db } from './index';
import { NOTES_TABLE_NAME } from './configs/dexie';

/* ************************************************************************* */

/* CONSTANTS */
const { Header } = Layout;

const App = () => {
  const [, setNotes] = useContext(NotesContext);

  /* Similar to componentDidMount and componentDidUpdate */
  useEffect(() => {
    db.table(NOTES_TABLE_NAME).toArray().then(items => {
      setNotes(items);
    });
  });

  return(
    <Router>
      <div className="App">
        <Layout style={{ height:"100vh" }}>

          <Sidebar/>

          <Layout>
            <Header className="site-layout-sub-header-background" style={{ padding: 0 }}>
              <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1">
                  <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link to="/about">About Project</Link>
                </Menu.Item>

                <SearchBox/>
              </Menu>
            </Header>

            <Switch>
              <Route path="/" exact component={ Home }/>
              <Route path="/about" component={ About }/>
            </Switch>
          </Layout>

        </Layout>
      </div>
    </Router>
  )
}

export default App;